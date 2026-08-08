import re
with open('videolar.html', 'r', encoding='utf-8') as f:
    c = f.read()
# Replace navbar links
c = c.replace('href="#home"', 'href="index.html#home"')
c = c.replace('href="#about"', 'href="index.html#about"')
c = c.replace('href="#videos" class="nav-link"', 'href="#" class="nav-link active"')
c = c.replace('href="#procedures"', 'href="index.html#procedures"')
c = c.replace('href="#reviews"', 'href="index.html#reviews"')
c = c.replace('href="#contact"', 'href="index.html#contact"')

# Fix active class on Anasayfa
c = c.replace('href="index.html#home" class="nav-link active"', 'href="index.html#home" class="nav-link"')

# Fix footer links
c = c.replace('href="#videos"', 'href="#"')

with open('videolar.html', 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed links in videolar.html')
