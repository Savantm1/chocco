// slider
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let slideList = document.querySelector(".slide_list");
let step = 100;
let maxRight = 100;
let minRight = 0;
let currentRight = 0;

let structureBtn = document.querySelector(".structure_btn");
let structureList = document.querySelector(".structure_list");


arrowRight.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    slideList.style.right = currentRight + "%";   
  } else {
    currentRight = minRight;
    slideList.style.right = currentRight + "%";
    }
});

arrowLeft.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    slideList.style.right = currentRight + "%";   
  } else {
    currentRight = maxRight;
    slideList.style.right = currentRight + "%";
    }
});

structureBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  structureList.classList.toggle('visually-hidden');

});
