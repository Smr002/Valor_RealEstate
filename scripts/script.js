const images = [
    "image/image1.jpg",
    "image/image2.jpg",
    "image/image3.jpg",
    "image/image4.jpg",
    "image/image5.jpg",
    "image/image6.jpg"
];

let currentIndex = 0;

function changeBackgroundImage() {
    const carousel = document.querySelector(".background-carousel");
    carousel.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 1000);

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#propertyCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, 
        ride: 'carousel'
    });
    var imageModal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');

    imageModal.addEventListener('show.bs.modal', function(event) {
        var button = event.relatedTarget;
        var imageSrc = button.getAttribute('src');
        modalImage.src = imageSrc;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        breakpoints: {
            1024: {
                perView: 3
            },
            768: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const logo = document.querySelector('.footer-section.logo img');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = "../index.html";

        });
    }

    const logo1 = document.querySelector('.logo img');
    if (logo1) {
        logo1.addEventListener('click', () => {
            window.location.href = "../index.html";

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
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});