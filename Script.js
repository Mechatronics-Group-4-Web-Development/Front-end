  // Load Navbar
fetch('navbar.html')
.then(response => response.text())
.then(html => {
  document.getElementById('navbar').innerHTML = html;

  // Add event listener for toggling active class
 // Toggle the active class on hamburger menu click
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarRight = document.getElementById('navbar-right');

hamburgerMenu.addEventListener('click', () => {
    navbarRight.classList.toggle('active'); // Toggle the navbar right sliding menu
    hamburgerMenu.classList.toggle('active'); // Optionally add some effect to the hamburger icon
});
;

})
.catch(error => console.log('Error loading navbar:', error));
// Load Footer
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;

    // Add event listeners for FAQ arrows
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', function () {
    const faqItem = this.closest('.faq-item'); // Get the parent FAQ item
    const answer = faqItem.querySelector('.faq-answer'); // Get the answer div
    const extraInfo = faqItem.querySelector('.extra-info'); // Get the extra info div
    const arrow = this.querySelector('i'); // Get the arrow icon

    // Toggle active class for the FAQ item
    faqItem.classList.toggle('active');
    
    // Toggle the visibility of the answer and extra info
    if (answer) {
      answer.classList.toggle('visible');
    }
    if (extraInfo) {
      extraInfo.classList.toggle('visible');
    }

    // Rotate the arrow
    arrow.classList.toggle('rotate');
  });
});

  })
  .catch(error => console.log('Error loading footer:', error));


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
