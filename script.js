const galleryLinks = document.querySelectorAll('.gallery a');
const bookingForm = document.getElementById('bokningsformular');

if (bookingForm) {
  bookingForm.addEventListener('submit', function(event) {
    // Förhindra standardinlämningen så att vi hinner skicka eventet
    // innan sidan eventuellt laddas om
    event.preventDefault(); 
    
    // Samla in data från formulärfälten
    const numPeople = bookingForm.querySelector('#antal_pers').value;
    const wantsFood = bookingForm.querySelector('#mat_checkbox').checked;
    const wantsConference = bookingForm.querySelector('#konferens_checkbox').checked;
    const startDate = bookingForm.querySelector('#startdatum').value;
    const endDate = bookingForm.querySelector('#slutdatum').value;
    
    // Skicka eventet till GA4
    gtag('event', 'group_booking_request', {
      'number_of_people': parseInt(numPeople, 10), // Konvertera till heltal
      'services_offered': { // Använd ett objekt för att gruppera tjänster
        'food': wantsFood,
        'conference_room': wantsConference
      },
      'booking_date_range': `${startDate}_${endDate}` // Skapa en sträng för datumintervallet
    });
    
    // Här kan du lägga till en liten fördröjning innan formuläret skickas
    // för att vara säker på att eventet hinner skickas till Google
    setTimeout(function() {
        bookingForm.submit();
    }, 500); // Väntar 0.5 sekunder
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


