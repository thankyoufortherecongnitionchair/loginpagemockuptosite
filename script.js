const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


hamburger.addEventListener("mouseenter", () => {
    navLinks.classList.toggle("active");
});

hamburger.addEventListener("mouseleave", () => {
    navLinks.classList.toggle("active");
});
