var slideIndex = 2;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("column");
//   var images = document.querySelectorAll(".hover-shadow");
//   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-2].style.display = "flex";
//   images[slideIndex-2].className = "left" ;
  slides[slideIndex-1].style.display = "flex";
//   slides[slideIndex].style.display = "flex"; 
//   dots[slideIndex-1].className += " active";
}