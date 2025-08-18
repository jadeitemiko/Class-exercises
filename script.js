// Visa aktuellt år i sidfoten
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Ren overlay-lightbox (ingen <dialog> behövs) ----
const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');

const overlayImg = document.createElement('img');
const overlayCaption = document.createElement('div');
overlayCaption.classList.add('caption');

lightboxOverlay.appendChild(overlayImg);
lightboxOverlay.appendChild(overlayCaption);
document.body.appendChild(lightboxOverlay);

// Öppna vid klick på valfri knapp i galleriet
document.querySelectorAll('.gallery button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const full = btn.getAttribute('data-full');
    const caption = btn.getAttribute('data-caption') || 'Bild';
    overlayImg.src = full;
    overlayImg.alt = caption;
    overlayCaption.textContent = caption;
    lightboxOverlay.classList.add('active');
  });
});

// Stäng lightbox vid klick på overlay eller ESC
lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
    lightboxOverlay.classList.remove('active');
  }
});
