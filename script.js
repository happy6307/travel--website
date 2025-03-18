// Slider Script
/*let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });

    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
}

// Auto-change slide every 5 seconds
setInterval(changeSlide, 5000);

// Show the first slide on load
slides[0].classList.add("active");*/
// Array of image paths
const slide = document.querySelectorAll(".slide");
const imagePaths = [
    "va.jpg",
    "people.jpg",
    "travel.jpg"
];

// Select the slider container
const sliderContainer = document.querySelector(".slider");

// Add slides dynamically using JavaScript
imagePaths.forEach((path, index) => {
    const slide = document.createElement("div"); // Create a slide div
    slide.classList.add("slide"); // Add 'slide' class
    if (index === 0) {
        slide.classList.add("active"); // Make the first slide active
    }
    slide.style.backgroundImage = `url(${path})`; // Add background image dynamically
    sliderContainer.appendChild(slide); // Add slide to slider container
});

// Auto-slide logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Function to change slide automatically
function changeSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
}

// Show the first slide initially
slides[0].classList.add("active");

// Auto-change slide every 5 seconds
setInterval(changeSlide, 5000);

// Navigation Buttons Logic
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Move to Previous Slide
prevBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
});

// Move to Next Slide
nextBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
});

