// Sticky Navbar

function navbar() {
  let header = document.querySelector("header");
  header.classList.add("default-nav");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 120) {
      header.classList.remove("default-nav");
      header.classList.add("stickey-nav");
    } else {
      header.classList.add("default-nav");
      header.classList.remove("stickey-nav");
    }
  });
}
navbar();



// expand-card

function expandBtn(container) {
  let expandBox = document.querySelector(".c-padding");
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.querySelector(".card-expand").addEventListener("click", () => {
      card.querySelector(".para-container").classList.add("active");
    });
    card.querySelector(".close-container").addEventListener("click", () => {
      card.querySelector(".para-container").classList.remove("active");
    });
  });
}
expandBtn(".specialty");


//bullet-point

let paraContainer = document.querySelectorAll(".list-box");
let clicked = false;

function showPara() {
  // clicked = !clicked;

  paraContainer.forEach((paraContainer) => {
    if (!clicked) {
      paraContainer.classList.toggle("active");
    }
  });
}


// testimonial

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});


//faq section

function accordion(container) {
  let accContainer = document.querySelector(container);
  let questionBox = accContainer.querySelectorAll(".questions-box");

  questionBox.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      let minusImg = item.querySelector(".minus-hidden");
      let plusImg = item.querySelector(".plusSign");

      if (item.classList.contains("active")) {
        minusImg.style.display = "block";
        plusImg.style.display = "none";
      } else {
        minusImg.style.display = "none";
        plusImg.style.display = "block";
      }

      questionBox.forEach((otherItem) => {
        if (otherItem != item) {
          otherItem.classList.remove("active");
          let otherMinusImg = otherItem.querySelector(".minus-hidden");
          let otherPlusImg = otherItem.querySelector(".plusSign");
          otherMinusImg.style.display = "none";
          otherPlusImg.style.display = "block";
        }
      });
    });
  });
}

accordion(".custom-faq-container");

const topBtn = document.querySelector("#topLink");
const topSection = document.querySelector("#head-er");
topBtn.addEventListener("click", () => {
  topSection.scrollIntoView({
    behavior: "smooth",
  });
});


