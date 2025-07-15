// Program category filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const programItems = document.querySelectorAll('.program-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        // Filter programs
        programItems.forEach(item => {
            item.style.display = 'none';
            
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
});

// Testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
        testimonial.classList.remove('active');
    });
    
    testimonials[index].style.display = 'block';
    testimonials[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize
showTestimonial(0);
setInterval(nextTestimonial, 5000);

// Program item animation
const animateProgramItems = () => {
    const items = document.querySelectorAll('.program-item.show');
    
    items.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 0.5;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for program items
programItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateProgramItems);
window.addEventListener('load', animateProgramItems);