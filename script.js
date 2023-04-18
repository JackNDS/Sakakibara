document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.menu-items');
  const body = document.querySelector('body');
  const menuItems = document.querySelectorAll('.menu-items .menu-item');

  function toggleMobileMenu() {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });
});