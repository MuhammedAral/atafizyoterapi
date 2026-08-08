import os

base_dir = r"c:\Users\Muhammed Ali Aral\Desktop\dosyalar\projeler\atafizyoterapi\hastaliklar"
template_file = os.path.join(base_dir, "diz-kireclenmesi.html")

with open(template_file, "r", encoding="utf-8") as f:
    template = f.read()

files_to_fix = [
    ("bel-fitigi", "Bel Fıtığı", "Aksaray'da bel fıtığı tedavisi için uzman fizyoterapi ve rehabilitasyon hizmetleri. Ameliyatsız çözüm yöntemleri."),
    ("boyun-fitigi", "Boyun Fıtığı", "Aksaray'da boyun fıtığı tedavisi. Manuel terapi ve kişiye özel egzersizlerle boyun ağrılarından kurtulun."),
    ("bel-agrisi", "Bel Ağrısı", "Kronik ve akut bel ağrısı tedavisi. Aksaray Ata Fizyoterapi'de profesyonel değerlendirme ve tedavi."),
    ("boyun-agrisi", "Boyun Ağrısı", "Boyun ağrısı ve tutulmaları için etkili fizyoterapi yöntemleri. Aksaray'da uzman destek."),
    ("siyatik", "Siyatik", "Siyatik sinir sıkışması ve bacağa vuran ağrılar için fizik tedavi uygulamaları.")
]

for slug, name, desc in files_to_fix:
    content = template.replace("Diz Kireçlenmesi (Osteoartrit)", name)
    content = content.replace("Diz kireçlenmesi (osteoartrit) tedavisi. Aksaray'da diz ağrılarınıza yönelik fizik tedavi ve egzersiz programları.", desc)
    content = content.replace("diz-kireclenmesi.html", slug + ".html")
    with open(os.path.join(base_dir, slug + ".html"), "w", encoding="utf-8") as f:
        f.write(content)

print("Fixed 5 files successfully.")
