const galleryLinks = document.querySelectorAll('.gallery a');
const bookingForm = document.getElementById('bokningsformular');

if (bookingForm) {
  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Samla in data från formulärfälten
    const numPeople = bookingForm.querySelector('#antal_pers').value;
    const email = bookingForm.querySelector('#epost').value; // Ny rad
    const phone = bookingForm.querySelector('#telefon').value; // Ny rad
    const wantsFood = bookingForm.querySelector('#mat_checkbox').checked;
    const wantsConference = bookingForm.querySelector('#konferens_checkbox').checked;
    const startDate = bookingForm.querySelector('#startdatum').value;
    const endDate = bookingForm.querySelector('#slutdatum').value;
    
    // Skicka eventet till GA4
    gtag('event', 'group_booking_request', {
      'number_of_people': parseInt(numPeople, 10),
      'services_offered': {
        'food': wantsFood,
        'conference_room': wantsConference
      },
      'contact_info': { // Ny parameter för kontaktinformation
          'email': email,
          'phone': phone
      },
      'booking_date_range': `${startDate}_${endDate}`
    });
    
    setTimeout(function() {
        bookingForm.submit();
    }, 500); 
  });
}
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




