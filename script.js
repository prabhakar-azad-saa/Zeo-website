


document.addEventListener('DOMContentLoaded', () => {
    // Find all elements marked for animation
    const animatedElements = document.querySelectorAll('.fade-in-up');

    // Add the 'animate' class to each element to trigger the CSS transition
    setTimeout(() => {
        animatedElements.forEach(el => {
            el.classList.add('animate');
        });
    }, 100); 
});


document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Section Animation (Runs on Load) ---
    const heroElements = document.querySelectorAll('.hero-section .fade-in-up');
    setTimeout(() => {
        heroElements.forEach(el => {
            el.classList.add('animate');
        });
    }, 100); 

    // --- About Section Animation (Runs on Scroll) ---

    // Select all elements in the about section that should animate
    const observerElements = document.querySelectorAll('.about-section .fade-in-up');

    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // 10% of element visible before callback runs
        rootMargin: "0px 0px -50px 0px" // Start 50px before it hits the bottom
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element enters the viewport, add the 'animate' class
                entry.target.classList.add('animate');
                // Stop observing this element once it has animated
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each element
    observerElements.forEach(el => {
        observer.observe(el);
    });
});