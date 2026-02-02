/* ============================================
   NET BAY - JavaScript Interactions
   WOW.js and Animate.css Integration
   ============================================ */

// Initialize WOW.js for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing...');
    new WOW().init();
    initializeInteractions();
    setupFormHandling();
});

/* ============================================
   INITIALIZATION FUNCTIONS
   ============================================ */

function initializeInteractions() {
    console.log('Initializing interactions...');
    
    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    console.log('Menu Button:', menuButton);
    console.log('Mobile Menu:', mobileMenu);
    
    if (menuButton && mobileMenu) {
        console.log('Setting up menu button click handler...');
        
        menuButton.addEventListener('click', function(e) {
            console.log('Menu button clicked!');
            e.stopPropagation();
            console.log('Current menu classes:', mobileMenu.className);
            mobileMenu.classList.toggle('active');
            console.log('After toggle, menu classes:', mobileMenu.className);
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        console.log('Menu links found:', menuLinks.length);
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Menu link clicked, closing menu');
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav')) {
                if (mobileMenu.classList.contains('active')) {
                    console.log('Click outside nav, closing menu');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    } else {
        console.log('Menu button or mobile menu not found!');
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effects to navbar
    setupNavbarScroll();

    // Lazy load images
    setupLazyLoad();

    // Add hover effects to service cards
    setupCardHovers();
}

/* ============================================
   MOBILE MENU FUNCTIONALITY
   ============================================ */

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

function setupNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            navbar.style.borderBottomColor = 'rgba(184, 134, 11, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottomColor = 'rgba(30, 58, 95, 0.5)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

/* ============================================
   LAZY LOAD IMAGES
   ============================================ */

function setupLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('animate__animated', 'animate__fadeIn');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

/* ============================================
   CARD HOVER EFFECTS
   ============================================ */

function setupCardHovers() {
    const cards = document.querySelectorAll('[class*="card"], [class*="service"]');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/* ============================================
   FORM HANDLING
   ============================================ */

function setupFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });

        // Add real-time validation
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('input-error')) {
                    validateField(this);
                }
            });
        });
    });
}

function validateField(field) {
    let isValid = true;

    if (field.required && field.value.trim() === '') {
        isValid = false;
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(field.value);
    } else if (field.type === 'tel' && field.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        isValid = phoneRegex.test(field.value);
    }

    if (isValid) {
        field.classList.remove('input-error');
        field.classList.add('input-valid');
    } else {
        field.classList.add('input-error');
        field.classList.remove('input-valid');
    }

    return isValid;
}

function handleFormSubmit(form) {
    // Validate all fields
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isFormValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        showNotification('Please fill all required fields correctly', 'error');
        return;
    }

    // Collect form data
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
        showNotification('Thank you! We\'ll contact you soon.', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1500);
}

/* ============================================
   NOTIFICATIONS
   ============================================ */

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    notification.className = `${bgColor} text-white px-6 py-3 rounded-lg fixed top-6 right-6 shadow-lg animate__animated animate__slideInRight z-50`;
    notification.textContent = message;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.remove('animate__slideInRight');
        notification.classList.add('animate__slideOutRight');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

/* ============================================
   SCROLL TO TOP BUTTON
   ============================================ */

window.addEventListener('scroll', function() {
    if (!document.querySelector('.scroll-to-top')) {
        createScrollToTopButton();
    }

    const scrollBtn = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top fixed bottom-8 right-8 bg-gradient-to-r from-deep-amber to-deep-indigo text-white w-12 h-12 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 z-40';
    button.style.display = 'none';

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(button);
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   ANALYTICS & TRACKING
   ============================================ */

function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Track page views
window.addEventListener('load', () => {
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
});

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href) {
        trackEvent('link_click', {
            link_url: e.target.href,
            link_text: e.target.textContent
        });
    }
});

/* ============================================
   EXPORT FUNCTIONS FOR GLOBAL USE
   ============================================ */

window.netbay = {
    showNotification,
    trackEvent,
    validateField,
    debounce,
    throttle
};
