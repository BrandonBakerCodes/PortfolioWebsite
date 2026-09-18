const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down-links");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("open");
});

const nameButton = document.querySelector(".nav1");
nameButton.addEventListener("click", () => {
  if (dropDown.classList.contains("open")) {
    dropDown.classList.toggle("open");
  }
});

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    dropDown.classList.toggle("open");
  }),
);

const slider = document.querySelectorAll(".project-card");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentCard = 2;

prevBtn.addEventListener("click", () => {
  if (currentCard > 0) {
    currentCard--;
    scrollToCurrentCard(currentCard);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentCard < slider.length - 1) {
    currentCard++;
    scrollToCurrentCard(currentCard);
  }
});

function scrollToCurrentCard(currentCard) {
  slider[currentCard].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });

  let totalCards = slider.length;

  slider[currentCard].style.transform = `scale(1) rotateY(0deg)`;
  slider[currentCard].style.zIndex = totalCards;
  slider[currentCard].style.filter = "none";
  slider[currentCard].style.opacity = 1;

  let counter = 1;
  for (let i = currentCard + 1; i < slider.length; i++) {
    slider[i].style.transform =
      ` scale(${1 - 0.2 * counter}) rotateY(-40deg) perspective(20px)`;
    slider[i].style.zIndex = totalCards - counter;
    slider[i].style.filter = `brightness(70%)`;
    counter++;
  }

  counter = 1;
  for (let i = currentCard - 1; i >= 0; i--) {
    slider[i].style.transform =
      ` scale(${1 - 0.2 * counter}) rotateY(40deg) perspective(20px)`;
    slider[i].style.zIndex = totalCards - counter;
    slider[i].style.filter = `brightness(70%)`;
    counter++;
  }
}

let timeout;
window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    scrollToCurrentCard(currentCard);
  }, 150);
});

// Default to middle card
scrollToCurrentCard(Math.floor(slider.length / 2));
// console.log(slider[currentCard].style.transform.);
