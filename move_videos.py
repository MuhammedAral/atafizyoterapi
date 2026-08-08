import os
import re

root_dir = r"c:\Users\Muhammed Ali Aral\Desktop\dosyalar\projeler\atafizyoterapi"

index_path = os.path.join(root_dir, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    index_html = f.read()

# 1. Extract the videos section
videos_section_match = re.search(r'(<!-- ========== VIDEOS SECTION ========== -->.*?)</section>', index_html, re.DOTALL)
if not videos_section_match:
    print("Videos section not found!")
    exit(1)
videos_section = videos_section_match.group(1) + "</section>\n"

# Replace preload="auto" with preload="metadata" in videos
videos_section = videos_section.replace('preload="auto"', 'preload="metadata"')
videos_section = videos_section.replace('id="videos"', '') # remove id to avoid jumping
videos_section = videos_section.replace('padding: 100px 0', 'padding: 160px 0 100px') # add top padding

# 2. Create videolar.html from index.html skeleton
# We'll remove all <section> tags from index.html body, and insert the modified videos section
videolar_html = index_html
# Remove everything between <main> and </main> (Wait, index.html doesn't have <main>?)
# Let's check if index.html has main
if "<main>" in videolar_html:
    videolar_html = re.sub(r'<main>.*?</main>', f'<main>\n{videos_section}\n</main>', videolar_html, flags=re.DOTALL)
else:
    # If no main, just remove all sections
    videolar_html = re.sub(r'<section.*?</section>', '', videolar_html, flags=re.DOTALL)
    # Insert it between header and footer
    videolar_html = re.sub(r'(</header>)', f'\\1\n<main>\n{videos_section}\n</main>', videolar_html, flags=re.DOTALL)

# Fix title in videolar.html
videolar_html = re.sub(r'<title>.*?</title>', '<title>Videolar | Ata Fizyoterapi</title>', videolar_html)

# Save videolar.html
videolar_path = os.path.join(root_dir, "videolar.html")
with open(videolar_path, "w", encoding="utf-8") as f:
    f.write(videolar_html)
print("Created videolar.html")

# 3. Modify index.html
# Remove the videos section
new_index = index_html.replace(videos_section_match.group(1) + "</section>", "")
# Add lazy loading to about image
new_index = new_index.replace('class="about-image"', 'class="about-image" loading="lazy"')
# Update navbar link
new_index = new_index.replace('href="#videos"', 'href="videolar.html"')
with open(index_path, "w", encoding="utf-8") as f:
    f.write(new_index)
print("Updated index.html")

# 4. Modify all html files in hastaliklar/
hastaliklar_dir = os.path.join(root_dir, "hastaliklar")
count = 0
for filename in os.listdir(hastaliklar_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(hastaliklar_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace links
        content = content.replace('href="../index.html#videos"', 'href="../videolar.html"')
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
print(f"Updated {count} files in hastaliklar/")

