class Carousel {
  constructor(prev, next) {}
  prevSlide() {}
  nextSlide() {}
}

const prevButtons = Array.from(document.querySelectorAll("[data-prevBtn]"));

const nextButtons = document.querySelectorAll("[data-nextBtn]");
console.log(prevButtons);
console.log(nextButtons);
prevButtons.forEach((btn) => {
  btn.addEventListener("click", showPrevSlide);
});

nextButtons.forEach((btn) => {
  btn.addEventListener("click", showNextSlide);
});

let slides = document.querySelectorAll(".slide");
function showNextSlide() {
  slides.forEach((slide, i) => {
    const isShow = slide.getAttribute("data-show");
    if (isShow === "false") {
      slide.setAttribute("data-show", "true");
      slide.style.transform = " translateX(0%)";
    } else {
      slide.setAttribute("data-show", "false");
      slide.style.transform = " translateX(25%)";
    }
  });
}

function showPrevSlide() {
  slides.forEach((slide, i) => {
    const isShow = slide.getAttribute("data-show");
    if (isShow === "false") {
      slide.setAttribute("data-show", "true");
      slide.style.transform = " translateX(0%)";
    } else {
      slide.setAttribute("data-show", "false");
      slide.style.transform = " translateX(-25%)";
    }
  });
}

const imageContainer = Array.from(document.querySelectorAll("[data-image]"));

console.log(imageContainer);

function CreateButton(id, srText, imgSrc) {
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");
  const srOnly = document.createElement("span");
  const icon = document.createElement("img");
  buttonContainer.classList.add("slider-controls");
  button.classList.add("slide-control");
  button.setAttribute("type", "button");
  button.setAttribute("id", id);
  srOnly.classList.add("sr-only");
  srOnly.textContent = srText;
  icon.src = imgSrc;
  icon.setAttribute("alt", srText);
  button.appendChild(srOnly);
  button.appendChild(icon);
  buttonContainer.appendChild(button);
  return buttonContainer;
}
console.log(CreateButton("prev", "jump to preview slide", "../assets/images"));
const sliderContainer = document.querySelector(".slider-container");
