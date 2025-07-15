// Gallery filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item-large');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        // Filter gallery items
        galleryItems.forEach(item => {
            item.style.display = 'none';
            
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            }
        });
    });
});

// Lightbox functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

// Get all gallery items that can open lightbox
const galleryTriggers = document.querySelectorAll('.gallery-item-large');
let currentImageIndex = 0;
const images = [];
const captions = [];

// Prepare images and captions array
galleryTriggers.forEach((trigger, index) => {
    const imgSrc = trigger.querySelector('img').src;
    const caption = trigger.querySelector('h3').textContent + ' - ' + trigger.querySelector('p').textContent;
    
    images.push(imgSrc);
    captions.push(caption);
    
    trigger.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = images[index];
    lightboxCaption.textContent = captions[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
    lightboxCaption.textContent = captions[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex];
    lightboxCaption.textContent = captions[currentImageIndex];
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Gallery item animation
const animateGalleryItems = () => {
    galleryItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for gallery items
galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateGalleryItems);
window.addEventListener('load', animateGalleryItems);