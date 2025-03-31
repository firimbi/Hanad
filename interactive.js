// Interactive features for the investment analysis website
document.addEventListener('DOMContentLoaded', function() {
  // Platform filtering functionality
  const platformFilters = document.querySelectorAll('.platform-filter');
  const platformCards = document.querySelectorAll('.platform-card');
  
  if (platformFilters.length > 0 && platformCards.length > 0) {
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
            const cardTypes = card.getAttribute('data-type').split(' ');
            card.style.display = cardTypes.includes(filterValue) ? 'block' : 'none';
          }
        });
      });
    });
  }
  
  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
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
  }
  
  // Mobile navigation toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('#navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Transform hamburger to X
      const spans = this.querySelectorAll('span');
      if (spans.length === 3) {
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-neg-45');
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (spans.length === 3) {
          spans[0].classList.remove('rotate-45');
          spans[1].classList.remove('opacity-0');
          spans[2].classList.remove('rotate-neg-45');
        }
      }
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          
          // Reset hamburger icon
          const spans = navToggle.querySelectorAll('span');
          if (spans.length === 3) {
            spans[0].classList.remove('rotate-45');
            spans[1].classList.remove('opacity-0');
            spans[2].classList.remove('rotate-neg-45');
          }
        }
        
        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate elements when they come into view
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animateElements.length > 0) {
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
  }
  
  // Add CSS classes for hamburger animation
  const style = document.createElement('style');
  style.textContent = `
    .rotate-45 {
      transform: rotate(45deg) translate(5px, 5px) !important;
    }
    .opacity-0 {
      opacity: 0 !important;
    }
    .rotate-neg-45 {
      transform: rotate(-45deg) translate(5px, -5px) !important;
    }
  `;
  document.head.appendChild(style);
  
  // Add event listeners to comparison cards for highlighting
  const comparisonCards = document.querySelectorAll('.comparison-card');
  
  if (comparisonCards.length > 0) {
    comparisonCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('highlighted');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('highlighted');
      });
    });
    
    // Add CSS for highlighted state
    const highlightStyle = document.createElement('style');
    highlightStyle.textContent = `
      .comparison-card.highlighted {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
      .trump-card.highlighted .card-header {
        background-color: #c0392b;
      }
      .gold-card.highlighted .card-header {
        background-color: #d35400;
      }
    `;
    document.head.appendChild(highlightStyle);
  }
  
  // Add print functionality
  const printButton = document.createElement('button');
  printButton.textContent = 'Print Analysis';
  printButton.classList.add('print-button');
  printButton.addEventListener('click', function() {
    window.print();
  });
  
  // Add print button to conclusion section
  const conclusionSection = document.querySelector('.conclusion-content');
  if (conclusionSection) {
    conclusionSection.appendChild(printButton);
    
    // Add CSS for print button
    const printButtonStyle = document.createElement('style');
    printButtonStyle.textContent = `
      .print-button {
        display: block;
        margin: 30px auto 0;
        padding: 10px 20px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .print-button:hover {
        background-color: #154360;
      }
      @media print {
        .print-button {
          display: none;
        }
      }
    `;
    document.head.appendChild(printButtonStyle);
  }
});
