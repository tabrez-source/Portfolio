// Typing animation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize text color change
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  
  if (text1 && text2 && text3) {
    setTimeout(function() {
      text1.style.color = '#0a66c2';
      text2.style.color = '#0a66c2';
      text3.style.color = '#0a66c2';
    }, 2000);
  }
  
  // Initialize typing animation if the library is loaded
  if (typeof Typed !== 'undefined') {
    var typing = new Typed(".typing", {
      strings: ["", "Cloud Engineer", "DevOps Specialist", "AWS Certified", "Kubernetes Expert"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    
    var typing2 = new Typed(".typing-2", {
      strings: ["", "Cloud Engineer", "DevOps Specialist", "AWS Certified", "Kubernetes Expert"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  // Toggle menu/navbar
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }

  // Highlight active menu item based on scroll position
  function highlightMenu() {
    const scrollPos = window.scrollY;
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.menu-btn');
    
    sections.forEach((section, index) => {
      const top = section.offsetTop - 150;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos <= bottom) {
        menuItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // Add scroll event listener for menu highlighting
  window.addEventListener('scroll', highlightMenu);

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      
      fetch('includes/contact.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        const responseDiv = document.getElementById('formResponse');
        responseDiv.innerHTML = `<p class="${data.status}">${data.message}</p>`;
        if (data.status === 'success') {
          contactForm.reset();
        }
      })
      .catch(error => {
        document.getElementById('formResponse').innerHTML = '<p class="error">An error occurred. Please try again later.</p>';
      });
    });
  }
}); 