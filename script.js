// Premium Luxury Yoga Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    initMobileNav();
    
    // Gallery Functionality
    initGallery();
    
    // Contact Form Validation
    initContactForm();
    
    // Smooth Scroll for Anchor Links
    initSmoothScroll();
    
    // Scroll Animations
    initScrollAnimations();
});

// ===== Mobile Navigation =====
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// ===== Gallery Functionality =====
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!galleryGrid) return;
    
    // Gallery images data
    const galleryImages = [
        {
            src: 'g1.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g2.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g3.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g4.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g5.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g6.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g7.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g8.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g9.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g10.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g11.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g12.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g13.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g14.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g15.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g16.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g17.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g18.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g19.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g20.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g21.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g22.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g23.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g24.jpeg',
            caption: 'Click For Immersive Experience'
        },
        
        {
            src: 'g25.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g26.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g27.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g28.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g29.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g30.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g31.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g32.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g33.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g34.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g35.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g36.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g37.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g38.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g39.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g40.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g41.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g42.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g43.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g44.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g45.jpeg',
            caption: 'Click For Immersive Experience'
        },
                {
            src: 'g46.jpeg',
            caption: 'Click For Immersive Experience'
        },
                
        {
            src: 'g47.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g48.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g49.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g50.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g51.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g52.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g53.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g54.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g55.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g56.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g57.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g58.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g59.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g60.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g61.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g62.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g63.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g64.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g65.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g66.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g67.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g68.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g69.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g70.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g71.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g72.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g73.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g74.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g75.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g76.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g77.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g78.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g79.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g80.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g82.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g83.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g84.jpeg',
            caption: 'Click For Immersive Experience'
        },
        {
            src: 'g85.jpeg',
            caption: 'Click For Immersive Experience'
        },

    ];
    
    // Populate gallery
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-caption">${image.caption}</p>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightboxImage() {
        const image = galleryImages[currentImageIndex];
        lightboxImage.src = image.src;
        lightboxImage.alt = image.caption;
        lightboxCaption.textContent = image.caption;
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }
    
    // Event listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });
}

// ===== Contact Form Validation =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const serviceInput = document.getElementById('service');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const serviceError = document.getElementById('serviceError');
    const messageError = document.getElementById('messageError');
    
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Reset errors
        nameError.classList.remove('active');
        emailError.classList.remove('active');
        serviceError.classList.remove('active');
        messageError.classList.remove('active');
        
        let isValid = true;
        
        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            nameError.classList.add('active');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.classList.add('active');
            isValid = false;
        }
        
        // Validate service selection
        if (serviceInput.value === '') {
            serviceError.textContent = 'Please select a service';
            serviceError.classList.add('active');
            isValid = false;
        }
        
        // Validate message
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Please enter a message (at least 10 characters)';
            messageError.classList.add('active');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            formSuccess.style.display = 'block';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
    
    // Real-time validation
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            nameError.classList.add('active');
        } else {
            nameError.classList.remove('active');
        }
    });
    
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.classList.add('active');
        } else {
            emailError.classList.remove('active');
        }
    });
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in animation
    const animatedElements = document.querySelectorAll(
        '.service-card, .testimonial-card, .credential-card, .philosophy-card, .gallery-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(74, 20, 140, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(74, 20, 140, 0.1)';
    }
});