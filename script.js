/* ============================================================
   PATRICK SAN — script.js
   Version 1.0
   ============================================================ */

'use strict';

/* ── NAV: scroll shadow + active link ── */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Highlight active nav link by section
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => {
            l.classList.toggle('active',
              l.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.35 });
    sections.forEach(s => observer.observe(s));
  }
})();

/* ── MOBILE MENU ── */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ── SMOOTH SCROLL ── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 64; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── SCROLL REVEAL ── */
(function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── HERO VIDEO: fallback to image if video fails ── */
(function initHeroVideo() {
  const video = document.querySelector('.hero__video');
  if (!video) return;
  video.addEventListener('error', () => {
    video.style.display = 'none';
    const fallback = document.querySelector('.hero__video-fallback');
    if (fallback) fallback.style.display = 'block';
  });
})();

/* ── HERO PARALLAX (subtle) ── */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const hero = document.querySelector('.hero__media');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      hero.style.transform = `translateY(${y * 0.18}px)`;
    }
  }, { passive: true });
})();

/* ── DRAG-SCROLL GALLERY ── */
(function initGaleria() {
  document.querySelectorAll('.galeria').forEach(galeria => {
    let isDown = false, startX, scrollLeft;

    galeria.addEventListener('mousedown', e => {
      isDown = true;
      galeria.classList.add('active');
      startX = e.pageX - galeria.offsetLeft;
      scrollLeft = galeria.scrollLeft;
    });
    galeria.addEventListener('mouseleave', () => {
      isDown = false;
      galeria.classList.remove('active');
    });
    galeria.addEventListener('mouseup', () => {
      isDown = false;
      galeria.classList.remove('active');
    });
    galeria.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galeria.offsetLeft;
      const walk = (x - startX) * 1.4;
      galeria.scrollLeft = scrollLeft - walk;
    });
  });
})();

/* ── CONTACT FORM: basic validation ── */
(function initContactForm() {
  const form = document.getElementById('contact-form-el');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="nome"]');
    const email = form.querySelector('[name="email"]');
    const msg = form.querySelector('[name="mensagem"]');
    let valid = true;

    [name, email, msg].forEach(field => {
      if (!field) return;
      const isEmpty = !field.value.trim();
      field.style.borderColor = isEmpty ? '#c0392b' : '';
      if (isEmpty) valid = false;
    });

    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#c0392b';
      valid = false;
    }

    if (valid) {
      const btn = form.querySelector('[type="submit"]');
      if (btn) {
        btn.textContent = 'Mensagem enviada';
        btn.disabled = true;
        btn.style.background = '#2C3E2D';
      }
      // TODO: replace with actual form submission (Formspree, Netlify Forms, etc.)
    }
  });
})();

/* ── NEWSLETTER FORM ── */
(function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (!input || !input.value.trim()) {
      input.style.borderColor = '#c0392b';
      return;
    }
    const btn = form.querySelector('button');
    if (btn) {
      btn.textContent = 'Inscrito!';
      btn.disabled = true;
    }
    // TODO: connect to Mailchimp / Brevo / ConvertKit
  });
})();

/* ── CURRENT YEAR in footer ── */
(function initYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ── CONTACT FORM — pré-seleção de assunto via hash da URL ──
   Permite que outras páginas usem links como
   contato.html#experiencias, contato.html#cursos, etc.
   para já abrir o formulário com o assunto correto selecionado. */
(function initContactSubjectFromHash() {
  const select = document.getElementById('assunto');
  if (!select) return;

  const hashToValue = {
    'experiencias': 'experiencias',
    'cursos': 'cursos',
    'namazuko': 'namazuko',
    'fornecimento': 'namazuko',
    'parcerias': 'parcerias',
    'imprensa': 'imprensa'
  };

  const applyFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hashToValue[hash]) {
      select.value = hashToValue[hash];
      const form = document.getElementById('contact-form');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  applyFromHash();
  window.addEventListener('hashchange', applyFromHash);
})();
