const menuBurgerActive = document.querySelector(".burgermenu");

const naveActive = document.querySelector(".navitems");

menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});
