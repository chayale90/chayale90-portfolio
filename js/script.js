// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.top-animation', { origin: 'top' });
ScrollReveal().reveal('.bottom-animation', { origin: 'bottom' });



// animate of scroll Plugin

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    const screenshotImages = document.querySelectorAll('.box');
    screenshotImages.forEach((image) => {
        if (isElementInViewport(image) && !image.classList.contains('animate')) {
            image.classList.add('animate');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);



// Add the "is-visible" class to the image once it's in the viewport
const screenshotImages = document.querySelectorAll('.screenshot img');

const revealImage = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
};

const screenshotObserver = new IntersectionObserver(revealImage, {
    root: null,
    threshold: 0.2, // Adjust the threshold as per your needs
});

screenshotImages.forEach((image) => {
    screenshotObserver.observe(image);
});