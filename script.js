console.log("Hiii");

// Elements
let container = document.querySelector(".container");
let carousel = document.querySelector(".carousel");

let smoke = document.querySelector(".smoke");
let cloud = document.querySelector(".cloud");
let monk = document.querySelector(".monk");

let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");

carousel.classList.add("display-none");
const myTimeout = setTimeout(myGreeting, 500);
function myGreeting() {
  container.classList.add("display-none");
  carousel.classList.remove("display-none");
}

let trans = 0;

// Handle Carousel Next/Privious Event Listener
// previousBtn.addEventListener("click", () => {
//   console.log("previous");
//   backgroundImg.style.animation = `scroll 1s linear`;
// });
let backgroundImg = document.querySelector(".bg-img");
const root = document.documentElement;
const update = (evt, x) => {
  backgroundImg.classList.remove("active");
  backgroundImg.style.left = x + "%";
};
nextBtn.addEventListener("click", () => {
  const startX = Number(backgroundImg.dataset.x);
  const endX = startX - 100;
  root.style.setProperty("--left-0", startX + "%");
  root.style.setProperty("--left-100", endX + "%");
  backgroundImg.removeEventListener("animationend", update);
  backgroundImg.addEventListener("animationend", (evt) => update(evt, endX));
  backgroundImg.dataset.x = endX;
  backgroundImg.classList.add("active");
});
