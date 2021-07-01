const menu = document.querySelector('.container');
const links = document.querySelector('#desktop-nav');

menu.addEventListener('click', () => {
  menu.classList.toggle('change');

  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
  }
});
