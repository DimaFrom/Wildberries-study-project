/*-----items preview----*/
const body = document.querySelector("body");

const previewItemBack = document.querySelector(".preview-back");

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
};
