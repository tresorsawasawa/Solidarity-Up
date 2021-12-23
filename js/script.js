const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('.closeIcon');
const menu = document.querySelector('#header');

hamburger.addEventListener('click', () => {
  menu.classList.add('change-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('change-menu');
});

window.addEventListener('mouseup', (e) => {
  if (e.target !== hamburger && e.target !== closeMenu) {
    menu.classList.remove('change-menu');
  }
});