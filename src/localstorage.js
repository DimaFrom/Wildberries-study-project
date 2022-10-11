// localStorage.setItem("name", "value");

let shoppingCartInfo;

function local() {
  shoppingCartInfo = goodsToBuy.innerHTML;
  localStorage.setItem("shoppingCartInfo", shoppingCartInfo);
}

if (localStorage.getItem("shoppingCartInfo")) {
  goodsToBuy.innerHTML = localStorage.getItem("shoppingCartInfo");
}
