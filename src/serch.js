const inputText = document.querySelector(".input-serch");
const submitSerch = document.querySelector(".serchBtn");
const serchArea = document.querySelectorAll(".card_list");

console.log(serchArea);

serchFunction = (text) => {
  serchArea.forEach((element) => {
    if (element.textcontent == text) {
      element.classList.add("active");
    }
  });
};
submitSerch.addEventListener("click", (e) => {
  e.preventDefault();
  serchFunction(inputText.value);
  console.log(inputText.value);
});
