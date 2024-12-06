// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });

// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebars a');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.nav').offsetHeight, // Adjust for fixed navbar
          behavior: 'smooth'
        });

        // Set active class
        links.forEach(link => link.parentElement.classList.remove('active'));
        this.parentElement.classList.add('active');
      }
    });
  });
});


document.addEventListener('mousemove', function (e) {
  const follower = document.querySelector('.follower');
  follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});