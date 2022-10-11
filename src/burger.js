const menuBurgerActive = document.querySelector(".burgermenu");

const naveActive = document.querySelector(".navitems");

const naveItem = document.querySelector(".navitem");

menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});
naveItem.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});
