// === 1. EFEK TEKS MENGETIK OTOMATIS (TYPING EFFECT) ===
const textElement = document.getElementById("typing-text");
const words = ["Mahasiswa REKAYASA SISTEM KOMPUTER", "Web Developer", "Tech Enthusiast", "Creative Explorer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!textElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Jeda saat teks selesai diketik
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // Jeda sebelum mulai mengetik kata baru
    }

    setTimeout(typeEffect, typeSpeed);
}

// === 2. EFEK MUNCUL SAAT DI-SCROLL (SCROLL REVEAL) ===
function setupScrollReveal() {
    const cards = document.querySelectorAll(".portfolio-card, .about-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => {
        card.classList.add("reveal-element");
        observer.observe(card);
    });
}

// Jalankan efek saat website selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    setupScrollReveal();
});
