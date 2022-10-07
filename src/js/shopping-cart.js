//

const modal = document.getElementById("my_modal");

const shoppingCart = document.getElementById("btn_modal_window");

const closeModal = document.getElementsByClassName("close_modal_window")[0];
console.log(closeModal);

const goodsToBuy = document.querySelector(".itemsrow");

const buttonDeleteAll = document.querySelector(".deletAll");

shoppingCart.onclick = function () {
  modal.classList.add("active");
  console.log("ff");
};

closeModal.onclick = function () {
  modal.classList.remove("active");
  modal.append(document.createElement("button"));
  console.log(modal);
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
};

document.onclick = (event) => {
  if (event.target.classList.contains("additem")) {
    const buyingItem = document.createElement("div");
    const buyingItemOriginal = document.querySelector(".itembody");
    console.log(buyingItemOriginal);
    const qwe = buyingItemOriginal.innerText;

    buyingItem.append(qwe);

    goodsToBuy.append(buyingItem);
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
