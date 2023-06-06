
// ======================== NAV-BAR =============================

const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});

// ======================== SLIDE-SHOW ==========================

var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {               // forward/Back controls
    SlideShow(slidePosition += n);
}

function currentSlide(n) {            //  images controls
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
} 