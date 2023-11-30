let paraContainerOne = document.querySelector(".para-container");
let paracontainerTwo = document.querySelector(".para-container-two");
let paraContainerThree = document.querySelector(".para-container-three");

function expandBtnOne() {
  paraContainerOne.style.display = "flex";
}

function closeBtnOne() {
  paraContainerOne.style.display = "none";
}
function expandBtnTwo() {
  paracontainerTwo.style.display = "flex";
}

function closeBtnTwo() {
  paracontainerTwo.style.display = "none";
}
function expandBtnThree() {
  paraContainerThree.style.display = "flex";
}

function closeBtnThree() {
  paraContainerThree.style.display = "none";
}

let paraContainer = document.querySelectorAll(".list-box");
let clicked = false;

function showPara() {
  clicked = !clicked;

  paraContainer.forEach((paraContainer) => {
    if (!clicked) {
      paraContainer.style.display = "flex";
    } else {
      paraContainer.style.display = "none";
    }
  });
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function showAnswer(questionNumber) {
  let answerContainer = document.querySelectorAll(".answer-box");
  let changeImg = document.getElementById("minusSig" + questionNumber);
  let plusImg = document.getElementById ('plusSign' + questionNumber);

  answerContainer.forEach((answerContainer) => {
    answerContainer.style.display = "none";
  });

  const answerBox = document.getElementById("answerBox" + questionNumber);
  

  clicked = !clicked;

  if (clicked) {
    answerBox.style.display = "flex";
    changeImg.style.display = "block";
    plusImg.style.display = "none";
  } else {
    answerBox.style.display  = "none";
    changeImg.style.display = "none";
    plusImg.style.display = "block";
  }

  setTimeout(function () {
    answerBox.style.height = "auto";
  }, 10);
}


const topBtn = document.querySelector('#topLink');
const topSection = document.querySelector ('#head-er');
topBtn.addEventListener('click', ()=>{
  topSection.scrollIntoView({
    behavior: 'smooth'
  });
});

