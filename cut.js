/* ===================================================
   PORTFOLIO AHLAL KHAIRIN — script.js
   =================================================== */

/* ===== NAVBAR: scroll effect ===== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== NAVBAR: hamburger mobile menu ===== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

/* Close mobile menu on link click */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ===== SMOOTH SCROLL for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== SCROLL REVEAL using IntersectionObserver ===== */
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => observer.observe(el));

/* ===== ACTIVE NAV LINK highlight on scroll ===== */
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchorLinks = document.querySelectorAll('.nav-links a:not(.btn-nav)');

window.addEventListener('scroll', () => {
  let current = '';
  const navH = 100;

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - navH) {
      current = section.getAttribute('id');
    }
  });

  navAnchorLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--primary)';
    }
  });
});
