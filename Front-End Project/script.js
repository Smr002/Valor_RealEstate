document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const logo = document.querySelector('.footer-section.logo img');
    if (logo) {
        logo.addEventListener('click', () => {
            alert('You clicked the logo!');
        });
    }

    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault(); 
            alert(`You clicked on the ${icon.querySelector('i').classList[1].replace('fa-', '')} icon!`);
        });
    });
});