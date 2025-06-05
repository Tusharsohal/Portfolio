import React, { useState, useEffect, useRef } from 'react';
import '../styles/home.css';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';


import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Download,
  ArrowRight,
  Terminal,
  BracesIcon as Braces,

  X,

  Heart
} from 'lucide-react';


function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [codeMode, setCodeMode] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [viewCount, setViewCount] = useState(1234);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);


  // Text animation for typing effect
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Full Stack Developer', 'MERN Stack Expert', 'ASP.NET Developer', 'Problem Solver', 'UI/UX Enthusiast', 'Web Developer'];

  // Inspirational quotes
  const quotes = [
    "Code is poetry written in logic.",
    "Code is not just instruction—it’s intuition rendered in algorithms.",
    "Lines of code are like brushstrokes on the canvas of innovation.",
    "Simplicity is the ultimate sophistication.",
    "Behind every line of code lies a story only logic can tell.",
    "Every bug is a lesson in disguise.",
    
  ];


  // Stats data
  // const stats = [
  //   { icon: Code, label: 'Projects', value: '50+' },
  //   { icon: Coffee, label: 'Coffee Cups', value: '∞' },
  //   { icon: Star, label: 'GitHub Stars', value: '500+' },
  //   { icon: Award, label: 'Years Exp', value: '3+' }
  // ];

  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Typing animation
    const currentText = texts[textIndex];
    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, textIndex, texts]);

  // Quote rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    if (!particlesEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = this.maxLife;
        }
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = '#00887A';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [particlesEnabled]);

  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // View counter increment
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [viewCount]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleEmailClick = async () => {
    const email = 'tusharsohal20@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setShowEmail(true);
      setTimeout(() => {
        setEmailCopied(false);
        setShowEmail(false);
      }, 3000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      setShowEmail(true);
      setTimeout(() => setShowEmail(false), 5000);
    }
  };

  const skills = [
    { name: 'Frontend', icon: Code, items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'], level: 90 },
    { name: 'Backend', icon: Server, items: ['.NET Core', 'Node.js', 'Express', 'RESTful APIs'], level: 85 },
    { name: 'Database', icon: Database, items: ['MongoDB', 'SQL Server', 'PostgreSQL'], level: 80 },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Progressive Web Apps'], level: 40 }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Tusharsohal', label: 'GitHub', color: '#333', type: 'link' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tushar-sohal-b70b661a2/', label: 'LinkedIn', color: '#0077B5', type: 'link' },
    { icon: Mail, href: '#', label: 'Email', color: '#EA4335', type: 'email' },
    // { icon: ExternalLink, href: '#', label: 'Portfolio', color: '#FF6B6B' }
  ];



  return (
    <div className="home-container">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        {/* Floating elements */}
        <div className="floating-elements">

          <div className="float-element float-2">🚀</div>
          <div className="float-element float-3">⚡</div>
          <div className="float-element float-4">🎯</div>
        </div>

        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="hero-left">


            <h1 className="hero-title">
              <span className="gradient-text">Tushar Sohal</span>
              <div className="title-decoration"></div>
            </h1>

            <div className="hero-subtitle">
              <span className="typing-text">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </div>

            <p className="hero-description">
              Passionate about creating innovative web solutions with modern technologies.
              Specialized in building scalable applications using MERN stack and .NET framework.
              Let's build something amazing together! ✨
            </p>

            {/* Quote Section */}
            <div className="quote-section">
              <div className="quote-mark">"</div>
              <p className="quote-text">{quotes[currentQuote]}</p>
            </div>

            {/* Stats */}
            {/* <div className="stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <stat.icon className="stat-icon" />
                  <div className="stat-info">
                     <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span> 
                  </div>
                </div>
              ))}
            </div> */}
            <br />
            <br /><br /><br />
          </div>

          {/* Right Side - Profile Image */}
          <div className="hero-right">
            <div className="profile-container">
              <div className="profile-image">
                <div className="profile-border">
                  <div className="profile-inner">
                    <span className="profile-text">TS</span>
                  </div>
                  <div className="profile-glow"></div>
                </div>
              </div>

              {/* Floating badges around image */}
              <div className="floating-badges">
                <div className="badge badge-1">React</div>
                <div className="badge badge-2">.NET</div>
                <div className="badge badge-3">Node</div>
                <div className="badge badge-4">MongoDB</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Full Width */}
        <div className="cta-section">
          <div className="cta-buttons">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              <span>View My Work</span>
              <ArrowRight className="btn-icon" />
            </button>
            <button className="btn-secondary">
              <Download className="btn-icon" />
              <span>Download Resume</span>
            </button>
            <button
              className="btn-tertiary"
              onClick={() => setCodeMode(!codeMode)}
            >
              <Terminal className="btn-icon" />
              <span>{codeMode ? 'Exit' : 'Enter'} Dev Mode</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links">
            {socialLinks.map((social, index) => (
              social.type === 'email' ? (
                <button
                  key={index}
                  onClick={handleEmailClick}
                  className="social-link social-button"
                  aria-label={social.label}
                  style={{ '--social-color': social.color }}
                >
                  <social.icon className="social-icon" />
                  <span className="social-tooltip">{social.label}</span>
                </button>
              ) : (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  style={{ '--social-color': social.color }}
                >
                  <social.icon className="social-icon" />
                  <span className="social-tooltip">{social.label}</span>
                </a>
              )
            ))}
          </div>
        </div>

        {/* Skills Preview */}
        <div className="skills-section">
          <h3 className="skills-title">Technical Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-bar"
                    style={{ '--progress': `${skill.level}%` }}
                  ></div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-items">
                  {skill.items.slice(0, 5).map((item, idx) => (
                    <span key={idx} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="scroll-indicator"
        >
          <ChevronDown className="scroll-icon" />
          <span className="scroll-text">Scroll to explore</span>
        </button>
      </section>

      {/* Code Mode Overlay */}
      {codeMode && (
        <div className="code-overlay">
          <div className="code-window">
            <div className="code-header">
              <div className="code-controls">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <span className="code-title">~/portfolio/developer-mode</span>
              <button
                className="code-close"
                onClick={() => setCodeMode(false)}
              >
                <X size={16} />
              </button>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-comment">// Welcome to Developer Mode! 🚀</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name</span>: <span className="code-string">'Tushar Sohal'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">role</span>: <span className="code-string">'Software Developer'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">experience</span>: <span className="code-number">Fresher</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Express.js'</span>, <span className="code-string">'MongoDB'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'ASP.net MVC'</span>, <span className="code-string">'SQL'</span>],
              </div>
              <div className="code-line code-indent">
                <span className="code-property">passion</span>: <span className="code-string">'Building awesome apps'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">currentStatus</span>: <span className="code-string">'Available for hire'</span>
              </div>
              <div className="code-line">{'}'}</div>
              <div className="code-line"></div>
              <div className="code-line">
                <span className="code-keyword">console</span>.<span className="code-method">log</span>(<span className="code-string">'Let\'s build something amazing together!'</span>);
              </div>
              <div className="code-line">
                <span className="code-comment">// Ready to collaborate? Let's connect! 💻</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <About />
      <Projects />
      <Contact />

      {/* Love indicator */}
      <div className="love-indicator">
        Made with <Heart className="heart-icon" /> by Tushar
      </div>

      {/* Email Notification */}
      {showEmail && (
        <div className="email-notification">
          <div className="email-content">
            <Mail className="email-icon" />
            <div className="email-text">
              <span className="email-address">tusharsohal20@gmail</span>
              {emailCopied && <span className="email-copied">✓ Copied to clipboard!</span>}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

export default Home;