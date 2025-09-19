const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
        currentIndex = index;
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next Image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
});

// Close lightbox on clicking outside the image
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});
