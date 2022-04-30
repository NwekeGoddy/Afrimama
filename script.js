var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var modalbutton = document.querySelector(".modal__actions");
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");

const buyNowPayLaterButton = document.querySelector(".label-buynow");

buyNowPayLaterButton.addEventListener("click", function () {
  modal.classList.add("open");
  backdrop.classList.add("open");
  modal.classList.remove("close");
  backdrop.classList.remove("close");

  setTimeout(() => {
    backdrop.style.opacity = "1";
    modal.style.opacity = "1";
    modal.style.transform = "translateY(-3rem)";
  }, 400);
});

modalbutton.addEventListener("click", function onClick() {
  modal.classList.add("close");
  backdrop.classList.add("close");
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.opacity = "0";
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-10rem)";
  }, 400);

  console.log("clicked");
});
