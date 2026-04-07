document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Modal Gallery Logic
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal-close");
    const prevBtn = document.querySelector(".modal-prev");
    const nextBtn = document.querySelector(".modal-next");
    
    let currentImages = [];
    let currentIndex = 0;

    document.querySelectorAll('.clickable-project').forEach(card => {
        card.addEventListener('click', (e) => {
            // Ignore if clicking on links or buttons inside the card
            if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;

            const imagesData = card.getAttribute('data-images');
            if (imagesData) {
                currentImages = JSON.parse(imagesData);
                currentIndex = 0;
                
                modal.style.display = "flex";
                modalImg.src = currentImages[currentIndex];
                
                // Hide arrows if only one image
                const displayArrows = currentImages.length > 1 ? "block" : "none";
                prevBtn.style.display = displayArrows;
                nextBtn.style.display = displayArrows;
            }
        });
    });

    function showImage(index) {
        if (index >= currentImages.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = currentImages.length - 1;
        } else {
            currentIndex = index;
        }
        modalImg.src = currentImages[currentIndex];
    }

    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // Copy Email Functionality
    const copyBtn = document.getElementById('copyEmail');
    if (copyBtn) {
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const email = "devan.smit2007@gmail.com";
            const tooltip = copyBtn.querySelector('.tooltip');
            
            navigator.clipboard.writeText(email).then(() => {
                if (tooltip) {
                    tooltip.textContent = "Copied!";
                    setTimeout(() => {
                        tooltip.textContent = "Copy";
                    }, 2000);
                }
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
});
