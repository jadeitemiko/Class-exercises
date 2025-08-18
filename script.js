// Visa aktuellt år i sidfoten
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox för galleriet
const dlg = document.getElementById('lightbox');
const big = document.getElementById('lightboxImg');
const cap = document.getElementById('lightboxCaption');

document.getElementById('gallery').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if(!btn) return;
  const full = btn.getAttribute('data-full');
  const caption = btn.getAttribute('data-caption') || 'Bild';
  big.src = full;
  big.alt = caption;
  cap.textContent = caption;
  if(typeof dlg.showModal === 'function') dlg.showModal();
  else dlg.setAttribute('open','');
});

// Stäng dialogen med ESC
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && dlg.open) dlg.close();
});

// Fallback Lightbox-overlay (för äldre browsers eller extra effekt)
const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');
document.body.appendChild(lightboxOverlay);

const overlayImg = document.createElement('img');
const overlayCaption = document.createElement('div');
overlayCaption.classList.add('caption');
lightboxOverlay.appendChild(overlayImg);
lightboxOverlay.appendChild(overlayCaption);

document.querySelectorAll('.gallery button').forEach(button => {
  button.addEventListener('click', () => {
    const imgSrc = button.getAttribute('data-full');
    const captionText = button.getAttribute('data-caption');
    overlayImg.src = imgSrc;
    overlayCaption.textContent = captionText;
    lightboxOverlay.classList.add('active');
  });
});

lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.classList.remove('active');
});
