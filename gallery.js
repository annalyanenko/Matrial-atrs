const slides = document.querySelector('.slides');
const fullScreenOverlay = document.querySelector('.full-screen-overlay');
const fullScreenSlides = document.querySelector('.full-screen-slides');
const closeBtn = document.querySelector('.close-btn');
const slideWidth = document.querySelector('.slide').offsetWidth;

let slideIndex = 0;

function openFullScreen(index) {
  slideIndex = index;
  fullScreenOverlay.style.display = 'flex';
  fullScreenSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function closeFullScreen() {
  fullScreenOverlay.style.display = 'none';
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  fullScreenSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex === slides.children.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  fullScreenSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
}