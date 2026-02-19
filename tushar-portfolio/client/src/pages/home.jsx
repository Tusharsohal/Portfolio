import React, { useEffect } from 'react';
import '../styles/design-system.css';
import '../styles/home.css';
import Projects from '../components/projects';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Contact from '../components/contact';
import { ChevronDown, Download, ArrowRight, CheckCircle } from 'lucide-react';
import { initAnimations } from '../utils/scroll-animations';

function Home() {
  useEffect(() => {
    initAnimations();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    window.open('/Tushar_Sohal_resume.pdf', '_blank');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title">
                  <span className="role">Backend-first Full-Stack Developer</span>
                  <span className="value">Building secure, production-grade systems</span>
                </h1>
                <p className="hero-subtitle">
                  Backend-first full-stack developer with hands-on experience building secure, production-grade systems for defence and enterprise environments.
                </p>
                <p className="hero-tech">Node.js · FastAPI · PostgreSQL · JWT/RBAC · React · Next.js</p>
                <div className="hero-cta">
                  <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                    <span>View Projects</span>
                    <ArrowRight className="btn-icon" />
                  </button>
                  <button onClick={handleResumeDownload} className="btn btn-secondary">
                    <Download className="btn-icon" />
                    <span>Download Resume</span>
                    <small className="resume-note">PDF • 1 page</small>
                  </button>
                </div>

                <div className="trust-signals">
                  <div className="trust-signal">
                    <CheckCircle size={16} />
                    Defence-grade systems
                  </div>
                  <div className="trust-signal">
                    <CheckCircle size={16} />
                    Production deployments
                  </div>
                  <div className="trust-signal">
                    <CheckCircle size={16} />
                    Secure APIs & RBAC
                  </div>
                </div>
              </div>

              <div className="hero-media">
                <div className="hero-image-wrapper">
                  <img
                    className="hero-image"
                    src="/hero.jpeg"
                    alt="Professional headshot"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('projects')} className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
          <span className="scroll-text">Explore my work</span>
        </button>
      </header>

      <section id="about" className="about-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">About Me</h2>
          </header>
          <div className="about-content">
            <p>
              I'm a backend-first full-stack developer focused on building secure, scalable systems for real-world use.
              I enjoy working on API design, authentication, and database-driven applications, especially in environments where reliability and security matter.
              Currently seeking backend or full-stack roles where I can contribute to production systems and continue growing as an engineer.
            </p>
          </div>
        </div>
      </section>

      <main style={{ paddingTop: '96px' }}>
        <div className="animate-on-scroll section-alt">
          <Projects />
        </div>
        <div className="animate-on-scroll">
          <Experience />
        </div>
        <div className="animate-on-scroll section-alt">
          <Skills />
        </div>
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default Home;