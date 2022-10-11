/*-----items preview----*/
const body = document.querySelector("body");
console.log(body);

const previewItemBack = document.querySelector(".preview-back");
console.log(previewItemBack);

body.onclick = (e) => {
  if (!e.target.classList.contains("btn_quick_view")) {
    return;
  }

  let previewItem = e.target.closest(".card_list");
  previewItem.classList.toggle("active");
  previewItemBack.classList.toggle("active");

  previewItemBack.onclick = () => {
    previewItem.classList.remove("active");
    previewItemBack.classList.remove("active");
  };
  console.log(previewItem);
};
