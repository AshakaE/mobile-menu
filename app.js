const menu = document.querySelector('.container');
const links = document.querySelector('#desktop-nav');

menu.addEventListener("click", function() {
  menu.classList.toggle("change");

  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
