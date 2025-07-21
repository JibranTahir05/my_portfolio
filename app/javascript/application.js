// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
document.addEventListener("DOMContentLoaded", () => {
  // Toggle Contact Info
  const contactBtn = document.getElementById("contact-toggle-btn");
  const contactInfo = document.getElementById("contact-info");

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
      } else {
        contactInfo.style.display = "none";
      }
    });
  }

  // Fade-in on scroll (already added before)
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
