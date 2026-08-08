import os
import glob
from PIL import Image

root_dir = r"c:\Users\Muhammed Ali Aral\Desktop\dosyalar\projeler\atafizyoterapi"
images_dir = os.path.join(root_dir, "assets", "images")

files_to_convert = [
    ("logo.png", "logo.webp"),
    ("TalatAslanAnaSayfa.jpeg", "talataslan.webp")
]

# Convert images
for old_file, new_file in files_to_convert:
    old_path = os.path.join(images_dir, old_file)
    new_path = os.path.join(images_dir, new_file)
    if os.path.exists(old_path):
        img = Image.open(old_path)
        img.save(new_path, "webp", quality=85)
        print(f"Converted {old_file} to {new_file}")
    else:
        print(f"Warning: {old_file} not found!")

# Replace links in HTML and JS files
files_to_search = glob.glob(os.path.join(root_dir, "*.html")) + \
                  glob.glob(os.path.join(root_dir, "hastaliklar", "*.html")) + \
                  glob.glob(os.path.join(root_dir, "hastaliklar", "*.js"))

for filepath in files_to_search:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = content.replace("logo.png", "logo.webp")
    new_content = new_content.replace("TalatAslanAnaSayfa.jpeg", "talataslan.webp")
    
    if content != new_content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated image links in {os.path.basename(filepath)}")

print("Image optimization complete.")
