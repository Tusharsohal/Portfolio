// Utility functions for contact form

/**
 * Validates if a field has a non-empty value
 * @param {string} value - The field value to validate
 * @returns {boolean} - Returns true if field is valid
 */
export const validateField = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validates email format using regex
 * @param {string} email - The email to validate
 * @returns {boolean} - Returns true if email format is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Simulates form submission with a delay
 * @param {Object} formData - The form data to submit
 * @returns {Promise} - Returns a promise that resolves after 2 seconds
 */
export const simulateFormSubmission = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success/failure based on some condition
      // In a real app, this would be an API call
      const shouldSucceed = Math.random() > 0.1; // 90% success rate
      
      if (shouldSucceed) {
        console.log('Form submitted successfully:', formData);
        resolve(formData);
      } else {
        reject(new Error('Submission failed'));
      }
    }, 2000);
  });
};

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector for target element
 */
export const smoothScrollTo = (selector) => {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Formats phone number for display
 * @param {string} phone - Raw phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Check if it's an Indian number
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return `+91-${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone; // Return original if format doesn't match
};

/**
 * Debounce function to limit the rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Check if device is mobile based on screen width
 * @returns {boolean} - True if mobile device
 */
export const isMobile = () => {
  return window.innerWidth <= 768;
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
};

/**
 * Form data serializer
 * @param {Object} formData - Form data object
 * @returns {FormData} - FormData object ready for submission
 */
export const serializeFormData = (formData) => {
  const serialized = new FormData();
  
  Object.keys(formData).forEach(key => {
    if (formData[key] !== null && formData[key] !== undefined) {
      serialized.append(key, formData[key]);
    }
  });
  
  return serialized;
};

/**
 * Social media links configuration
 */
export const socialLinks = {
  github: {
    url: 'https://github.com/tusharsohal',
    label: 'GitHub Profile'
  },
  linkedin: {
    url: 'https://linkedin.com/in/tusharsohal',
    label: 'LinkedIn Profile'
  },
  twitter: {
    url: 'https://twitter.com/tusharsohal',
    label: 'Twitter Profile'
  },
  portfolio: {
    url: 'https://tusharsohal.dev',
    label: 'Portfolio Website'
  }
};

/**
 * Contact information configuration
 */
export const contactInfo = {
  email: 'tusharsohal20@gmail.com',
  phone: '+91-7827115042',
  location: 'India',
  timezone: 'Asia/Kolkata',
  responseTime: '24 hours'
};