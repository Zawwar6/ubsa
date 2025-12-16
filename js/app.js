const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// ================= CLOSE MENU ON LINK CLICK (MOBILE) =================
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 600) {
            nav.style.display = "none";
        }
    });
});

// ================= SMOOTH SCROLL (OPTIONAL FUTURE USE) =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================= HEADER SHADOW ON SCROLL =================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});
