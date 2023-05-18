document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
  
    navToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('show');
    });
  });
  