const galleryLinks = document.querySelectorAll('.gallery a');
gtag("event", "generate_lead", {
  group_size: 12,
  group_type: "corporate",
  activities: ["Food", "Entertainment"]
});
galleryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // hindrar att länken öppnas normalt

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const img = document.createElement('img');
    img.src = link.dataset.full;
    overlay.appendChild(img);

    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    caption.textContent = link.dataset.caption;
    overlay.appendChild(caption);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });
});

// Automatisk årtal i footer
document.getElementById('year').textContent = new Date().getFullYear();

