import subprocess
import struct
import math

# Load input image 1600x1200 as raw grayscale bytes
width, height = 1600, 1200
cmd_in = ['convert', 'public/images/hero_salon_interior.jpg', '-colorspace', 'gray', '-depth', '8', 'gray:-']
raw_gray = subprocess.check_output(cmd_in)

out_rgb = bytearray(width * height * 3)

# Process pixel by pixel
for y in range(height):
    y_norm = y / float(height)  # 0 at top, 1 at bottom
    row_offset = y * width
    
    for x in range(width):
        x_norm = x / float(width)
        idx = row_offset + x
        L = raw_gray[idx]
        
        # Base luminance
        l_norm = L / 255.0
        
        # Default multipliers
        # We define continuous weights for:
        # 1. Floor (bottom, dark wood)
        # 2. Wall (top/mid, ivory/cream)
        # 3. Chair & styling station (middle)
        # 4. Highlight glow
        
        # Floor weight: starts around y=600, strongest at bottom y>750
        floor_weight = max(0.0, min(1.0, (y_norm - 0.50) / 0.35))
        # Reduce floor weight on extreme highlights
        if l_norm > 0.80:
            floor_weight *= (1.0 - (l_norm - 0.80) / 0.20)
            
        # Wall weight: strongest at top y < 500 and for lighter tones
        wall_weight = max(0.0, min(1.0, (0.65 - y_norm) / 0.40)) * max(0.0, min(1.0, (l_norm - 0.35) / 0.35))
        
        # Chair / Leather / Craft weight: mid tones in the middle vertical region
        # Warm caramel / tan leather is strongest in midtones (L between 60 and 175) in the middle band
        mid_y = 1.0 - 4.0 * ((y_norm - 0.55) ** 2)
        mid_y = max(0.0, min(1.0, mid_y))
        
        mid_l = 1.0 - 4.0 * ((l_norm - 0.45) ** 2)
        mid_l = max(0.0, min(1.0, mid_l))
        chair_weight = mid_y * mid_l
        
        # Normalize weights
        # Base tone: warm neutral cream / ivory
        # r_m, g_m, b_m
        r_mult = 1.06
        g_mult = 1.02
        b_mult = 0.94
        
        # Apply Floor (rich dark wood: warm chestnut/walnut)
        # Deep wood has warm amber red/brown tones in shadows and midtones
        if floor_weight > 0.0:
            # Dark wood ratio
            f_r = 1.28
            f_g = 0.98
            f_b = 0.72
            r_mult = r_mult * (1.0 - floor_weight) + f_r * floor_weight
            g_mult = g_mult * (1.0 - floor_weight) + f_g * floor_weight
            b_mult = b_mult * (1.0 - floor_weight) + f_b * floor_weight
            
        # Apply Caramel / Tan leather chairs and warm salon materials
        if chair_weight > 0.0:
            c_r = 1.36
            c_g = 1.04
            c_b = 0.68
            # Blend in chair warmth
            r_mult = r_mult * (1.0 - chair_weight * 0.7) + c_r * (chair_weight * 0.7)
            g_mult = g_mult * (1.0 - chair_weight * 0.7) + c_g * (chair_weight * 0.7)
            b_mult = b_mult * (1.0 - chair_weight * 0.7) + c_b * (chair_weight * 0.7)
            
        # Apply Wall (cream / soft ivory)
        if wall_weight > 0.0:
            w_r = 1.08
            w_g = 1.04
            w_b = 0.95
            r_mult = r_mult * (1.0 - wall_weight * 0.6) + w_r * (wall_weight * 0.6)
            g_mult = g_mult * (1.0 - wall_weight * 0.6) + w_g * (wall_weight * 0.6)
            b_mult = b_mult * (1.0 - wall_weight * 0.6) + w_b * (wall_weight * 0.6)
            
        # Black styling stations: very dark values (L < 45) should remain deep neutral/charcoal black
        if l_norm < 0.20:
            dark_factor = max(0.0, min(1.0, (0.20 - l_norm) / 0.15))
            # Pull towards neutral black
            r_mult = r_mult * (1.0 - dark_factor * 0.8) + 1.02 * (dark_factor * 0.8)
            g_mult = g_mult * (1.0 - dark_factor * 0.8) + 1.00 * (dark_factor * 0.8)
            b_mult = b_mult * (1.0 - dark_factor * 0.8) + 0.98 * (dark_factor * 0.8)

        # Warm welcoming lighting: bright bulbs and reflection (L > 220)
        if l_norm > 0.85:
            glow_factor = (l_norm - 0.85) / 0.15
            r_mult = r_mult * (1.0 - glow_factor) + 1.04 * glow_factor
            g_mult = g_mult * (1.0 - glow_factor) + 1.02 * glow_factor
            b_mult = b_mult * (1.0 - glow_factor) + 0.96 * glow_factor
            
        # Calculate final RGB preserving perceived brightness
        # To preserve exact perceived luminance Y = 0.299R + 0.587G + 0.114B = L:
        # We scale raw (R0, G0, B0) = (L*r_mult, L*g_mult, L*b_mult)
        r0 = L * r_mult
        g0 = L * g_mult
        b0 = L * b_mult
        
        curr_y = 0.299 * r0 + 0.587 * g0 + 0.114 * b0
        if curr_y > 0.001:
            scale = L / curr_y
            # subtle mix between scaled and direct for natural richness
            scale = 0.85 * scale + 0.15
            r_final = min(255, max(0, int(r0 * scale)))
            g_final = min(255, max(0, int(g0 * scale)))
            b_final = min(255, max(0, int(b0 * scale)))
        else:
            r_final = g_final = b_final = L
            
        out_idx = idx * 3
        out_rgb[out_idx] = r_final
        out_rgb[out_idx + 1] = g_final
        out_rgb[out_idx + 2] = b_final

# Pipe back to ImageMagick to create JPEG with high quality
cmd_out = ['convert', '-size', f'{width}x{height}', '-depth', '8', 'rgb:-', '-quality', '92', 'public/images/hero_salon_interior.jpg']
p = subprocess.Popen(cmd_out, stdin=subprocess.PIPE)
p.communicate(input=out_rgb)
print('Color restoration completed successfully!')
