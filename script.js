const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down-links");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("open");
});

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    dropDown.classList.toggle("open");
  }),
);
