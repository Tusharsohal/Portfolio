import React, { useState, useEffect, useCallback } from 'react';
import { Award, Briefcase, Code, Calendar, MapPin, Star, ExternalLink, TrendingUp, Zap, Trophy, Coffee, TerminalSquare } from 'lucide-react';
import './about.css';
import { useRef } from 'react';
function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const certContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Memoize the certificate click handler
  const initCertificateClicks = useCallback(() => {
    const certContainer = certContainerRef.current;
    const certCards = certContainer?.querySelectorAll('.cert-card');

    if (!certContainer || !certCards?.length) {
      console.warn('Certificate elements not found');
      return;
    }

    console.log('Found', certCards.length, 'certificate cards');

    // Remove existing event listeners first
    certCards.forEach(card => {
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
    });

    // Get the updated cards after cloning
    const updatedCertCards = certContainer.querySelectorAll('.cert-card');

    updatedCertCards.forEach(card => {
      card.addEventListener('click', function (e) {
        console.log('Certificate clicked!');

        // Don't trigger if clicking on the credential link
        if (e.target.closest('.cert-link')) {
          e.stopPropagation();
          return;
        }

        // Toggle clicked state
        if (this.classList.contains('clicked')) {
          this.classList.remove('clicked');
          certContainer.classList.remove('has-focus');
          return;
        }

        // Remove clicked from all cards
        updatedCertCards.forEach(c => c.classList.remove('clicked'));
        certContainer.classList.remove('has-focus');

        // Add clicked to this card
        this.classList.add('clicked');
        certContainer.classList.add('has-focus');
      });
    });

    const handleOutsideClick = (e) => {
      if (!e.target.closest('.cert-card') && !e.target.closest('.cert-container')) {
        updatedCertCards.forEach(c => c.classList.remove('clicked'));
        certContainer.classList.remove('has-focus');
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        updatedCertCards.forEach(c => c.classList.remove('clicked'));
        certContainer.classList.remove('has-focus');
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    // Return cleanup function
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure DOM is fully rendered
      const timeoutId = setTimeout(() => {
        const cleanup = initCertificateClicks();
        return cleanup;
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, initCertificateClicks]);

  const experiences = [
    {
      company: "BVICAM - (Software Consultancy Development Cell )",
      role: "Full Stack Developer ",
      duration: "Jan 2025 - Mar 2025",
      location: "New Delhi",
      description: [
        "Developed a subscription model for BIJIT Journal published by Springer Nature",
        "Integrated Razorpay payment gateway for seamless subscription transactions",
        "Built secure backend services using ASP.NET MVC and MySQL"
      ],
      technologies: ["ASP.NET MVC", "MySQL", "C#", "Razorpay"],
      achievements: ["secure server-side session management", "Database optimization", "System architecture"],
      color: "#77A6F7"
    },
    {
      company: "IBM",
      role: "Frontend Developer",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      description: [" Developed responsive UI components with React.js and Tailwind CSS",
        " Collaborated on the AquaRevive sustainability project for water management",
        "contributing key frontend features to improve overall product performance"

      ],
      technologies: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
      achievements: ["responsive React components", "90+  performance score", "Collaborated with team of 5 developers using Git workflow"],
      color: "#f778e2"
    },

    {
      company: "TechMihirNaik",
      role: "Frontend Developer",
      duration: "Aug 2021 - Nov 2021",
      location: "Mumbai",
      description: [" Developed and optimized UI components using HTML, CSS, and Bootstrap.",
        "Designed responsive layouts, ensuring seamless user experience across devices"],
      technologies: ["JavaScript", "CSS3", "HTML5", "Bootstrap"],
      achievements: ["UI/UX improvements", "Mobile responsiveness", "Code optimization"],
      color: "#FFCCBC"
    }
  ];
  const certifications = [
    {
      title: "Backend Development for .Net Full Stack",
      issuer: "Coursera-Board infinity",
      date: "Apr 24, 2025",
      credentialId: "4CXCN2FKIP79",
      link: "https://coursera.org/verify/4CXCN2FKIP79",
      icon: Trophy,
      color: "#00887A",
      priority: "high"
    },
    {
      title: "Frontend Development using React",
      issuer: "Coursera-board infinity",
      date: "Feb 23, 2025",
      credentialId: "3K5EQI7A7GS1",
      link: "https://coursera.org/verify/3K5EQI7A7GS1",
      icon: Star,
      color: "#77A6F7",
      priority: "high"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "May 29 2021",
      credentialId: "4RWV2K47MVX7",
      link: "https://coursera.org/verify/4RWV2K47MVX7",
      icon: Zap,
      color: "#FFCCBC",
      priority: "medium"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "July 14, 2024",
      credentialId: "df2678cc-59da-4a63-90ec-19ab60f7f118",
      link: "https://www.credly.com/badges/df2678cc-59da-4a63-90ec-19ab60f7f118/linked_in_profile",
      icon: Code,
      color: "#00887A",
      priority: "high"
    },

  ];


  return (

    <div className="about-container" id="about" style={{ background: 'linear-gradient(135deg, #D3E3FC 0%, #E8F2FF 100%)' }}>
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="blob blob-1" style={{ background: 'linear-gradient(45deg, #77A6F7, #00887A)' }}></div>
        <div className="blob blob-2" style={{ background: 'linear-gradient(45deg, #FFCCBC, #77A6F7)' }}></div>
        <div className="blob blob-3" style={{ background: 'linear-gradient(45deg, #00887A, #D3E3FC)' }}></div>
      </div>

      <div className="content-wrapper">
        {/* Header Section */}
        <div className={`header-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="main-title" style={{ background: 'linear-gradient(45deg, #00887A, #77A6F7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            About Me
          </h2>
          <div className="title-underline" style={{ background: 'linear-gradient(90deg, #00887A, #77A6F7)' }}></div>

          <div className="intro-grid">
            <div className="intro-text">
              <p className="intro-main">
                <span style={{
                  fontSize: '4rem',
                  fontWeight: '800',
                  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  animation: 'gradient 3s ease infinite',
                  marginRight: '0.3em'
                }}>Hi</span>, I’m
                <span className="name-highlight" style={{ color: 'black', fontWeight: '600' }}> Tushar Sohal</span>,

              </p>
              <p className="intro-sub">
                a curious developer who loves building digital experiences that are both functional and beautiful.
                With real-world exposure at IBM, BVICAM(Software Consultancy Development Cell), and TechMihirNaik, I’ve built everything from subscription systems to portfolio platforms using React, Node.js, and .NET. Whether it's designing intuitive UIs or creating efficient backend APIs, I thrive on turning ideas into working products.
              </p>

            </div>



            {/* Compact Stats */}
            <div className="stats-container">
              <div className="stats-card">
                <div className="stats-grid">
                   
                  <div className="stat-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #77A6F7, #77A6F7cc)' }}>
                      <Code className="icon" />
                    </div>
                    <div className="stat-number" style={{ color: '#77A6F7' }}>8+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #FFCCBC, #FFCCBCcc)' }}>
                      <Award className="icon" />
                    </div>
                    <div className="stat-number" style={{ color: '#FFCCBC' }}>3</div>
                    <div className="stat-label">Certs</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #00887A, #00887Acc)' }}>
                      <Coffee className="icon" />
                    </div>
                    <div className="stat-number" style={{ color: '#00887A' }}>∞</div>
                    <div className="stat-label">Coffee</div>
                  </div>

                </div>

                {/* Animated progress bar */}
                <div className="progress-container">
                  <div className="progress-bar" style={{ background: 'linear-gradient(90deg, #00887A, #77A6F7, #FFCCBC)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Experience Section */}
        <div className={`experience-section ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-icon" style={{ background: 'linear-gradient(45deg, #00887A, #77A6F7)' }}>
              <Briefcase className="icon-large" />
            </div>
            <h3 className="section-title">Professional Journey</h3>
          </div>

          <div className="experience-grid">
            {/* Experience Navigation */}
            <div className="experience-nav">
              <div className="nav-sticky">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`nav-button ${activeExperience === index ? 'active' : ''}`}
                    style={activeExperience === index ? { borderLeft: `4px solid ${exp.color}` } : {}}
                  >
                    <div className="nav-company">{exp.company}</div>
                    <div className="nav-role">{exp.role}</div>
                    <div className="nav-duration">{exp.duration}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="experience-details">
              <div className="details-container">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`experience-card ${activeExperience === index ? 'active' : ''}`}
                  >
                    <div className="card-border" style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}dd)` }}>
                      <div className="card-content">
                        <div className="card-header">
                          <div className="header-left">
                            <h4 className="role-title">{exp.role}</h4>
                            <h5 className="company-name">{exp.company}</h5>
                          </div>
                          <div className="header-right">
                            <div className="info-item">
                              <Calendar className="info-icon" />
                              <span className="info-text">{exp.duration}</span>
                            </div>
                            <div className="info-item">
                              <MapPin className="info-icon" />
                              <span className="info-text">{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="description">
                          {Array.isArray(exp.description) ? (
                            exp.description.map((point, index) => (
                              <p key={index}>• {point}</p>
                            ))
                          ) : (
                            <p>{exp.description}</p>
                          )}
                        </div>

                        <div className="achievements-section">
                          <h6 className="achievements-title">Key Achievements:</h6>
                          <div className="achievements-grid">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="achievement-item">
                                <div className="achievement-dot" style={{ background: `linear-gradient(45deg, ${exp.color}, #77A6F7)` }}></div>
                                <span className="achievement-text">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="technologies-section">
                          <h6 className="technologies-title">Technologies:</h6>
                          <div className="technologies-list">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="tech-tag"
                                style={{ background: `linear-gradient(45deg, ${exp.color}, ${exp.color}cc)` }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className={`certifications-section ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-icon pulse-glow" style={{ background: 'linear-gradient(45deg, #00887A, #77A6F7)' }}>
              <Award className="icon-large bounce-slow" />
            </div>
            <h3 className="section-title">Certifications & Achievements</h3>
            <div className="section-line shimmer"></div>
          </div>

          <div ref={certContainerRef} className="cert-container">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className={`cert-card ${cert.priority === 'high' ? 'high-priority' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Animated border */}
                  <div className="cert-border" style={{
                    background: `linear-gradient(45deg, ${cert.color}, #fff, ${cert.color})`,
                    backgroundSize: '400% 400%'
                  }}>
                    <div className="cert-border-inner"></div>
                  </div>

                  {/* Main content */}
                  <div className="cert-content">
                    <div className="cert-bg" style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)` }}></div>

                    {/* Animated sparkles */}
                    <div className="sparkles-container">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="sparkle"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${15 + i * 25}%`,
                            animationDelay: `${i * 0.6}s`
                          }}
                        >
                          <div className="sparkle-dot"></div>
                        </div>
                      ))}
                    </div>

                    <div className="cert-inner">
                      <div className="cert-header">
                        <div className="cert-icon">
                          <IconComponent className="cert-icon-svg" />
                        </div>
                        <div className="cert-meta">
                          <div className="cert-date fade-delayed">Issued {cert.date}</div>
                          <div className="cert-id fade-delayed">ID: {cert.credentialId}</div>
                        </div>
                      </div>

                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>

                      <a
                        href={cert.link}
                        className="cert-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Credential <ExternalLink className="link-icon" />
                      </a>
                    </div>

                    {/* Enhanced hover effects */}
                    <div className="cert-overlay"></div>
                    <div className="cert-line-top"></div>
                    <div className="cert-line-bottom"></div>
                  </div>

                  {/* 3D depth effect */}
                  <div className="cert-shadow"></div>
                </div>
              );
            })}
          </div>

          {/* Achievement counter animation */}
          {/* <div className="counter-section">
            <div className="counter-card float">
              <Trophy className="counter-icon spin-slow" />
              <span className="counter-number count-up" style={{color: '#00887A'}}>
                {certifications.length}
              </span>
              <span className="counter-text">
                Professional Certifications Earned
              </span>
              <Award className="counter-icon-right bounce-delayed" />
            </div>
          </div> */}
        </div>



      </div>
    </div>
  );
}

export default About;