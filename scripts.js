const galleryLinks = document.querySelectorAll('.gallery a');
const bookingForm = document.getElementById('bokningsformular');

if (bookingForm) {
  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Samla in data från formulärfälten
    const numPeople = bookingForm.querySelector('#antal_pers').value;
    const email = bookingForm.querySelector('#epost').value;
    const phone = bookingForm.querySelector('#telefon').value;
    const wantsFood = bookingForm.querySelector('#mat_checkbox').checked;
    const wantsConference = bookingForm.querySelector('#konferens_checkbox').checked;
    const wantsActivities = bookingForm.querySelector('#aktiviteter_checkbox').checked;
    const startDate = bookingForm.querySelector('#startdatum').value;
    const endDate = bookingForm.querySelector('#slutdatum').value;
    
    // Skicka eventet till GA4 med separerade parametrar, via dataLayer
    dataLayer.push({
      'event': 'group_booking_request',
      'number_of_people': parseInt(numPeople, 10),
      'wants_food': wantsFood,
      'wants_conference_room': wantsConference,
      'wants_activities': wantsActivities,
      'contact_info_email': email,
      'contact_info_phone': phone,
      'booking_date_range': `${startDate}_${endDate}`
    });
  });
}
galleryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
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

document.getElementById('year').textContent = new Date().getFullYear();
