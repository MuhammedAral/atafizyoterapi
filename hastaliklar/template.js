/* =============================================
   ATA FİZYOTERAPİ - Hastalık Sayfası Template Engine
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    const slug = getSlugFromURL();
    if (!slug) return;

    const disease = findDiseaseBySlug(slug);
    if (!disease) {
        renderNotFound();
        return;
    }

    renderDiseasePage(disease);
    initFaqAccordion();
    initDiseaseScrollReveal();
    initDiseaseNavbar();
    initDiseaseMobileMenu();
});

/* ---- Get slug from URL ---- */
function getSlugFromURL() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    if (!filename || filename === 'index.html') return null;
    return filename.replace('.html', '');
}

/* ---- Find disease in data ---- */
function findDiseaseBySlug(slug) {
    if (typeof DISEASE_DATA === 'undefined') return null;
    return DISEASE_DATA.find(d => d.slug === slug);
}

/* ---- Render disease page ---- */
function renderDiseasePage(disease) {
    const container = document.getElementById('disease-page-content');
    if (!container) return;

    const category = CATEGORY_DATA ? CATEGORY_DATA.find(c => c.id === disease.category) : null;
    const categoryTitle = category ? category.title : '';

    container.innerHTML = `
        <!-- Breadcrumb -->
        <div class="breadcrumb-section">
            <div class="container">
                <nav class="breadcrumb" aria-label="Breadcrumb">
                    <a href="../index.html">Anasayfa</a>
                    <span class="breadcrumb-sep">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </span>
                    <a href="./">Hastalıklar</a>
                    <span class="breadcrumb-sep">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </span>
                    <span class="breadcrumb-current">${disease.title}</span>
                </nav>
            </div>
        </div>

        <!-- Hero Section -->
        <section class="disease-hero">
            <div class="disease-hero-bg"></div>
            <div class="container disease-hero-content" data-reveal>
                <div class="disease-hero-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    ${categoryTitle}
                </div>
                <h1 class="disease-hero-title">${disease.title}</h1>
                <p class="disease-hero-description">${disease.heroDescription}</p>
                <div class="disease-hero-actions">
                    <a href="tel:+905339173374" class="btn btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Randevu Al
                    </a>
                    <a href="https://wa.me/905339173374?text=Merhaba,%20${encodeURIComponent(disease.title)}%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" class="btn btn-outline">
                        WhatsApp ile Yazın
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- Content Sections -->
        <div class="disease-content">
            <!-- Hastalık Nedir? -->
            <section class="disease-section section-nedir" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>${disease.title} Nedir?</h2>
                            <p>${disease.nedir}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Belirtileri -->
            <section class="disease-section section-alt" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>Belirtileri Nelerdir?</h2>
                            <ul class="disease-list">
                                ${disease.belirtileri.map(b => `<li><span class="list-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></span>${b}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Neden Oluşur? -->
            <section class="disease-section" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>Neden Oluşur?</h2>
                            <ul class="disease-list">
                                ${disease.nedenleri.map(n => `<li><span class="list-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></span>${n}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Fizyoterapi Nasıl Yardımcı Olabilir? -->
            <section class="disease-section section-alt" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>Fizyoterapi Nasıl Yardımcı Olabilir?</h2>
                            <p>${disease.fizyoterapiNasilYardimci}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Uygulanabilecek Fizyoterapi Yöntemleri -->
            <section class="disease-section" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>Uygulanabilecek Fizyoterapi Yöntemleri</h2>
                            <div class="treatment-methods-grid">
                                ${disease.tedaviYontemleri.map(t => `
                                    <div class="treatment-method-card">
                                        <div class="treatment-method-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </div>
                                        <div class="treatment-method-content">
                                            <h4>${t.name}</h4>
                                            <p>${t.description}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tedavi / Rehabilitasyon Süreci -->
            <section class="disease-section section-alt" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>Tedavi ve Rehabilitasyon Süreci</h2>
                            <p>${disease.tedaviSureci}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Sık Sorulan Sorular -->
            <section class="disease-section" data-reveal>
                <div class="container">
                    <div class="disease-section-inner">
                        <div class="disease-section-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <div class="disease-section-body">
                            <h2>Sık Sorulan Sorular</h2>
                            <div class="faq-accordion">
                                ${disease.sss.map((item, i) => `
                                    <div class="faq-item${i === 0 ? ' active' : ''}">
                                        <button class="faq-question" aria-expanded="${i === 0 ? 'true' : 'false'}">
                                            <span>${item.soru}</span>
                                            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                        <div class="faq-answer" ${i === 0 ? 'style="max-height: 500px"' : ''}>
                                            <p>${item.cevap}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="disease-cta" data-reveal>
                <div class="disease-cta-bg"></div>
                <div class="container disease-cta-content">
                    <h2>Profesyonel Destek İçin Bize Ulaşın</h2>
                    <p>${disease.title} tedavisi için Aksaray Ata Fizyoterapi'de kişiye özel değerlendirme ve tedavi programı oluşturuyoruz.</p>
                    <div class="disease-cta-actions">
                        <a href="tel:+905339173374" class="btn btn-primary btn-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Hemen Arayın
                        </a>
                        <a href="https://wa.me/905339173374?text=Merhaba,%20${encodeURIComponent(disease.title)}%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" class="btn btn-outline btn-lg">
                            WhatsApp ile Yazın
                        </a>
                    </div>
                </div>
            </section>
        </div>
    `;
}

/* ---- FAQ Accordion ---- */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(other => {
                other.classList.remove('active');
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                other.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open clicked (if it wasn't already open)
            if (!isActive) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

/* ---- Scroll Reveal for disease pages ---- */
function initDiseaseScrollReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/* ---- Navbar for disease pages ---- */
function initDiseaseNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    function handleScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/* ---- Mobile menu for disease pages ---- */
function initDiseaseMobileMenu() {
    const toggler = document.getElementById('navbarToggler');
    const nav = document.getElementById('navbarNav');
    if (!toggler || !nav) return;

    const body = document.body;

    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('mobile-overlay');
        body.appendChild(overlay);
    }

    function toggleMenu() {
        toggler.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        toggler.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }

    toggler.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

/* ---- Not Found ---- */
function renderNotFound() {
    const container = document.getElementById('disease-page-content');
    if (!container) return;

    container.innerHTML = `
        <section class="disease-hero" style="min-height: 60vh; display: flex; align-items: center;">
            <div class="disease-hero-bg"></div>
            <div class="container disease-hero-content" style="padding-top: 120px;">
                <h1 class="disease-hero-title">Sayfa Bulunamadı</h1>
                <p class="disease-hero-description">Aradığınız hastalık sayfası bulunamadı.</p>
                <div class="disease-hero-actions">
                    <a href="./" class="btn btn-primary">Tüm Hastalıklar</a>
                    <a href="../index.html" class="btn btn-outline">Anasayfa</a>
                </div>
            </div>
        </section>
    `;
}
