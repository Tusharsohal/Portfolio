import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '', show: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showStatus = (type, message) => {
    setStatusMessage({ type, message, show: true });
    setTimeout(() => {
      setStatusMessage(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showStatus('error', 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      showStatus('success', 'Thank you for your message! I\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      showStatus('error', 'Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Tusharsohal',
      label: 'GitHub',
      description: 'View my code and projects'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/tushar-sohal',
      label: 'LinkedIn',
      description: 'Connect professionally'
    },
    {
      icon: Mail,
      href: 'mailto:tusharsohal20@gmail.com',
      label: 'Email',
      description: 'tusharsohal20@gmail.com'
    },
    {
      icon: Send,
      href: '/Tushar_Sohal_resume.pdf',
      label: 'Resume',
      description: 'Download PDF resume',
      isResume: true
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm interested in backend and full-stack opportunities. 
            Let's discuss how I can contribute to your team.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="How can I help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              {statusMessage.show && (
                <div className={`status-message ${statusMessage.type}`}>
                  {statusMessage.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-section">
              <h3>Let's Connect</h3>
              <p>
                I'm actively seeking backend and full-stack roles. 
                Reach out to discuss opportunities or collaborations.
              </p>
            </div>

            <div className="social-links">
              <h4>Professional Profiles</h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  link.isResume ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link resume-link"
                    >
                      <link.icon size={20} />
                      <div className="social-info">
                        <span className="social-label">{link.label}</span>
                        <span className="social-description">{link.description}</span>
                      </div>
                    </a>
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <link.icon size={20} />
                      <div className="social-info">
                        <span className="social-label">{link.label}</span>
                        <span className="social-description">{link.description}</span>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </div>

            <div className="response-time">
              <h4>Response Time</h4>
              <p>I typically respond within 24 hours. For urgent matters, please mention it in your message.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
