const images = [
    "../image/image1.jpg",
    "../image/image2.jpg",
    "../image/image3.jpg",
    "../image/image4.jpg",
    "../image/image5.jpg",
    "../image/image6.jpg"
];

let currentIndex = 0;

function changeBackgroundImage() {
    const carousel = document.querySelector(".background-carousel");
    carousel.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 1000);

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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
