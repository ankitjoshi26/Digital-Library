const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a'); 

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});