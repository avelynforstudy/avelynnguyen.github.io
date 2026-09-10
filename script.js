document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Scroll-spy: underline the nav link for the section currently in view
const navLinks = document.querySelectorAll('.nav-links a[data-section]');
const sections = Array.from(navLinks)
  .map(link => document.getElementById(link.dataset.section))
  .filter(Boolean);

if (sections.length && 'IntersectionObserver' in window) {
  const setActive = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}
