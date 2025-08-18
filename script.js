// Visa aktuellt år i sidfoten
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox-element
const dlg = document.getElementById('lightbox');
const big = document.getElementById('lightboxImg');
const cap = document.getElementById('lightboxCaption');

// Klick på någon knapp i galleriet
document.querySelectorAll('.gallery button').forEach(button => {
  button.addEventListener('click', () => {
    const full = button.getAttribute('data-full');
    const caption = button.getAttribute('data-caption') || 'Bild';
    big.src = full;
    big.alt = caption;
    cap.textContent = caption;
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
  });
});

// Stäng med ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && dlg.open) dlg.close();
});
