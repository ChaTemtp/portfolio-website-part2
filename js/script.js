// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Show current date in hero section
document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("current-date");
  if (dateElement) {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElement.textContent = now.toLocaleDateString("en-US", options);
  }
});

const profilePic = document.getElementById("profile-pic");

const originalSrc = "images/profile-hover.png";
const hoverSrc = "images/profile roblox.png";

profilePic.addEventListener("mouseover", () => {
  profilePic.src = hoverSrc;
});

profilePic.addEventListener("mouseout", () => {
  profilePic.src = originalSrc;
});