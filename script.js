/**
 * ACCOUNTING BROKER - HOMEPAGE JAVASCRIPT
 * Interactive functionality and enhancements
 */

// ============================================
// MOBILE NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    }
});

// ============================================
// SMOOTH SCROLL WITH OFFSET FOR FIXED HEADER
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Skip if it's just "#"
        if (targetId === '#') {
            e.preventDefault();
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();

            const headerOffset = 80; // Height of fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// STATS COUNTER ANIMATION (On Scroll)
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.textContent.replace(/[^0-9.]/g, '');
            const count = +counter.getAttribute('data-count') || 0;
            const increment = parseFloat(target) / speed;

            if (count < parseFloat(target)) {
                const newCount = Math.ceil(count + increment);
                counter.setAttribute('data-count', newCount);

                // Format number with suffix if it exists
                const suffix = counter.textContent.replace(/[0-9.]/g, '');
                counter.textContent = newCount + suffix;

                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target + counter.textContent.replace(/[0-9.]/g, '');
            }
        };

        // Start animation when element is in viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counter.hasAttribute('data-animated')) {
                    counter.setAttribute('data-animated', 'true');
                    counter.setAttribute('data-count', '0');
                    updateCount();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Initialize counter animation
if ('IntersectionObserver' in window) {
    animateCounters();
}

// ============================================
// SCROLL-BASED ANIMATIONS
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .timeline-step, .cta-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations if supported
if ('IntersectionObserver' in window) {
    initScrollAnimations();
}

// ============================================
// ACTIVE NAVIGATION STATE
// ============================================
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavigation();

// ============================================
// FORM VALIDATION (if forms are added later)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Export validation functions for form use
window.formValidation = {
    validateEmail,
    validatePhone
};

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add keyboard navigation support for cards
document.querySelectorAll('.card, .cta-card').forEach(card => {
    const link = card.querySelector('a');
    if (link) {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    }
});

// Announce page changes for screen readers
function announcePageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.classList.add('sr-only');
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images when they're about to enter viewport
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

lazyLoadImages();

// Debounce scroll events for performance
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

// Apply debounce to scroll handler if needed
window.addEventListener('scroll', debounce(() => {
    // Scroll-based logic here
}, 100));

// ============================================
// ANALYTICS (Google Analytics 4 Ready)
// ============================================

// Track CTA button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        const buttonType = this.classList.contains('btn-primary') ? 'primary' : 'secondary';

        // Send to Google Analytics 4 if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': buttonText,
                'button_type': buttonType
            });
        }

        // Log for debugging (remove in production)
        console.log('CTA Click:', { buttonText, buttonType });
    });
});

// Track phone number clicks
document.querySelectorAll('a[href^="tel:"]').forEach(phoneLink => {
    phoneLink.addEventListener('click', function() {
        const phoneNumber = this.getAttribute('href').replace('tel:', '');

        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_click', {
                'event_category': 'contact',
                'event_label': phoneNumber
            });
        }

        console.log('Phone Click:', phoneNumber);
    });
});

// Track email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function() {
        const email = this.getAttribute('href').replace('mailto:', '');

        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'event_category': 'contact',
                'event_label': email
            });
        }

        console.log('Email Click:', email);
    });
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;

        if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
                'event_category': 'engagement',
                'event_label': `${scrollPercentage}%`,
                'value': scrollPercentage
            });
        }

        console.log('Scroll Depth:', scrollPercentage + '%');
    }
}, 500));

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get current breakpoint
function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width < 480) return 'mobile-small';
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

// Log current breakpoint on resize (for debugging)
let currentBreakpoint = getCurrentBreakpoint();
window.addEventListener('resize', debounce(() => {
    const newBreakpoint = getCurrentBreakpoint();
    if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        console.log('Breakpoint changed:', currentBreakpoint);
    }
}, 250));

// ============================================
// 2025 SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ============================================
function initEnhancedScrollAnimations() {
    // Select all sections and cards for fade-in effect
    const animatedElements = document.querySelectorAll('section, .card, .timeline-step, .cta-card, .stat');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for elements in sequence
                setTimeout(() => {
                    entry.target.classList.add('fade-in-visible');
                }, index * 100); // 100ms stagger
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        // Add initial hidden state class
        element.classList.add('fade-in-element');
        observer.observe(element);
    });
}

// Initialize enhanced scroll animations
if ('IntersectionObserver' in window) {
    initEnhancedScrollAnimations();
}

// ============================================
// INITIALIZATION
// ============================================
console.log('Accounting Broker Homepage Loaded');
console.log('Current Breakpoint:', getCurrentBreakpoint());

// Announce page load for screen readers
announcePageChange('Page loaded successfully');
