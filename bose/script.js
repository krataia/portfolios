/**
 * Editorial Academic Portfolio Script
 * นาย ชินภัทร คหะวงศ์ (Chinphat Kahawong)
 * High-Precision Dossier & Archival Gallery Engine
 */

// Full Document Archive Catalog
const ARCHIVE_DOCUMENTS = [
  {
    id: 'จ.๑',
    src: 'cdd29e65-7f96-4db4-b287-65a9a249d9aa.jpeg',
    title: 'หน้าปกแฟ้มสะสมผลงาน',
    subtitle: 'มหาวิทยาลัยราชภัฏนครศรีธรรมราช • คณะรัฐประศาสนศาสตร์ / นิติศาสตร์'
  },
  {
    id: 'จ.๒',
    src: '3e08dc2a-3e80-456b-a3ab-c4bef7e9ff54.jpeg',
    title: 'ประวัติส่วนตัวและภาพถ่าย',
    subtitle: 'ข้อมูลบิดา มารดา ภูมิลำเนา และช่องทางการติดต่อ'
  },
  {
    id: 'จ.๓',
    src: '3cbc4530-2577-4d71-a824-fa72bb68c1cd.jpeg',
    title: 'บันทึกประวัติการศึกษา',
    subtitle: 'ประถมศึกษา (ป.1-6) • มัธยมศึกษาตอนต้น (ม.1-3) • มัธยมศึกษาตอนปลาย (ม.4-6)'
  },
  {
    id: 'จ.๔',
    src: 'c47885a1-8f2b-4561-bedc-b093816e630f.jpeg',
    title: 'เกียรติบัตรการอบรมภาวะผู้นำ ครั้งที่ ๔',
    subtitle: 'ศูนย์การศึกษาจังหวัดอุดรธานี มหาวิทยาลัยราชภัฏสวนสุนันทา'
  },
  {
    id: 'จ.๕',
    src: 'b4931531-6bac-4bcf-9c6d-73737eed8bd7.jpeg',
    title: 'กิจกรรมกีฬาสีภายใน',
    subtitle: 'โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก'
  }
];

let currentDocIndex = 0;
let currentZoom = 1;
const ZOOM_STEP = 0.25;
const MIN_ZOOM = 0.75;
const MAX_ZOOM = 2.5;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollSpy();
  initKeyboard();
});

/* Theme Management */
function initTheme() {
  const themeBtn = document.getElementById('themeButton');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  // Default to light for official academic credibility, or use saved preference
  const savedTheme = localStorage.getItem('site_theme');
  const activeTheme = savedTheme || 'light';
  applyTheme(activeTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      applyTheme(target);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site_theme', theme);

    if (theme === 'dark') {
      if (sunIcon) sunIcon.classList.remove('is-hidden');
      if (moonIcon) moonIcon.classList.add('is-hidden');
    } else {
      if (sunIcon) sunIcon.classList.add('is-hidden');
      if (moonIcon) moonIcon.classList.remove('is-hidden');
    }
  }
}

/* Mobile Navigation */
function initNavigation() {
  const menuBtn = document.getElementById('menuButton');
  const navMenu = document.getElementById('navMenu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      menuBtn.classList.toggle('is-active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        navMenu.classList.remove('is-open');
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* Scroll Spy */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function onScroll() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Lightbox Modal & Multi-Document Gallery */
function openArchiveModal(index) {
  if (index < 0 || index >= ARCHIVE_DOCUMENTS.length) {
    index = 0;
  }
  currentDocIndex = index;
  renderDocument();

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function renderDocument() {
  const doc = ARCHIVE_DOCUMENTS[currentDocIndex];
  if (!doc) return;

  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');
  const tag = document.getElementById('lightboxIndexTag');
  const indicator = document.getElementById('lightboxPageIndicator');

  if (img) {
    img.src = doc.src;
    img.alt = doc.title;
  }
  if (caption) {
    caption.textContent = doc.title;
  }
  if (tag) {
    tag.textContent = doc.id;
  }
  if (indicator) {
    indicator.textContent = `ฉบับที่ ${currentDocIndex + 1} จาก ${ARCHIVE_DOCUMENTS.length}`;
  }

  resetZoom();
}

function nextDocument() {
  currentDocIndex = (currentDocIndex + 1) % ARCHIVE_DOCUMENTS.length;
  renderDocument();
}

function prevDocument() {
  currentDocIndex = (currentDocIndex - 1 + ARCHIVE_DOCUMENTS.length) % ARCHIVE_DOCUMENTS.length;
  renderDocument();
}

function hideLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  resetZoom();
}

function onLightboxBackdropClick(event) {
  if (event.target.id === 'lightbox' || event.target.id === 'mediaContainer') {
    hideLightbox();
  }
}

/* Zoom Controls */
function zoomIn() {
  if (currentZoom < MAX_ZOOM) {
    currentZoom = Math.min(MAX_ZOOM, currentZoom + ZOOM_STEP);
    applyZoom();
  }
}

function zoomOut() {
  if (currentZoom > MIN_ZOOM) {
    currentZoom = Math.max(MIN_ZOOM, currentZoom - ZOOM_STEP);
    applyZoom();
  }
}

function resetZoom() {
  currentZoom = 1;
  applyZoom();
}

function applyZoom() {
  const img = document.getElementById('lightboxImage');
  if (img) {
    img.style.transform = `scale(${currentZoom})`;
    img.style.cursor = currentZoom > 1 ? 'grab' : 'default';
  }
}

/* Keyboard Navigation */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    const isOpen = lightbox && lightbox.classList.contains('is-open');

    if (!isOpen) return;

    if (e.key === 'Escape') {
      hideLightbox();
    } else if (e.key === 'ArrowRight') {
      nextDocument();
    } else if (e.key === 'ArrowLeft') {
      prevDocument();
    } else if (e.key === '+' || e.key === '=') {
      zoomIn();
    } else if (e.key === '-' || e.key === '_') {
      zoomOut();
    } else if (e.key === '0') {
      resetZoom();
    }
  });
}

/* Phone Number Copy Helper */
function copyContactPhone(phone) {
  navigator.clipboard.writeText(phone).then(() => {
    showToast(`คัดลอก ${phone} แล้ว`);
  }).catch(() => {
    // Fallback for older browsers
    const tempInput = document.createElement('input');
    tempInput.value = phone;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(`คัดลอก ${phone} แล้ว`);
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-shown');

  setTimeout(() => {
    toast.classList.remove('is-shown');
  }, 2600);
}

// Global exposure for template onclick handlers
window.openArchiveModal = openArchiveModal;
window.hideLightbox = hideLightbox;
window.nextDocument = nextDocument;
window.prevDocument = prevDocument;
window.zoomIn = zoomIn;
window.zoomOut = zoomOut;
window.resetZoom = resetZoom;
window.onLightboxBackdropClick = onLightboxBackdropClick;
window.copyContactPhone = copyContactPhone;
