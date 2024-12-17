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
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarRight = document.getElementById('navbar-right');

// Toggle the navbar when the hamburger menu is clicked
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class for both the hamburger menu and the navbar
  hamburgerMenu.classList.toggle('active');
  navbarRight.classList.toggle('active');
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close any open items first
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove('active');
        });

        // Toggle the current item
        item.classList.toggle('active');
    });
});
