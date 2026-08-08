import os
import re

css_path = r"c:\Users\Muhammed Ali Aral\Desktop\dosyalar\projeler\atafizyoterapi\assets\css\styles.css"

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Remove comments
css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
# Remove newlines and tabs
css = re.sub(r'\s+', ' ', css)
# Remove spaces around colons, braces, semicolons
css = re.sub(r'\s*{\s*', '{', css)
css = re.sub(r'\s*}\s*', '}', css)
css = re.sub(r'\s*;\s*', ';', css)
css = re.sub(r'\s*:\s*', ':', css)
css = re.sub(r'\s*,\s*', ',', css)

# Make a backup
with open(css_path + ".bak", "w", encoding="utf-8") as f:
    f.write(css)

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css.strip())

print("Minified styles.css")
