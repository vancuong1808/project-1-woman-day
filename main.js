let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

let PcurrentSlide = 0;
const P_slide = document.querySelectorAll('.font_1');
const P_slideCount = P_slide.length;

let currentSlide_2 = 0;
const slides_2 = document.querySelectorAll('.slide_2');
const slideCount_2 = slides_2.length;

let PcurrentSlide_2 = 0;
const P_slide_2 = document.querySelectorAll('.font_2');
const P_slideCount_2 = P_slide_2.length;

let PcurrentSlide_0 = 0;
const P_slide_0 = document.querySelectorAll('.font_0');
const P_slideCount_0 = P_slide_0.length;

let black = document.querySelectorAll('.bk-black');
let contain = document.querySelectorAll('.slideshow-container');

let nhac = document.querySelector('#nhac')

let left_arrow_1 = document.querySelector('.left-arrow_1');
let right_arrow_1 = document.querySelector('.right-arrow_1');
let left_arrow_2 = document.querySelector('.left-arrow_2');
let right_arrow_2 = document.querySelector('.right-arrow_2');


function audioPause() {
  nhac.pause();
}
function audioPlay() {
  nhac.play();
}


function showSlide(n) {
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  showSlide(currentSlide);
}
showSlide(currentSlide);
right_arrow_1.addEventListener('click', nextSlide);
left_arrow_1.addEventListener('click', prevSlide);
// Start the slideshow


// Optional: Auto slide
setInterval(nextSlide, 15000); // Change slide every 3 seconds
// gọi hàm theo thời thgian
// setInterval( nextSlide, 1000 )

function showP_slide(n) {
  P_slide.forEach( function(p_slide){
    p_slide.classList.remove('active');
  })
  P_slide[n].classList.add('active');
}

function nextP_slide() {
  PcurrentSlide = (PcurrentSlide + 1) % P_slideCount;
  showP_slide(PcurrentSlide);
}

function prevP_slide() {
  PcurrentSlide = ( PcurrentSlide - 1 + P_slideCount ) % P_slideCount;
  showP_slide( PcurrentSlide );
}

showP_slide( PcurrentSlide );
right_arrow_1.addEventListener('click', nextP_slide);
left_arrow_1.addEventListener('click', prevP_slide);
setInterval(nextP_slide, 15000);

function showSlide_2( n ) {
  slides_2.forEach(function(slides_2){
    slides_2.classList.remove('active');
  });
  slides_2[n].classList.add('active');
}

function nextslide_2() {
  currentSlide_2 = (currentSlide_2 + 1) % slideCount_2;
  showSlide_2(currentSlide_2);
}

function prevslide_2() {
  currentSlide_2 = (currentSlide_2 - 1 + slideCount_2 ) % slideCount_2;
  showSlide_2(currentSlide_2);
}

showSlide_2(currentSlide_2);
right_arrow_2.addEventListener('click', nextslide_2);
left_arrow_2.addEventListener('click', prevslide_2);
setInterval( nextslide_2, 15000 );

function showP_slide_2(n) {
  P_slide_2.forEach( function(p_slide){
    p_slide.classList.remove('active');
  })
  P_slide_2[n].classList.add('active');
}

function nextP_slide_2() {
  PcurrentSlide_2 = (PcurrentSlide_2 + 1) % P_slideCount_2;
  showP_slide_2(PcurrentSlide_2);
}

function prevP_slide_2() {
  PcurrentSlide_2 = (   PcurrentSlide_2 - 1 + P_slideCount_2 ) % P_slideCount_2;
  showP_slide_2(PcurrentSlide_2 );
}

showP_slide_2( PcurrentSlide_2 );
right_arrow_2.addEventListener('click', nextP_slide_2);
left_arrow_2.addEventListener('click', prevP_slide_2);
setInterval(nextP_slide_2, 15000);

function showP_slide_0(n) {
  P_slide_0.forEach( function(p_slide){
    p_slide.classList.remove('active');
  })
  P_slide_0[n].classList.add('active');
}

function nextP_slide_0() {
  PcurrentSlide_0 = (PcurrentSlide_0 + 1) % P_slideCount_0;
  if ( PcurrentSlide_0 == 0 ) {
    black[0].classList.add('active');
    contain[0].classList.add('active');
    audioPlay();
    return;
  }
  // audioPause()
  showP_slide_0(PcurrentSlide_0);
}

showP_slide_0( PcurrentSlide_0 );

setInterval(nextP_slide_0, 5000);