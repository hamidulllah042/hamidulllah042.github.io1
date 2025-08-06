// Toggle mobile menu (if you want to add a mobile menu)
const toggleMenu = () => {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
};

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple alert after contact form submission (optional)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function () {
    alert("Thanks! Your message has been sent.");
  });
}
