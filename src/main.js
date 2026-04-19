const elements = document.querySelectorAll('.fade-in');

// 👇 mostrar primero SIEMPRE
if (elements.length > 0) {
  elements[0].classList.add('visible');
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// 🔥 PARALLAX SUAVE
const images = document.querySelectorAll('.image-container img');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  images.forEach(img => {
    img.style.transform = `translateY(${scrollY * 0.05}px) scale(1.05)`;
  });
});