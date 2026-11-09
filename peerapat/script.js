/**
 * Portfolio Scripts - นาย พีรพัฒน์ ไกรนรา (เลขที่ 14) โรงเรียนนาบอน
 * Lightbox modal, Theme switching, and smooth navigation
 */

(function () {
  'use strict';

  // --- Theme Controller ---
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const root = document.documentElement;

  function initTheme() {
    const savedTheme = localStorage.getItem('peerapat_theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light as requested for academic portfolios, or check system
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('peerapat_theme', theme);

    if (theme === 'dark') {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  initTheme();

  // --- Lightbox Controller ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxOriginalBtn = document.getElementById('lightboxOriginalBtn');
  let currentOriginalSheet = null;

  window.openLightbox = function (imgSrc, titleText, originalSheet) {
    if (!lightboxModal || !lightboxImg || !lightboxTitle) return;

    lightboxImg.src = imgSrc;
    lightboxImg.alt = titleText || 'ภาพผลงานขนาดใหญ่';
    lightboxTitle.textContent = titleText || 'ภาพผลงาน';

    currentOriginalSheet = originalSheet || null;
    if (lightboxOriginalBtn) {
      if (currentOriginalSheet && currentOriginalSheet !== imgSrc) {
        lightboxOriginalBtn.style.display = 'inline-flex';
        lightboxOriginalBtn.onclick = function () {
          window.openLightbox(currentOriginalSheet, 'แผ่นแฟ้มสะสมผลงานฉบับเต็ม: ' + titleText, null);
        };
      } else {
        lightboxOriginalBtn.style.display = 'none';
      }
    }

    lightboxModal.style.display = 'flex';
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    if (!lightboxModal) return;
    lightboxModal.style.display = 'none';
    lightboxModal.setAttribute('aria-hidden', 'true');
    if (lightboxImg) lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  // Keyboard close listener
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      window.closeLightbox();
    }
  });

  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Scroll Spy for Active Navigation ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

})();

