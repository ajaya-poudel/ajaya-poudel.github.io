function hamburg() {
    const navbar = document.querySelector(".dropdown");

    // Toggle between showing and hiding the menu
    if (navbar.style.transform === "translateY(0px)") {
        navbar.style.transform = "translateY(-100%)"; // Hide the menu
    } else {
        navbar.style.transform = "translateY(0px)"; // Show the menu
    }
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "an MS Horticulture Student.",
    "a Plant Breeding, Genetics, and Genomics Researcher."
];

let speed = 50;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 500);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
