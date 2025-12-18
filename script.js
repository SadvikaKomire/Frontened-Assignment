// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
  // Reset all slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Show the selected slide
  slides[index].classList.add('active');
  
  // Update current slide
  currentSlide = index;
}

// Next slide function
function nextSlide() {
  let nextIndex = currentSlide + 1;
  if (nextIndex >= totalSlides) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

// Previous slide function
function prevSlide() {
  let prevIndex = currentSlide - 1;
  if (prevIndex < 0) {
    prevIndex = totalSlides - 1;
  }
  showSlide(prevIndex);
}

// Auto slide change every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Slider controls
document.querySelector('.next-btn').addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

// Pause slider on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Simple animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .feature-card, .project-card, .reason-card, .pricing-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animated elements
document.querySelectorAll('.service-card, .feature-card, .project-card, .reason-card, .pricing-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form validation (if you add forms later)
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;
  
  let isValid = true;
  
  // Example validation - customize as needed
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.style.borderColor = 'red';
    } else {
      field.style.borderColor = '';
    }
  });
  
  return isValid;
}

// Initialize any tooltips or other components
document.addEventListener('DOMContentLoaded', function() {
  console.log('Quantum Innovation website loaded');
});