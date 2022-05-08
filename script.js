"use strict";

/////////////////////////////////////////
//Global Variables

const images = document.querySelectorAll(".slide-show__img");
const allBtn = document.querySelector(".all-btn");
const mobileBtn = document.querySelector(".mobile-btn");
const laptopBtn = document.querySelector(".laptop-btn");
const tvBtn = document.querySelector(".tv-btn");
const cameraBtn = document.querySelector(".camera-btn");
const mobileSection = document.querySelector(".mobile-sec");
const laptopSection = document.querySelector(".laptop-sec");
const tvSection = document.querySelector(".tv-sec");
const cameraSection = document.querySelector(".camera-sec");
const allSection = document.querySelector(".all-section");
const submitBtn = document.querySelector(".btn-submit");
let itemsNum = 0;
let i = 0;

/////////////////////////////////////////
// to add to shopping cart
const updateCart = document.querySelectorAll(".item-add").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".cart-num").innerHTML = itemsNum + 1;
    itemsNum++;
  });
});

////////////////////////////////////////
// to activate slide show
const slideShow = setInterval(function () {
  if (i == 0) {
    images[i].style.display = "block";
  } else if (i == images.length) {
    images[i - 1].style.display = "none";
    images[0].style.display = "block";
    i = 0;
  } else {
    images[i - 1].style.display = "none";
    images[i].style.display = "block";
  }

  i++;
}, 2000);

////////////////////////////////////////
// to activate category
const activateCat = function (category) {
  allSection.style.display = "none";
  mobileSection.style.display = "none";
  laptopSection.style.display = "none";
  tvSection.style.display = "none";
  cameraSection.style.display = "none";

  category.style.display = "block";
};

///////////////////////////////////////
// activate Category section

mobileBtn.addEventListener("click", function () {
  activateCat(mobileSection);
});
laptopBtn.addEventListener("click", function () {
  activateCat(laptopSection);
});
cameraBtn.addEventListener("click", function () {
  activateCat(cameraSection);
});
tvBtn.addEventListener("click", function () {
  activateCat(tvSection);
});
allBtn.addEventListener("click", function () {
  activateCat(allSection);
});
