var currentSlide = 0;
var slides = document.getElementsByClassName("slide");

function changeSlide(n) {
  currentSlide += n;
  
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slides[currentSlide].classList.add("active");
}