import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Layers, Shield, Zap, Lock, Gauge, Network, Server, Terminal } from 'lucide-react';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';
import '../styles/design-system.css';
import '../styles/home.css';

const trustSignals = [
  {
    Icon: Lock,
    title: 'RBAC-based access control implemented',
    body: 'Secure permissions for protected workflows and multi-role products.',
  },
  {
    Icon: Gauge,
    title: 'Optimized APIs for large-scale datasets',
    body: 'Performance-focused backend paths for heavy queries and real workloads.',
  },
  {
    Icon: Network,
    title: 'Handled hierarchical data in multi-level systems',
    body: 'Authorization, approvals, and structured data flow across layered systems.',
  },
  {
    Icon: Server,
    title: 'Built production-ready backend systems',
    body: 'Node.js and Python systems designed for security, scale, and maintainability.',
  },
];

const buildPrinciples = [
  {
    Icon: Layers,
    title: 'Layered Architecture',
    body: 'REST APIs with clear separation across routes, controllers, services, and data layers — each layer independently testable.',
  },
  {
    Icon: Shield,
    title: 'Security First',
    body: 'JWT auth, input validation, rate limiting, and role-based access control built in from day one — not bolted on later.',
  },
  {
    Icon: Zap,
    title: 'Built to Scale',
    body: 'Indexed databases, efficient query patterns, and stateless API design so the system handles load without surprises.',
  },
];

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const heroStyle = useMemo(
    () =>
      ({
        '--spotlight-x': `${mousePos.x}px`,
        '--spotlight-y': `${mousePos.y}px`,
      }),
    [mousePos.x, mousePos.y]
  );

  const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 38 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  });

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="home-container">
      <header id="hero" className="hero-section" style={heroStyle}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-orb hero-orb--top" aria-hidden="true" />
        <div className="hero-orb hero-orb--bottom" aria-hidden="true" />

        <div className="hero-wrapper">
          <motion.div
            className="hero-left"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="hero-eyebrow" variants={staggerItem}>
              <span className="eyebrow-dot" />
              <span>Available for backend-focused roles</span>
            </motion.div>

            <motion.div className="hero-terminal-line" variants={staggerItem}>
              <span className="hero-term-prompt">~/portfolio</span>
              <span className="hero-term-arrow">$</span>
              <span className="hero-term-cmd">whoami</span>
              <span className="hero-term-caret" aria-hidden="true" />
            </motion.div>

            <motion.p className="hero-kicker" variants={staggerItem}>
              <Terminal size={12} strokeWidth={2} className="hero-kicker-icon" aria-hidden="true" />
              <span>Backend Engineer · Node.js · Python</span>
            </motion.p>

            <motion.h1 className="hero-title" variants={staggerItem}>
              <span>Backend Developer</span>
              <span>Scalable systems. Secure APIs. Real-world performance.</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={staggerItem}>
              Building production-ready APIs with Node.js &amp; Python, focused
              on performance, caching, and secure system design.
            </motion.p>

            <motion.p className="hero-highlight-line" variants={staggerItem}>
              Node.js • Python • FastAPI • PostgreSQL • Redis • Docker • RBAC
            </motion.p>

            <motion.div className="hero-cta" variants={staggerItem}>
              <motion.button
                className="cta-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              >
                View Projects
              </motion.button>

              <motion.button
                className="cta-secondary"
                onClick={() => window.open('/Tushar_Sohal_resume.pdf', '_blank')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              >
                Download Resume
              </motion.button>

              <motion.button
                className="cta-tertiary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div className="hero-social-row" variants={staggerItem}>
              <a
                href="https://github.com/Tusharsohal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tushar-sohal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:tusharsohal20@gmail.com"
                aria-label="Send email"
              >
                <Mail size={18} />
              </a>
            </motion.div>

            <motion.p className="hero-credibility" variants={staggerItem}>
              1+ year experience • Built production-ready systems •
              Performance-focused
            </motion.p>
          </motion.div>

          <motion.div className="hero-right" {...fadeRight(0.32)}>
            <span className="hero-code-deco hero-code-deco--top" aria-hidden="true">
              {'// engineer.profile'}
            </span>

            <div className="hero-photo-wrap">
              <div className="hero-ide-shell">
                <div className="hero-ide-chrome" aria-hidden="true">
                  <div className="hero-ide-dots">
                    <span className="hero-ide-dot hero-ide-dot--r" />
                    <span className="hero-ide-dot hero-ide-dot--y" />
                    <span className="hero-ide-dot hero-ide-dot--g" />
                  </div>
                  <span className="hero-ide-file">tushar.dev — engineer.tsx</span>
                  <span className="hero-ide-branch">
                    <span className="hero-ide-branch-icon">⎇</span> main
                  </span>
                </div>

                <div className="hero-photo-frame">
                  <img
                    src="/hero_img.jpeg"
                    alt="Tushar Sohal — Backend Engineer"
                    className="hero-photo"
                    loading="eager"
                  />
                </div>
              </div>

              <motion.div
                className="hero-status-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              >
                <div className="hero-status-row">
                  <span className="hero-status-pulse" aria-hidden="true" />
                  <span className="hero-status-label">Currently shipping</span>
                </div>
                <strong className="hero-status-value">Defence Intelligence Platform</strong>
                <div className="hero-status-metrics">
                  <span><em>120ms</em> p95 API</span>
                  <span><em>99.9%</em> uptime</span>
                </div>
              </motion.div>

              <span className="hero-code-deco hero-code-deco--bottom" aria-hidden="true">
                {'<engineer />'}
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="trust-section" aria-label="Proven engineering impact">
        <div className="trust-shell">
          <div className="trust-heading-block">
            <span className="trust-kicker">Trust Layer</span>
            <h2 className="trust-title">Proven Engineering Impact</h2>
            <p className="trust-subtitle">
              Built for recruiters who want fast proof: secure systems,
              production delivery, and backend decisions that hold up in real use.
            </p>
          </div>

          <div className="trust-grid">
            {trustSignals.map(({ Icon, title, body }) => (
              <article key={title} className="trust-card">
                <span className="trust-card-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="systems-section" aria-label="How I build systems">
        <div className="systems-shell">
          <div className="systems-heading">
            <span className="systems-kicker">System Thinking</span>
            <h2>How I Build Systems</h2>
          </div>
          <div className="systems-grid systems-grid--icons">
            {buildPrinciples.map(({ Icon, title, body }) => (
              <div key={title} className="systems-item systems-item--icon">
                <span className="systems-item-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="systems-item-title">{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <main>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
