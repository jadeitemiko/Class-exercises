// Visa aktuellt år i sidfoten
document.getElementById('year').textContent = new Date().getFullYear();

// Enkel lightbox för galleriet
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