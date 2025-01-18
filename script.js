const proCard = document.querySelector('.pro-card');
const basicCard = document.querySelector('.basic-card');
const subscriptionButtons = document.querySelectorAll('.subscription-btn');

proCard.addEventListener('click', () => {
    // Reset all cards
    proCard.querySelector('i').classList.remove('fa-circle-check');
    proCard.querySelector('i').classList.add('fa-circle');
    basicCard.querySelector('i').classList.remove('fa-circle-check');
    basicCard.querySelector('i').classList.add('fa-circle');
    
    // Set clicked card
    const clickedIcon = proCard.querySelector('i');
    clickedIcon.classList.remove('fa-circle');
    clickedIcon.classList.add('fa-circle-check');
    
   // alert('پرو کارت انتخاب شد!');
});

basicCard.addEventListener('click', () => {
    // Reset all cards
    proCard.querySelector('i').classList.remove('fa-circle-check');
    proCard.querySelector('i').classList.add('fa-circle');
    basicCard.querySelector('i').classList.remove('fa-circle-check');
    basicCard.querySelector('i').classList.add('fa-circle');
    
    // Set clicked card
    const clickedIcon = basicCard.querySelector('i');
    clickedIcon.classList.remove('fa-circle');
    clickedIcon.classList.add('fa-circle-check');
    
    //alert('بیسیک کارت انتخاب شد!');
});

// Simplified subscription buttons without icon changes
subscriptionButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        subscriptionButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
