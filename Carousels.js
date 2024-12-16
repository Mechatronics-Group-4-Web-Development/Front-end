let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

const updateCarousel = () => {
    // Update image position
    const offset = currentIndex * -100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

const nextImage = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

const prevImage = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);

// Event listeners for dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

// Automatic carousel slide (optional)
setInterval(nextImage, 5000); // Change every 5 seconds
