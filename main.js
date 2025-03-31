// Main JavaScript file for the investment analysis website
document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile navigation
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
  
  // Animate elements when they come into view
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const animateOnScroll = function() {
    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('animated');
      }
    });
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Toggle FAQ answers
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isOpen = answer.style.maxHeight;
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.maxHeight = null;
      });
      
      document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current answer
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        this.classList.add('active');
      }
    });
  });
  
  // Platform filter functionality
  const platformFilters = document.querySelectorAll('.platform-filter');
  const platformCards = document.querySelectorAll('.platform-card');
  
  platformFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active filter
      platformFilters.forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
      
      // Show/hide platform cards
      platformCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          const cardType = card.getAttribute('data-type');
          card.style.display = cardType === filterValue ? 'block' : 'none';
        }
      });
    });
  });
  
  // Countdown timer for "limited time offer"
  const countdownElement = document.getElementById('countdown-timer');
  
  if (countdownElement) {
    // Set countdown for 7 days from now
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    
    const updateCountdown = function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Offer expired";
      }
    };
    
    // Update countdown every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
  }
});
