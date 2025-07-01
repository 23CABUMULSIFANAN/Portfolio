
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent = "Thank you for your message!";
  this.reset();
});
