
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.className = "fas fa-xmark";
    } else {
        icon.className = "fas fa-bars";
    }
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.querySelector("i").className = "fas fa-bars";
    });
});

// TYPING ANIMATION
const typing = document.getElementById("typing");

const words = [
    "Software Engineering Student",
    "Aspiring Developer",
    "Beginner Programmer",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    typing.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {

        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// BACK TO TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }

});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ACTIVE NAVIGATION
const sections = document.querySelectorAll("header[id], section[id]");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }

    });

    document.querySelectorAll("#navLinks a").forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

});

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("visitorName").value;
    const email = document.getElementById("visitorEmail").value;
    const message = document.getElementById("visitorMessage").value;

    const subject = encodeURIComponent("Portfolio Message from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:promenadia4@gmail.com?subject=" +
        subject + "&body=" + body;

});
