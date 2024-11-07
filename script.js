// Initialize the slide index to start with the first slide
let slideIndex = 1;
showSlide(slideIndex);

// Function to display the current slide based on index
function showSlide(n) {
    // Get all slides and dots
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Wrap around the slide index if out of bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides and deactivate all dots
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Function to change the slide by a given number
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Function to set the current slide based on dot click
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Automatically switch to the next slide every 5 seconds
setInterval(() => {
    plusSlides(1); // Move to the next slide
}, 5000);

