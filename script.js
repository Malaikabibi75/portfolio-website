const typed = new Typed(".typing", {

    strings: [
        "Frontend Web Developer",
        "Web Designer",
        "HTML Expert",
        "CSS Developer",
        "JavaScript Learner"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.hero-content', { origin: 'left' });
ScrollReveal().reveal('.hero-image', { origin: 'right' });
ScrollReveal().reveal('.about-image', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.skills', { origin: 'bottom' });
ScrollReveal().reveal('.projects', { origin: 'bottom' });
ScrollReveal().reveal('.contact', { origin: 'bottom' });
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }

});