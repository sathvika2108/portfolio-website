const navLinks = document.querySelectorAll('.navbar a');
const navbarHeight = document.querySelector('.navbar').offsetHeight;

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const targetPosition = targetSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
