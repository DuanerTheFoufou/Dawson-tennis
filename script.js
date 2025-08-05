// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Roger Federer scroll animations
window.addEventListener('scroll', function() {
    const federerContainer = document.querySelector('.federer-image-container');
    const federerImage = document.querySelector('.federer-image');
    const imageOverlay = document.querySelector('.image-overlay');
    const quoteIcon = document.querySelector('.quote-icon');
    const inspirationTitle = document.querySelector('.inspiration-title');
    const inspirationQuote = document.querySelector('.inspiration-quote');
    const quoteAuthor = document.querySelector('.quote-author');
    const inspirationFeatures = document.querySelectorAll('.inspiration-feature');
    
    if (federerContainer && federerImage) {
        const rect = federerContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if element is in viewport
        const isInView = elementTop < windowHeight && elementBottom > 0;
        
        if (isInView) {
            // Calculate scroll progress through the element
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
            
            // Parallax effect for the image
            const parallaxOffset = scrollProgress * 30;
            federerContainer.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
            federerContainer.classList.add('parallax');
            
            // Breathing animation when in view
            if (!federerImage.classList.contains('breathing')) {
                federerImage.classList.add('breathing');
            }
            
            // Glow effect based on scroll progress
            if (scrollProgress > 0.5) {
                federerContainer.classList.add('glow');
                if (imageOverlay) imageOverlay.classList.add('intense');
            } else {
                federerContainer.classList.remove('glow');
                if (imageOverlay) imageOverlay.classList.remove('intense');
            }
            
            // Quote icon animation
            if (quoteIcon && scrollProgress > 0.3) {
                quoteIcon.classList.add('animate');
            }
            
            // Title highlight effect
            if (inspirationTitle && scrollProgress > 0.4) {
                inspirationTitle.classList.add('highlight');
            }
            
            // Quote emphasis
            if (inspirationQuote && scrollProgress > 0.5) {
                inspirationQuote.classList.add('emphasize');
            }
            
            // Author highlight
            if (quoteAuthor && scrollProgress > 0.6) {
                quoteAuthor.classList.add('highlight');
            }
            
            // Feature animations with staggered timing
            inspirationFeatures.forEach((feature, index) => {
                if (scrollProgress > 0.7 + (index * 0.1)) {
                    if (!feature.classList.contains('animate')) {
                        feature.classList.add('animate');
                    }
                }
            });
            
        } else {
            // Remove animations when out of view
            federerImage.classList.remove('breathing');
            federerContainer.classList.remove('parallax', 'glow');
            if (imageOverlay) imageOverlay.classList.remove('intense');
            if (quoteIcon) quoteIcon.classList.remove('animate');
            if (inspirationTitle) inspirationTitle.classList.remove('highlight');
            if (inspirationQuote) inspirationQuote.classList.remove('emphasize');
            if (quoteAuthor) quoteAuthor.classList.remove('highlight');
            inspirationFeatures.forEach(feature => feature.classList.remove('animate'));
        }
    }
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tennis-signup-form');
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    
    if (form && submitBtn) {
        // Handle button click instead of form submission
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Submit button clicked'); // Debug log
            
            // Basic validation
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            if (!data.name || !data.email || !data.age || !data.skill_level || !data.student_number || !data.participation_type) {
                showNotification('Please fill in all fields.', 'error');
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return false;
            }
            
            // Age validation
            const age = parseInt(data.age);
            if (age < 16 || age > 100) {
                showNotification('Please enter a valid age between 16 and 100.', 'error');
                return false;
            }
            
            // Show loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            console.log('Submitting form data:', data); // Debug log
            
            // Submit to Formspree using fetch
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                console.log('Formspree response:', response); // Debug log
                if (response.ok) {
                    // Success - show message and reset form
                    showNotification('Thank you for your application! We\'ll be in touch soon.', 'success');
                    form.reset();
                    
                    // Scroll to top of form section
                    const signupSection = document.getElementById('signup');
                    if (signupSection) {
                        signupSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    throw new Error('Submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                showNotification('There was an error submitting your application. Please try again.', 'error');
            })
            .finally(() => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
            
            return false;
        });
        
        // Also prevent form submission as backup
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const colors = {
        success: '#34C759',
        error: '#FF3B30',
        info: '#007AFF'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 8 seconds for success messages
    const autoRemoveTime = type === 'success' ? 8000 : 5000;
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, autoRemoveTime);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .affiliation-card, .signup-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Smooth reveal for inspiration section
document.addEventListener('DOMContentLoaded', function() {
    const inspirationContent = document.querySelector('.inspiration-content');
    if (inspirationContent) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.3 });
        
        inspirationContent.style.opacity = '0';
        inspirationContent.style.transform = 'translateX(30px)';
        inspirationContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(inspirationContent);
    }
});

// Add mouse interaction for Roger Federer image
document.addEventListener('DOMContentLoaded', function() {
    const federerImage = document.querySelector('.federer-image');
    const federerContainer = document.querySelector('.federer-image-container');
    
    if (federerContainer) {
        federerContainer.addEventListener('mouseenter', function() {
            if (federerImage) {
                federerImage.style.transform = 'scale(1.05)';
                federerImage.style.filter = 'brightness(1.1)';
            }
        });
        
        federerContainer.addEventListener('mouseleave', function() {
            if (federerImage) {
                federerImage.style.transform = 'scale(1)';
                federerImage.style.filter = 'brightness(1)';
            }
        });
    }
}); 