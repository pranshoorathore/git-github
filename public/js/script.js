function nextSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll("img");
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains("active"));
    
    images[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + 1) % images.length; // Go to the next image
    images[activeIndex].classList.add("active");
}

function prevSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll("img");
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains("active"));
    
    images[activeIndex].classList.remove("active");
    activeIndex = (activeIndex - 1 + images.length) % images.length; // Go to the previous image
    images[activeIndex].classList.add("active");
}
