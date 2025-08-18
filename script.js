// ---- Visa aktuellt år i sidfoten ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Ren overlay-lightbox ----
const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');

const overlayImg = document.createElement('img');
const overlayCaption = document.createElement('div');
overlayCaption.classList.add('caption');

lightboxOverlay.appendChild(overlayImg);
lightboxOverlay.appendChild(overlayCaption);
document.body.appendChild(lightboxOverlay);

// ---- Öppna lightbox vid klick på galleri-bild ----
document.querySelectorAll('.gallery img').forEach((img) => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlayImg.alt = img.alt || 'Bild';
    overlayCaption.textContent = img.getAttribute('data-caption') || img.alt || 'Bild';
    lightboxOverlay.classList.add('active');
  });
});

// ---- Stäng lightbox vid klick på overlay eller ESC ----
lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
    lightboxOverlay.classList.remove('active');
  }
});
