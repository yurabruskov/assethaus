/**
 * Asset.haus - ROI Calculator
 * Interactive calculator for tokenization estimates
 */

class TokenizationCalculator {
  constructor() {
    this.propertyValue = 5000000; // Default $5M
    this.tokenizePercent = 25; // Default 25%
    this.platformFee = 0.02; // 2% platform fee
    this.avgInvestment = 5000; // Average investor ticket size
    this.timelineWeeks = 6; // Default timeline

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupListeners());
    } else {
      this.setupListeners();
    }
  }

  setupListeners() {
    const propertyInput = document.getElementById('propertyValue');
    const percentInput = document.getElementById('tokenizePercent');

    if (propertyInput) {
      propertyInput.addEventListener('input', (e) => {
        this.propertyValue = parseInt(e.target.value);
        this.updateDisplay();
      });
    }

    if (percentInput) {
      percentInput.addEventListener('input', (e) => {
        this.tokenizePercent = parseInt(e.target.value);
        this.updateDisplay();
      });
    }

    // Initial calculation
    this.updateDisplay();
  }

  calculate() {
    const fundingNeeded = (this.propertyValue * this.tokenizePercent) / 100;
    const platformFeeAmount = fundingNeeded * this.platformFee;
    const netProceeds = fundingNeeded - platformFeeAmount;
    const estimatedInvestors = Math.floor(fundingNeeded / this.avgInvestment);

    return {
      propertyValue: this.propertyValue,
      tokenizePercent: this.tokenizePercent,
      fundingNeeded,
      platformFeeAmount,
      netProceeds,
      estimatedInvestors,
      timelineWeeks: this.timelineWeeks
    };
  }

  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
  }

  updateDisplay() {
    const results = this.calculate();

    // Update input displays
    const propertyDisplay = document.getElementById('propertyValueDisplay');
    const percentDisplay = document.getElementById('tokenizePercentDisplay');

    if (propertyDisplay) {
      propertyDisplay.textContent = this.formatCurrency(results.propertyValue);
    }

    if (percentDisplay) {
      percentDisplay.textContent = `${results.tokenizePercent}%`;
    }

    // Update result values
    this.updateElement('fundingNeeded', this.formatCurrency(results.fundingNeeded));
    this.updateElement('platformFee', this.formatCurrency(results.platformFeeAmount));
    this.updateElement('netProceeds', this.formatCurrency(results.netProceeds));
    this.updateElement('estimatedInvestors', `${results.estimatedInvestors}-${results.estimatedInvestors * 2}`);
    this.updateElement('timeline', `${results.timelineWeeks} weeks`);
  }

  updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }
}

// Initialize calculator
const calculator = new TokenizationCalculator();

/**
 * Smooth scroll for anchor links
 */
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for all anchor links
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

  // Add fade-in animation to sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // CTA button tracking (placeholder for analytics)
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.textContent.trim();
      console.log('CTA clicked:', action);
      // Add your analytics tracking here
      // e.g., gtag('event', 'cta_click', { action });
    });
  });
});

/**
 * Simple form validation (if needed)
 */
function handleDemoRequest(e) {
  e.preventDefault();
  const email = document.getElementById('email')?.value;

  if (email && validateEmail(email)) {
    console.log('Demo requested for:', email);
    // Add your form submission logic here
    alert('Thank you! We\'ll contact you within 24 hours.');
  } else {
    alert('Please enter a valid email address.');
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
