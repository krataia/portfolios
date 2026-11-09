// Certificate lightbox: reuse the clicked crop's inline style at full width
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('.crop');

document.querySelectorAll('.cert').forEach((btn) => {
  btn.addEventListener('click', () => {
    const crop = btn.querySelector('.crop');
    boxImg.setAttribute('style', crop.getAttribute('style'));
    boxImg.setAttribute('aria-label', crop.getAttribute('aria-label'));
    box.showModal();
  });
});
box.querySelector('.lightbox-close').addEventListener('click', () => box.close());
box.addEventListener('click', (e) => { if (e.target === box) box.close(); });

// Highlight the nav link of the section in view
const links = [...document.querySelectorAll('.nav a[href^="#"]:not(.nav-mark)')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['natticha', 'warisara', 'contact'].forEach((id) => observer.observe(document.getElementById(id)));
