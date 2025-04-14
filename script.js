document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.querySelector('i').classList.toggle('fa-times');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          nav.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.remove('fa-times');
      });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
      testimonials.forEach(testimonial => {
          testimonial.classList.remove('active');
      });
      
      testimonials[index].classList.add('active');
  }
  
  prevBtn.addEventListener('click', function() {
      currentTestimonial--;
      if (currentTestimonial < 0) {
          currentTestimonial = testimonials.length - 1;
      }
      showTestimonial(currentTestimonial);
  });
  
  nextBtn.addEventListener('click', function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
          currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
  });
  
  // Auto-rotate testimonials
  setInterval(function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
          currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
  }, 5000);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Form submission
  const quoteForm = document.getElementById('quoteForm');
  
  if (quoteForm) {
      quoteForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const service = document.getElementById('service').value;
          const message = document.getElementById('message').value;
          
          // Here you would typically send the data to a server
          // For this example, we'll just show an alert
          alert(`Thank you, ${name}! Your ${service} request has been submitted. We'll contact you soon at ${email} or ${phone}.`);
          
          // Reset the form
          quoteForm.reset();
      });
  }
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const emailInput = this.querySelector('input[type="email"]');
          alert(`Thank you for subscribing with ${emailInput.value}!`);
          emailInput.value = '';
      });
  }
});
