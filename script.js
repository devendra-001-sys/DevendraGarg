const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
                entry.target.classList.add("show");
        }
    });
});
revealElements.forEach((element) => {
    revealObserver.observe(element);
});
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
console.log("javascript is working");