import { Button } from "../src/components/common/button";

const modal = document.getElementById("my_modal");
const shoppingCart = document.getElementById("btn_modal_window");
const closeModal = document.getElementsByClassName("close_modal_window")[0];
const goodsToBuy = document.querySelector(".itemsrow");
const buttonDeleteAll = document.querySelector(".deletAll");
const menuModal = document.querySelector(".basket");

shoppingCart.onclick = function () {
  modal.classList.add("active");
};

menuModal.onclick = function () {
  modal.classList.add("active");
  const menuBurgerActive = document.querySelector(".burgermenu");
  const naveActive = document.querySelector(".navitems");
  menuBurgerActive.classList.remove("active");
  naveActive.classList.remove("active");
};

closeModal.onclick = function () {
  modal.classList.remove("active");
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
};
/*-----get shopping-----*/
document.onclick = (event) => {
  if (event.target.classList.contains("btn_get_basket")) {
    let buying = document.createElement("div");
    buying.classList.add("card_buying");

    let buyingItem = document.createElement("div");
    buyingItem.classList.add("card_basket");

    let buyingImage = document.createElement("div");
    buyingImage.classList.add("card_image");

    let buyingBtn = document.createElement("button");
    buyingBtn.classList.add("card_btn");
    buyingBtn.innerText = "-";

    let price = event.target.parentElement.childNodes[1].cloneNode(true);
    let priceDiscount =
      event.target.parentElement.childNodes[2].cloneNode(true);
    let name = event.target.parentElement.childNodes[3].cloneNode(true);
    let logo = event.target.parentElement.firstChild.cloneNode(true);

    buyingItem.append(price);
    buyingItem.append(priceDiscount);
    buyingItem.append(name);
    buying.append(buyingItem);

    buyingImage.append(logo);
    buying.append(buyingImage);

    buyingBtn.onclick = (event) => {
      if (event.target.classList.contains("card_btn")) {
        let btn = event.target.parentElement.remove();
        buyingBtn.append(btn);
      }
    };

    buying.append(buyingBtn);

    goodsToBuy.append(buying);
  }
  local();
};

buttonDeleteAll.addEventListener("click", function () {
  while (goodsToBuy.firstChild) {
    goodsToBuy.removeChild(goodsToBuy.lastChild);
  }
  local();
});

/*-----shopping-cart-----*/

let shoppingCartInfo;

function local() {
  shoppingCartInfo = goodsToBuy.innerHTML;
  localStorage.setItem("shoppingCartInfo", shoppingCartInfo);
}

if (localStorage.getItem("shoppingCartInfo")) {
  goodsToBuy.innerHTML = localStorage.getItem("shoppingCartInfo");
}
