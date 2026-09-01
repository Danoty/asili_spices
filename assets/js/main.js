const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 18);
});

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => {
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const c = window.ASILI_CONFIG || {};
if (c.phoneDisplay && c.phoneInternational) {
  const phone = document.getElementById('phoneLink');
  const text = document.getElementById('phoneText');
  if (phone) phone.href = `tel:+${String(c.phoneInternational).replace(/\D/g,'')}`;
  if (text) text.textContent = c.phoneDisplay;
}

// Smooth focus behavior for keyboard users after in-page navigation.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) setTimeout(() => target.setAttribute('tabindex', '-1'), 250);
  });
});
