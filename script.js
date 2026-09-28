//portfolio javascript

//select elements
const revealElements = document.querySelectorAll(".reveal");

//scroll reveal observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
                entry.target.classList.add("show");
        }
    });
});

//start observing
revealElements.forEach((element) => {
    revealObserver.observe(element);
});
//===================================
//navigation
//===================================
const navigationLinks = document.querySelectorAll("#Navigation a");
const sections = document.querySelectorAll("#hero, #about, #skills, #projects, #contact");
const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navigationLinks.forEach((link) => {
                link.classList.remove("active");
            });
            const activeLink = document.querySelector(
                `#Navigation a[href="#${entry.target.id}"]`
            );
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});
sections.forEach((section) => {
    navigationObserver.observe(section);
});
//===================================
// Mobile Navigation
//===================================
const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#Navigation");
menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("menu-open");
});
navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("menu-open");
    });
});