import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Send, FileText, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '', show: false });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showStatus = (type, message) => {
    setStatusMessage({ type, message, show: true });
    setTimeout(() => setStatusMessage(prev => ({ ...prev, show: false })), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showStatus('error', 'Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showStatus('success', "Message sent. I'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      showStatus('error', 'Something went wrong. Please reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/Tusharsohal',          label: 'GitHub',   description: 'github.com/Tusharsohal' },
    { icon: Linkedin, href: 'https://linkedin.com/in/tushar-sohal',    label: 'LinkedIn', description: 'linkedin.com/in/tushar-sohal' },
    { icon: Mail,     href: 'mailto:tusharsohal20@gmail.com',          label: 'Email',    description: 'tusharsohal20@gmail.com' },
    { icon: FileText, href: '/Tushar_Sohal_resume.pdf',                label: 'Resume',   description: 'Download PDF', isResume: true },
  ];

  return (
    <>
      {/* ═══════════════════════════════
          CONTACT SECTION  — OLIVE BAND
      ═══════════════════════════════ */}
      <section id="contact" className="ct-root" ref={sectionRef}>
        <div className="ct-grain" aria-hidden="true" />
        <div className="ct-ghost" aria-hidden="true">TALK</div>

        {/* Top separator */}
        <div className="ct-sep" aria-hidden="true" />

        {/* Section label */}
        <div className={`ct-label ${isVisible ? 'ct-vis' : ''}`}>
          <span className="ct-label-num">05</span>
          <span className="ct-label-line" />
          <span className="ct-label-text">Contact</span>
        </div>

        {/* ── Big heading ── */}
        <div className={`ct-hero ${isVisible ? 'ct-vis' : ''}`}>
          <h2 className="ct-heading">
            <span className="ct-heading-solid">Let's build</span>
            <span className="ct-heading-italic"> something.</span>
          </h2>
          <div className="ct-hero-right">
            <p className="ct-sub">
              Open to Backend Developer roles • Immediate joiner • Let&apos;s
              build scalable systems.
            </p>
            <div className="ct-avail">
              <span className="ct-avail-dot" />
              <span>Open to backend roles • Immediate joiner • Remote / Hybrid</span>
            </div>
            <div className="ct-meta-row">
              <span className="ct-meta"><MapPin size={12} /> India · IST (UTC+5:30)</span>
              <span className="ct-meta"><Clock size={12} /> Replies within 24h</span>
            </div>
          </div>
        </div>

        {/* ── Two-column layout: form | links ── */}
        <div className={`ct-body ${isVisible ? 'ct-vis' : ''}`}>

          {/* FORM — dark card on olive bg */}
          <div className="ct-form-card">
            <div className="ct-form-card-header">
              <span className="ct-form-label">Send a message</span>
              <span className="ct-form-num">01</span>
            </div>
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-row">
                <div className="ct-group">
                  <label className="ct-field-label">Name <span className="ct-req">*</span></label>
                  <input type="text" name="name" value={formData.name}
                    onChange={handleInputChange} className="ct-input"
                    placeholder="Your name" />
                </div>
                <div className="ct-group">
                  <label className="ct-field-label">Email <span className="ct-req">*</span></label>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleInputChange} className="ct-input"
                    placeholder="you@example.com" />
                </div>
              </div>

              <div className="ct-group">
                <label className="ct-field-label">Subject</label>
                <input type="text" name="subject" value={formData.subject}
                  onChange={handleInputChange} className="ct-input"
                  placeholder="Backend role / Project collaboration" />
              </div>

              <div className="ct-group">
                <label className="ct-field-label">Message <span className="ct-req">*</span></label>
                <textarea name="message" value={formData.message}
                  onChange={handleInputChange} className="ct-textarea"
                  rows={5} placeholder="Tell me about the opportunity or project..." />
              </div>

              {statusMessage.show && (
                <div className={`ct-status ct-status--${statusMessage.type}`}>
                  {statusMessage.message}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="ct-submit">
                <span className="ct-submit-text">{isSubmitting ? 'Sending…' : 'Send Message'}</span>
                <Send size={14} />
                <span className="ct-submit-fill" />
              </button>
            </form>
          </div>

          {/* LINKS — light card on olive bg */}
          <div className="ct-links-card">
            <div className="ct-links-card-header">
              <span className="ct-form-label">Connect directly</span>
              <span className="ct-form-num">02</span>
            </div>
            <div className="ct-social-list">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ct-social ${link.isResume ? 'ct-social--resume' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="ct-social-icon">
                    <link.icon size={15} />
                  </span>
                  <div className="ct-social-text">
                    <span className="ct-social-name">{link.label}</span>
                    <span className="ct-social-desc">{link.description}</span>
                  </div>
                  <ArrowUpRight size={14} className="ct-social-arrow" />
                </a>
              ))}
            </div>

            {/* Olive accent quote block */}
            <div className="ct-quote-block">
              <span className="ct-quote-bar" />
              <p className="ct-quote-text">
                "I build secure, scalable backend systems that are ready for
                production, not just demos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          FOOTER — SMOKY BLACK BAND
      ═══════════════════════════════ */}
      <footer className="ft-root">
        <div className="ft-grain" aria-hidden="true" />
        <div className="ft-inner">

          {/* Left — name + role */}
          <div className="ft-left">
            <span className="ft-name">Tushar Sohal</span>
            <span className="ft-role">Backend Developer</span>
          </div>

          {/* Centre — nav links */}
          <nav className="ft-nav" aria-label="Footer navigation">
            {['Hero', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="ft-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right — copyright */}
          <div className="ft-right">
            <span className="ft-copy">© {new Date().getFullYear()}</span>
            <span className="ft-copy ft-copy--dim">Built with React</span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="ft-bottom">
          <span className="ft-bottom-text">
            Designed & developed by Tushar Sohal · Delhi, India
          </span>
        </div>
      </footer>
    </>
  );
}

export default Contact;
