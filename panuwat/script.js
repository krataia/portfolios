// Certificate lightbox: reuse the thumbnail's crop box and source image at full width
const box = document.querySelector('.lightbox');
const img = box.querySelector('.lightbox__img');

document.querySelectorAll('.cert').forEach((cert) => {
  cert.addEventListener('click', () => {
    const cs = getComputedStyle(cert);
    img.setAttribute('style', cert.getAttribute('style'));
    img.style.backgroundImage = cs.backgroundImage;
    img.style.setProperty('--iw', cs.getPropertyValue('--iw'));
    img.style.setProperty('--ih', cs.getPropertyValue('--ih'));
    img.setAttribute('aria-label', cert.getAttribute('aria-label'));
    box.showModal();
  });
});

box.querySelector('.lightbox__close').addEventListener('click', () => box.close());
box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
