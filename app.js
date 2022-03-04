const smMenu = document.querySelector(".sm-menu-btn");
const smMenuLine = document.querySelector(".sm-menu-btn-burger");
const smNav = document.querySelector(".sm-nav");

smMenu.addEventListener("click", () => {
  smNav.classList.toggle("activate-sm-nav-links");
  smMenuLine.classList.toggle("sm-menu-btn-burger-open");
});
