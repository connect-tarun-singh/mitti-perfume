// Scroll Animation for Smooth Appearance
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".container");

    const fadeInOnScroll = () => {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (rect < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
