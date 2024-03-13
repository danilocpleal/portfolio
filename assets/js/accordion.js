const accordionButton = document.querySelectorAll('.accordion .button-accordion')

accordionButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        const accordion = button.parentElement;
        
        const isOpen = accordion.classList.contains('open');

        if (isOpen) {
            accordion.classList.remove('open');
        } else {
            accordion.classList.add('open');
        }
        
    })
});