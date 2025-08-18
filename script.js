// Lightbox-funktionalitet
const galleryButtons = document.querySelectorAll('.gallery button');

galleryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const img = document.createElement('img');
    img.src = btn.dataset.full;
    overlay.appendChild(img);

    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    caption.textContent = btn.dataset.caption;
    overlay.appendChild(caption);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });
});

// Automatisk årtal i footer
document.getElementById('year').textContent = new Date().getFullYear();