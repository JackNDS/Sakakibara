document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
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

  const jpnflag = document.querySelector('.jpn-flag');
  const engflag = document.querySelector('.eng-flag');
  const jpnflag2 = document.querySelector('.jpn-flag2');
  const engflag2 = document.querySelector('.eng-flag2');

  const jpnlanguage = document.querySelectorAll('.jpn');
  const englanguage = document.querySelectorAll('.eng');

  function jpnToggle(event) {
    event.preventDefault();
    console.log('Japanese flag clicked');
    jpnlanguage.forEach((element) => {
      element.classList.remove('active');
      element.classList.add('active');
    });
    englanguage.forEach((element) => element.classList.remove('active'));
  }

  function engToggle(event) {
    event.preventDefault();
    console.log('English flag clicked');
    englanguage.forEach((element) => {
      element.classList.remove('active');
      element.classList.add('active');
    });
    jpnlanguage.forEach((element) => element.classList.remove('active'));
  }

  jpnflag.addEventListener('click', jpnToggle);
  engflag.addEventListener('click', engToggle);
  jpnflag2.addEventListener('click', jpnToggle);
  engflag2.addEventListener('click', engToggle);

  // get all elements with the class
  var elements = document.getElementsByClassName('eng');

  // add a class to each element
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('active');
  }

 
  

  