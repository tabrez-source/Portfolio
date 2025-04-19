/**
 * Home page specific JavaScript
 * This file contains code specifically for the home page functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Animated counter function for statistics
  function startCounter() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 16ms = approximately 60fps
      
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        counter.innerText = Math.round(current);
        
        if (current < target) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCounter();
    });
  }
  
  // Start counter when elements come into view
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe statistics section if it exists
  const statsSection = document.querySelector('.statistics');
  if (statsSection) {
    observer.observe(statsSection);
  }
}); 