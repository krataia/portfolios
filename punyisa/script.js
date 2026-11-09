// Hero entrance: content is hidden only when JS runs, so the page still shows without it
const root = document.documentElement;
root.classList.add('js');
requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('ready')));

// Nav pill: white text over dark hero/closing, graphite text over paper sections
const nav = document.querySelector('.nav');
const darkInView = new Set();
const darkObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => (e.isIntersecting ? darkInView.add(e.target) : darkInView.delete(e.target)));
  nav.classList.toggle('on-light', darkInView.size === 0);
}, { rootMargin: '-20px 0px -90% 0px' }); // a thin band at the pill's height
document.querySelectorAll('.hero, .closing').forEach((el) => darkObserver.observe(el));

// Highlight the person currently being read
const links = document.querySelectorAll('.nav-link');
const personObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.setAttribute('aria-current', String(a.hash === '#' + e.target.id)));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('.person').forEach((el) => personObserver.observe(el));
