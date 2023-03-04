// Elements
let textObj = {
  page0: "WE ARE BEAKEING OUR WOW OF SILENCE",
  page1: "TELENT IS GIVEN TRUE SKILL IS EARNED",
  page2: "BE FLEXILE TO CHANGE AND STURDY IN CONVICTION",
  page3: "USE MANY SKILL YET WORK AS ONE",
  page4: "TO MASTER ANYTHING FIND INTREST IN EVERYTHING",
  page5: "INDIVIDULES FLOURISH IS CULTURE AND WISDOM ARE SHARED",
  page6: "TRAIN FOR PERFECTION BUT AIM FOR MORE",
  page7: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
  page8: "TEMPORARY SACRIFISE BRING LASTING RESULTS",
};
let page = 0;
let container = document.querySelector(".container");
let carousel = document.querySelector(".carousel");

let smoke = document.querySelector(".smoke");
let cloud = document.querySelector(".cloud");
let monk = document.querySelector(".monk");

let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");

carousel.classList.add("display-none");
const myTimeout = setTimeout(myGreeting, 1000);
function myGreeting() {
  container.classList.add("display-none");
  carousel.classList.remove("display-none");
  document.querySelector(`.text-Page-${page}`).classList.remove("hide");
  document.querySelector(`.text-Page-${page}`).classList.add("show");
}
let backgroundImg = document.querySelector(".bg-img");
const root = document.documentElement;
const update = (evt, x) => {
  backgroundImg.classList.remove("active");
  backgroundImg.style.left = x + "%";
};

// Functions Section
const hideText = function () {
  let headText = document.getElementsByClassName("head-text");
  Array.from(headText).forEach((e) => {
    e.classList.add("hide");
  });
};
const renderText = () => {
  if (page) {
    document.querySelector(`.text-Page-${page}`).classList.remove("hide");
    document.querySelector(`.text-Page-${page}`).classList.add("show");
  }
};
const previousLogic = function () {
  // write logic of previous button
  const startX = Number(backgroundImg.dataset.x);
  const endX = page === 8 ? startX : startX + 68;
  if (endX <= 0) {
    hideText();
    root.style.setProperty("--left-0", startX + "%");
    root.style.setProperty("--left-100", endX + "%");
    backgroundImg.removeEventListener("animationend", update);
    backgroundImg.addEventListener("animationend", (evt) => {
      renderText();
      update(evt, endX);
    });
    backgroundImg.dataset.x = endX;
    backgroundImg.classList.add("active");
    document.querySelector(`.page-${page}`).classList.remove("active-page");
    page--;
    document.querySelector(`.page-${page}`).classList.add("active-page");
  }
};

const nextLogic = function () {
  // write logic of next button
  const startX = Number(backgroundImg.dataset.x);
  const endX = page === 7 ? startX : startX - 68;
  hideText();
  if (endX >= -560) {
    root.style.setProperty("--left-0", startX + "%");
    root.style.setProperty("--left-100", endX + "%");
    backgroundImg.removeEventListener("animationend", update);
    backgroundImg.addEventListener("animationend", (evt) => {
      renderText();
      update(evt, endX);
    });
    backgroundImg.dataset.x = endX;
    backgroundImg.classList.add("active");
    console.log(endX);
    document.querySelector(`.page-${page}`).classList.remove("active-page");
    page++;
    document.querySelector(`.page-${page}`).classList.add("active-page");
  }
};

// Handle Previous/next Click Event
nextBtn.addEventListener("click", () => {
  nextLogic();
});
previousBtn.addEventListener("click", () => {
  previousLogic();
});
// Handle Previous/next Click Event
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") previousLogic();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextLogic();
});

// PageNavigation Click Event on Start and End page
document.querySelector(".page-0").addEventListener("click", () => {
  const startX = Number(backgroundImg.dataset.x);
  const endX = startX - startX;
  hideText();
  root.style.setProperty("--left-0", startX + "%");
  root.style.setProperty("--left-100", endX + "%");
  backgroundImg.removeEventListener("animationend", update);
  backgroundImg.addEventListener("animationend", (evt) => {
    renderText();
    update(evt, endX);
  });
  backgroundImg.dataset.x = endX;
  backgroundImg.classList.add("active");
  document.querySelector(`.page-${page}`).classList.remove("active-page");
  page = 0;
  document.querySelector(`.page-${page}`).classList.add("active-page");
});

document.querySelector(".page-9").addEventListener("click", () => {
  const startX = Number(backgroundImg.dataset.x);
  const endX = -560;
  hideText();
  root.style.setProperty("--left-0", startX + "%");
  root.style.setProperty("--left-100", endX + "%");
  backgroundImg.removeEventListener("animationend", update);
  backgroundImg.addEventListener("animationend", (evt) => {
    renderText();
    update(evt, endX);
  });
  backgroundImg.dataset.x = endX;
  backgroundImg.classList.add("active");
  document.querySelector(`.page-${page}`).classList.remove("active-page");
  page = 9;
  document.querySelector(`.page-${page}`).classList.add("active-page");
});

document.querySelector(".text-Page-0").textContent = textObj.page0;
document.querySelector(".text-Page-1").textContent = textObj.page1;
document.querySelector(".text-Page-2").textContent = textObj.page2;
document.querySelector(".text-Page-3").textContent = textObj.page3;
document.querySelector(".text-Page-4").textContent = textObj.page4;
document.querySelector(".text-Page-5").textContent = textObj.page5;
document.querySelector(".text-Page-6").textContent = textObj.page6;
document.querySelector(".text-Page-7").textContent = textObj.page7;
document.querySelector(".text-Page-8").textContent = textObj.page8;
