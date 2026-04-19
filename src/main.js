const elements = document.querySelectorAll('.fade-in');
const image = document.querySelector('.image-section img');

// Fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));

// Scroll animation tipo Apple (zoom)
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (image) {
    let scale = 1.2 - scrollY * 0.0005;
    if (scale < 1) scale = 1;

    image.style.transform = `scale(${scale})`;
  }
});