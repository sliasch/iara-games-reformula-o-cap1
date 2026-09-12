const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");
const totalSlides = slides.length;

let currentSlide = 1;
let isMoving = false;

const backgrounds = [
  "/imgs/carrossel/chroma.jpg",
  "/imgs/carrossel/dandara2.png",
  "/imgs/carrossel/momodora.jpg",
  "/imgs/carrossel/mullet.jpg"
];

function updateBackground() {
  let realSlide = currentSlide - 1;

  if (realSlide < 0) {
    realSlide = totalSlides - 1;
  }

  if (realSlide >= totalSlides) {
    realSlide = 0;
  }

  carousel.style.backgroundImage = `url("${backgrounds[realSlide]}")`;
}

function updateIndicators() {
  let realSlide = currentSlide - 1;

  if (realSlide < 0) {
    realSlide = totalSlides - 1;
  }

  if (realSlide >= totalSlides) {
    realSlide = 0;
  }

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === realSlide);
  });
}

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

track.style.transform = `translateX(-${currentSlide * 100}%)`;

updateBackground();
updateIndicators();

function moveCarousel() {
  if (isMoving) return;

  isMoving = true;

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  updateBackground();
  updateIndicators();
}

nextButton.addEventListener("click", () => {
  if (isMoving) return;

  currentSlide++;
  moveCarousel();
});

prevButton.addEventListener("click", () => {
  if (isMoving) return;

  currentSlide--;
  moveCarousel();
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    if (isMoving) return;

    const targetSlide = Number(indicator.dataset.slide);

    currentSlide = targetSlide;
    moveCarousel();
  });
});

track.addEventListener("transitionend", () => {
  isMoving = false;

  if (currentSlide === totalSlides + 1) {
    track.style.transition = "none";
    currentSlide = 1;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateBackground();
    updateIndicators();
  }

  if (currentSlide === 0) {
    track.style.transition = "none";
    currentSlide = totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateBackground();
    updateIndicators();
  }
});