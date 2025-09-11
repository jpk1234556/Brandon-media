    this.initAudioEffects();
>>>>>>> df4c152ebebe208869c79190d8ac635ae2d7ed6e
  }
// Futuristic Web Design Engineer - Brandon Media Cyberpunk Interface
// Performance Optimized Version

class FuturisticBrandonMedia {
  constructor() {
    this.isLoaded = false;
    this.cyberCursor = null;
    this.matrixElements = [];
    this.animationFrameId = null;
    this.scrollTimeout = null;
    this.resizeTimeout = null;
    
    // Performance tracking
    this.performanceMetrics = {
      startTime: performance.now(),
      loadTime: 0,
      renderTime: 0
    };
    
    this.init();
  }

  init() {
    // Use requestIdleCallback for non-critical initializations
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.initMatrixBackground();
        this.initTechElements();
      });
    } else {
      setTimeout(() => {
        this.initMatrixBackground();
        this.initTechElements();
      }, 100);
    }
    
    // Critical path initializations
    this.initHolographicLoader();
    this.initCyberCursor();
    this.initNavigation();
    this.initSlideshow();
    this.initScrollAnimations();
    this.initContactForm();
    this.initSmoothScrolling();
    this.initParallax();
    this.initScrollIndicator();
  }
=======
    this.initAudioEffects();
>>>>>>> df4c152ebebe208869c79190d8ac635ae2d7ed6e
  }

  // Holographic Loading System - Performance Optimized
  initHolographicLoader() {
    const loader = document.getElementById('holoLoader');
    
    if (!loader) return;
    
    // Reduce loading time for better perceived performance
    const loadingTime = window.location.hash ? 1000 : 2000; // Faster for direct navigation
    
    // Use animation frame for smooth transition
    const hideLoader = () => {
      loader.style.opacity = '0';
      loader.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        this.isLoaded = true;
        this.triggerHeroAnimation();
        
        // Track performance
        this.performanceMetrics.loadTime = performance.now() - this.performanceMetrics.startTime;
        console.log(`⚡ Interface initialized in ${Math.round(this.performanceMetrics.loadTime)}ms`);
      }, 300);
    };
    
    setTimeout(hideLoader, loadingTime);
  }

  // Cyber Cursor System - Performance Optimized
  initCyberCursor() {
    this.cyberCursor = document.getElementById('cyberCursor');
    
    if (!this.cyberCursor || window.innerWidth <= 768) {
      // Disable on mobile for performance
      if (this.cyberCursor) this.cyberCursor.style.display = 'none';
      return;
    }
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isIdle = false;
    
    // Throttle mouse move events
    const handleMouseMove = this.throttle((e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isIdle = false;
    }, 16); // ~60fps
    
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Optimized cursor animation
    const updateCursor = () => {
      if (!isIdle) {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        // Use transform for better performance
        this.cyberCursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        
        // Mark as idle if movement is minimal
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
          isIdle = true;
        }
      }
      
      this.animationFrameId = requestAnimationFrame(updateCursor);
    };
    
    updateCursor();
    
    // Optimized event listeners
    document.addEventListener('mousedown', () => {
      this.cyberCursor.classList.add('active');
    }, { passive: true });
    
    document.addEventListener('mouseup', () => {
      this.cyberCursor.classList.remove('active');
    }, { passive: true });
  }

  // Performance Utilities
  throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }
  
  debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Matrix Digital Rain Background - Optimized
  initMatrixBackground() {
    const matrixBg = document.getElementById('matrixBg');
    if (!matrixBg) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.1';
    
    matrixBg.appendChild(canvas);
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const columns = Math.floor(canvas.width / 20);
    const drops = new Array(columns).fill(1);
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ffff';
      ctx.font = '14px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    setInterval(drawMatrix, 50);
  }

  // Navigation Enhancement - Performance Optimized
  initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Optimized navbar scroll effect with throttling
    const handleScroll = this.throttle(() => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mobile menu toggle
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
      }, { passive: true });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
      }, { passive: true });
    });

    // Active link highlighting with throttling
    const updateActiveLink = this.throttle(() => this.updateActiveNavLink(), 100);
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    this.updateActiveNavLink();
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Professional Slideshow
  initSlideshow() {
    this.currentSlide = 1;
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.slideInterval = null;

    if (this.slides.length > 0) {
      this.showSlide(this.currentSlide);
      this.autoSlide();

      // Pause auto-slide on hover
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.addEventListener('mouseenter', () => this.pauseSlide());
        hero.addEventListener('mouseleave', () => this.autoSlide());
      }
    }

    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.currentSlide = index + 1;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
      });
    });
  }

  showSlide(n) {
    if (n > this.slides.length) this.currentSlide = 1;
    if (n < 1) this.currentSlide = this.slides.length;

    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    if (this.slides[this.currentSlide - 1]) {
      this.slides[this.currentSlide - 1].classList.add('active');
    }
    if (this.dots[this.currentSlide - 1]) {
      this.dots[this.currentSlide - 1].classList.add('active');
    }
  }

  nextSlide() {
    this.currentSlide++;
    this.showSlide(this.currentSlide);
  }

  autoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  pauseSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  resetAutoSlide() {
    this.pauseSlide();
    this.autoSlide();
  }

<<<<<<< HEAD
  // Parallax Effects
  initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length === 0) return;
    
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
    };
    
    window.addEventListener('scroll', debounce(handleParallax, 16));
  }

  // Scroll Indicator
  initScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
    
    const updateIndicator = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      indicator.style.transform = `scaleX(${scrollPercent / 100})`;
    };
    
    window.addEventListener('scroll', updateIndicator);
  }

  // Tech Elements Animation
  initTechElements() {
    const techElements = document.querySelectorAll('.tech-element');
    
    techElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
      
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.2) rotate(180deg)';
        element.style.textShadow = '0 0 30px currentColor';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1) rotate(0deg)';
        element.style.textShadow = '';
      });
    });
  }

  // Trigger Hero Animation
  triggerHeroAnimation() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('animate-fadeInUp');
    }
  }
=======
  // Enhanced Scroll Animations with Tech Effects
>>>>>>> df4c152ebebe208869c79190d8ac635ae2d7ed6e
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Add special effects for service cards
          if (entry.target.classList.contains('service-card')) {
            setTimeout(() => {
              entry.target.style.boxShadow = '0 20px 40px rgba(30, 58, 138, 0.2)';
            }, 300);
          }
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = [
      '.service-card',
      '.portfolio-item',
      '.stat-item',
      '.about-text',
      '.contact-info',
      '.contact-form',
      '.tech-tag'
    ];

    animatedElements.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
      });
    });
    
    // Add hover effects to tech tags
    document.querySelectorAll('.tech-tag').forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px) scale(1.05)';
        tag.style.boxShadow = '0 8px 25px rgba(30, 58, 138, 0.3)';
      });
      
      tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
        tag.style.boxShadow = '';
      });
    });
  }

  // Contact Form Enhancement
  initContactForm() {
    const form = document.getElementById('contactForm');
    const newsletter = document.querySelector('.newsletter-form');

    if (form) {
      form.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }

    if (newsletter) {
      newsletter.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
    }
  }

  async handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    try {
      // Simulate form submission (replace with actual endpoint)
      await this.simulateFormSubmission(formData);
      
      this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
      form.reset();
    } catch (error) {
      this.showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
    }
  }

  async handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;

    try {
      await this.simulateFormSubmission({ email });
      this.showNotification('Successfully subscribed to newsletter!', 'success');
      form.reset();
    } catch (error) {
      this.showNotification('Failed to subscribe. Please try again.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve(data);
        } else {
          reject(new Error('Submission failed'));
        }
      }, 1500);
    });
  }

  showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    // Add styles for notification
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    });
  }

  // Smooth Scrolling
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Loading Enhancement
  initLoading() {
    // Add loading class to body initially
    document.body.classList.add('loading');

    // Remove loading class when page is fully loaded
    window.addEventListener('load', () => {
      document.body.classList.remove('loading');
      
      // Trigger hero animation
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.classList.add('animate-fadeInUp');
      }
    });

    // Preload images for better performance
    this.preloadImages();
  }

  preloadImages() {
    const imageUrls = [
      'images/brenda-profile.jpg',
      'images/brenda .jpg',
      'images/Media campaigns.jpeg',
      'images/branding.jpeg',
      'images/Social-Media-Management-Tools.png',
      'images/podcast.jpeg'
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
}

// Global functions for slideshow (backwards compatibility)
window.currentSlide = (n) => {
  if (window.brandonMedia) {
    window.brandonMedia.currentSlide = n;
    window.brandonMedia.showSlide(n);
    window.brandonMedia.resetAutoSlide();
  }
};

// Utility functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Enhanced scroll performance with parallax
const optimizedScrollHandler = debounce(() => {
  // Handle scroll events efficiently
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize Futuristic Brandon Media Interface
document.addEventListener('DOMContentLoaded', () => {
  window.futuristicBrandonMedia = new FuturisticBrandonMedia();
  
  // Initialize lazy loading for images
  initLazyLoading();
  
  // Enhanced performance monitoring with cyberpunk aesthetics
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      const renderTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      
      console.log(`⚡ CYBER INTERFACE LOADED IN ${loadTime}ms (RENDER: ${renderTime}ms)`);
      console.log('%cᾑ6 BRANDON MEDIA FUTURISTIC INTERFACE ONLINE', 'color: #00ffff; font-size: 16px; font-weight: bold;');
      
      // Performance warnings
      if (loadTime > 3000) {
        console.warn('⚠️ Performance Warning: Load time exceeded 3s. Consider optimizations.');
      }
      
      // Log Core Web Vitals
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          console.log(`🎨 LCP: ${entry.startTime}ms`);
        });
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
  }
});

// Lazy Loading Implementation
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
    
    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
    
    // Also observe regular lazy images
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

// Global functions for slideshow (backwards compatibility)
window.currentSlide = (n) => {
  if (window.futuristicBrandonMedia) {
    window.futuristicBrandonMedia.currentSlide = n;
    window.futuristicBrandonMedia.showSlide(n);
    window.futuristicBrandonMedia.resetAutoSlide();
  }
};

// Futuristic error handling
window.addEventListener('error', (e) => {
  console.error('⚠️ CYBER SYSTEM ERROR:', e.error);
});

// Keyboard shortcuts for futuristic navigation
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    switch(e.key) {
      case 'h':
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        break;
      case 's':
        e.preventDefault();
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
        break;
      case 'c':
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
});

// Futuristic Easter Egg - Konami Code
let konamiCode = [];
const targetCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > targetCode.length) {
    konamiCode.shift();
  }
  
  if (JSON.stringify(konamiCode) === JSON.stringify(targetCode)) {
    document.body.classList.add('matrix-mode');
    console.log('%c🌌 MATRIX MODE ACTIVATED - WELCOME TO THE FUTURE!', 'color: #39ff14; font-size: 20px; font-weight: bold;');
  }
});

// Futuristic error handling
window.addEventListener('error', (e) => {
  console.error('⚠️ CYBER SYSTEM ERROR:', e.error);
});

// Service Worker registration for caching (deployment optimization)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Enable for production deployment
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('🛡️ SW registered'))
    //   .catch(error => console.log('⚠️ SW registration failed'));
  });
}