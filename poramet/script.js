// Image viewer: clicking a card image opens its figure in a dialog
const viewer = document.querySelector('.viewer');
const stage = viewer.querySelector('.viewer__stage');

document.querySelectorAll('.card__media').forEach((btn) => {
  btn.addEventListener('click', () => {
    stage.replaceChildren(btn.querySelector('figure').cloneNode(true));
    viewer.showModal();
  });
});

viewer.querySelector('.viewer__close').addEventListener('click', () => viewer.close());
// click on the backdrop (the dialog itself, outside the image) closes it
viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.close(); });

document.getElementById('year').textContent = new Date().getFullYear();
