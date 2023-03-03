console.log("Hiii");

// Elements
let container = document.querySelector(".container");
let carousel = document.querySelector(".carousel");

let smoke = document.querySelector(".smoke");
let cloud = document.querySelector(".cloud");
let monk = document.querySelector(".monk");
let backgroundImg = document.querySelector(".bg-img");
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

nextBtn.addEventListener("click", (event) => {
  //   backgroundImg.style.setProperty("--m", "100%");
  //   backgroundImg.style.setProperty("--w", "0px");
  //   backgroundImg.style.animationName = "scroll";
  //   backgroundImg.style.animation = `scroll 2s ease-in`;

  backgroundImg.scrollLeft -= 500;
});
// element.addEventListener(
//   "animationend",
//   () => {
//     // Set your final state here. For example:
//     // backgroundImg.style.setProperty("--w", "-786px");
//     console.log("helo");
//   },
//   { once: true }
//
console.log(backgroundImg.getBoundingClientRect());
