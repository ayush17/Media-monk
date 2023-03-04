// Elements
let textObj = {
  page0: {
    text1: "WE ARE BEAKEING OUR WOW OF SILENCE",
    text2:
      "In January 2011, after a decade of digital, we opened the doors to our temple.Follow our nobal eightfold path to digital enlightenment here",
  },
  page1: {
    text1: "TELENT IS GIVEN TRUE SKILL IS EARNED",
    text2: "Step 1 out of 8 on the path to digital enlightenment.",
  },
  page2: {
    text1: "BE FLEXILE TO CHANGE AND STURDY IN CONVICTION",
    text2: "Step 2 out of 8 on the path to digital enlightenment.",
  },
  page3: {
    text1: "USE MANY SKILL YET WORK AS ONE",
    text2: "Step 3 out of 8 on the path to digital enlightenment.",
  },
  page4: {
    text1: "TO MASTER ANYTHING FIND INTREST IN EVERYTHING",
    text2: "Step 4 out of 8 on the path to digital enlightenment.",
  },
  page5: {
    text1: "INDIVIDULES FLOURISH IS CULTURE AND WISDOM ARE SHARED",
    text2: "Step 5 out of 8 on the path to digital enlightenment.",
  },
  page6: {
    text1: "TRAIN FOR PERFECTION BUT AIM FOR MORE",
    text2: "Step 6 out of 8 on the path to digital enlightenment.",
  },
  page7: {
    text1: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
    text2: "Step 7 out of 8 on the path to digital enlightenment.",
  },
  page8: {
    text1: "TEMPORARY SACRIFISE BRING LASTING RESULTS",
    text2: "Step 8 out of 8 on the path to digital enlightenment.",
  },
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
<<<<<<< HEAD
const myTimeout = setTimeout(myGreeting, 10000);
=======
const myTimeout = setTimeout(myGreeting, 1000);
>>>>>>> Carousel
function myGreeting() {
  container.classList.add("display-none");
  carousel.classList.remove("display-none");
  console.log(page);
  document.querySelector(`.text-Page-${page}`).classList.remove("hide");
  document.querySelector(`.min-text-Page-${page}`).classList.remove("hide");
  document.querySelector(`.text-Page-${page}`).classList.add("show");
  document.querySelector(`.min-text-Page-${page}`).classList.add("show");
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
  let minText = document.getElementsByClassName("min-text");
  Array.from(headText).forEach((e) => {
    e.classList.add("hide");
  });
  Array.from(minText).forEach((e) => {
    e.classList.add("hide");
  });
};
const renderText = () => {
  document.querySelector(`.text-Page-${page}`).classList.remove("hide");
  document.querySelector(`.min-text-Page-${page}`).classList.remove("hide");
  document.querySelector(`.text-Page-${page}`).classList.add("show");
  document.querySelector(`.min-text-Page-${page}`).classList.add("show");
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

document.querySelector(".text-Page-0").textContent = textObj.page0.text1;
document.querySelector(".text-Page-1").textContent = textObj.page1.text1;
document.querySelector(".text-Page-2").textContent = textObj.page2.text1;
document.querySelector(".text-Page-3").textContent = textObj.page3.text1;
document.querySelector(".text-Page-4").textContent = textObj.page4.text1;
document.querySelector(".text-Page-5").textContent = textObj.page5.text1;
document.querySelector(".text-Page-6").textContent = textObj.page6.text1;
document.querySelector(".text-Page-7").textContent = textObj.page7.text1;
document.querySelector(".text-Page-8").textContent = textObj.page8.text1;

document.querySelector(".min-text-Page-0").textContent = textObj.page0.text2;
document.querySelector(".min-text-Page-1").textContent = textObj.page1.text2;
document.querySelector(".min-text-Page-2").textContent = textObj.page2.text2;
document.querySelector(".min-text-Page-3").textContent = textObj.page3.text2;
document.querySelector(".min-text-Page-4").textContent = textObj.page4.text2;
document.querySelector(".min-text-Page-5").textContent = textObj.page5.text2;
document.querySelector(".min-text-Page-6").textContent = textObj.page6.text2;
document.querySelector(".min-text-Page-7").textContent = textObj.page7.text2;
document.querySelector(".min-text-Page-8").textContent = textObj.page8.text2;
