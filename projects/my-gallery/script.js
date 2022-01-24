var slideIndex = 1;
let cd = false;
let cd2 = false;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  cd = true
  a()
}

function a() {
   setTimeout(()=>{
  if (cd2) return;
  cd = false
  cd2 = true
  setTimeout(()=>{
    cd2 = false
  }, 4000)
}, 4000)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

setInterval(() => {
    console.log(cd)
    if (cd) return;
    slideIndex++
    showSlides(slideIndex)
    cd = true

    a()
    // const a = setTimeout(()=>{
    //   cd = false
    // }, 4000)
  }, 1000)

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

};

/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/

function persen(num, id) {
  let i = 0;
  setInterval( ()=>{
    if (i < num) {
      i++
      document.getElementById(`${id}`).innerHTML = `${i}%`
    }
  }, 20)
}

persen(70, "ngetes")