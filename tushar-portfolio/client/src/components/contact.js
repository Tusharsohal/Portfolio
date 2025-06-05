import React, { useState } from 'react';
import './contact.css';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Instagram
} from 'lucide-react';
import { validateField, validateEmail, simulateFormSubmission } from './contactUtils';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '', show: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name] && value.trim()) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const showStatus = (type, message) => {
    setStatusMessage({ type, message, show: true });
    setTimeout(() => {
      setStatusMessage(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    let isValid = true;
    
    if (!validateField(formData.firstName)) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    
    if (!validateField(formData.lastName)) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }
    
    if (!validateField(formData.subject)) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!validateField(formData.message)) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    if (!validateField(formData.email)) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    setErrors(newErrors);
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    try {
      await simulateFormSubmission(formData);
      showStatus('success', 'Thank you for your message! I\'ll get back to you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      showStatus('error', 'Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section  id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always interested in discussing new opportunities, innovative projects, 
            and collaborative ventures. Let's connect to explore how we can work together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="card-title">
                <div className="card-icon">
                  <Mail size={16} />
                </div>
                Contact Information
              </h3>
              
              <a href="mailto:tusharsohal20@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>tusharsohal20@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917827115042" className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-details">
                  <h4>Phone Number</h4>
                  <p>+91-7827115042</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>

              <div className="social-section">
                <div className="social-title">Connect with me</div>
                <div className="social-links">
                  <a href="https://github.com/Tusharsohal" className="social-link" title="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/tushar-sohal-b70b661a2/" className="social-link" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  
                 
                </div>
              </div>
            </div>

            <div className="availability-notice">
              <h4 className="availability-title">Currently Available</h4>
              <p className="availability-text">
                Open to new opportunities and interesting projects. I typically respond to inquiries within 24 hours.
              </p>
              <div className="response-time">
                <Clock size={12} />
                Usually responds in 24 hours
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card form-section">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-description">
              Have a project in mind or want to discuss potential collaboration? 
              Fill out the form below and I'll get back to you promptly.
            </p>

            {statusMessage.show && (
              <div className={`status-message status-${statusMessage.type} fade-in`}>
                {statusMessage.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                <span>{statusMessage.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    required
                  />
                  {errors.firstName && (
                    <div className="error-message">{errors.firstName}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    required
                  />
                  {errors.lastName && (
                    <div className="error-message">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    required
                  />
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="Brief description of your inquiry"
                  required
                />
                {errors.subject && (
                  <div className="error-message">{errors.subject}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows="6"
                  placeholder="Please provide details about your project, timeline, and any specific requirements..."
                  required
                />
                {errors.message && (
                  <div className="error-message">{errors.message}</div>
                )}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;