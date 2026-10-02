//select elements
const revealElements = document.querySelectorAll(".reveal");

//scroll reveal observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

//start observing
revealElements.forEach((element) => {
    revealObserver.observe(element);
});

//===================================
//navigation scrollspy
//===================================
const navigationLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("#hero, #about, #skills, #projects, #contact");

const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navigationLinks.forEach((link) => {
                link.classList.remove("active");
            });
            const activeLink = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, { threshold: 0.4 });

sections.forEach((section) => {
    if (section) navigationObserver.observe(section);
});

//===================================
// Mobile Navigation Toggle
//===================================
const navigation = document.querySelector("#Navigation");
const menuToggle = document.querySelector("#menu-toggle");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("menu-open");
    });
}

// Close mobile menu layout cleanly when links are clicked
navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navigation) {
            navigation.classList.remove("menu-open");
        }
    });
});
