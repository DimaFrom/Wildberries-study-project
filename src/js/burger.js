const menuBurgerActive = document.querySelector(".burgermenu");
console.log(menuBurgerActive);

const naveActive = document.querySelector(".navitems");

menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});
