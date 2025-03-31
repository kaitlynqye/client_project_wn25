// Javascript File to Dynamically Change Year in Footer

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Challenge Element: allow sections to fade into view as users show the content
document.addEventListener("DOMContentLoaded", function () {
    const fadeSections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.2 }); // When 20% of the object is visible

    fadeSections.forEach(section => observer.observe(section));
});
// used https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe to research how to utilize the observer object 
// as well with using ChatGPT to edit and transition the fade sections for a smoother transition
