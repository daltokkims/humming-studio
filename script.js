// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('active');
  });
});

// Scroll fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

// About text slides from left, stats scale up
document.querySelectorAll('.about-text').forEach(el => {
  el.classList.add('slide-left');
  observer.observe(el);
});

document.querySelectorAll('.stat-card').forEach((el, i) => {
  el.classList.add('scale-up', `stagger-${i + 1}`);
  observer.observe(el);
});

// Timeline items alternate left/right
document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.classList.add(i % 2 === 0 ? 'slide-left' : 'slide-right');
  observer.observe(el);
});

// Lesson cards stagger fade in
document.querySelectorAll('.lesson-card').forEach((el, i) => {
  el.classList.add('fade-in', `stagger-${i + 1}`);
  observer.observe(el);
});

// Contact cards slide from right
document.querySelectorAll('.contact-card').forEach((el, i) => {
  el.classList.add('slide-right', `stagger-${i + 1}`);
  observer.observe(el);
});

// Section titles scale up
document.querySelectorAll('.section-title').forEach(el => {
  el.classList.add('scale-up');
  observer.observe(el);
});

// Partner card
document.querySelectorAll('.partner-card').forEach(el => {
  el.classList.add('scale-up');
  observer.observe(el);
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'var(--border)';
  } else {
    nav.style.borderBottomColor = 'transparent';
  }
});
