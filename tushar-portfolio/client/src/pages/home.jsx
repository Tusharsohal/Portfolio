import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';
import '../styles/design-system.css';
import '../styles/home.css';

const typingLines = [
  'Building scalable APIs...',
  'Optimizing database queries...',
  'Deploying production systems...',
];

const terminalMetrics = [
  { label: 'Latency', value: '120ms avg' },
  { label: 'Auth', value: 'JWT + RBAC' },
  { label: 'Caching', value: 'Redis Active' },
];

const trustSignals = [
  {
    title: 'RBAC-based access control implemented',
    body: 'Secure permissions for protected workflows and multi-role products.',
  },
  {
    title: 'Optimized APIs for large-scale datasets',
    body: 'Performance-focused backend paths for heavy queries and real workloads.',
  },
  {
    title: 'Handled hierarchical data in multi-level systems',
    body: 'Authorization, approvals, and structured data flow across layered systems.',
  },
  {
    title: 'Built production-ready backend systems',
    body: 'Node.js and Python systems designed for security, scale, and maintainability.',
  },
];

const systemPrinciples = [
  'Design APIs with scalability and performance in mind',
  'Optimize database queries for large datasets',
  'Implement secure authentication and RBAC',
  'Ensure clean architecture and maintainable code',
];

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [activeLine, setActiveLine] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  useEffect(() => {
    const currentLine = typingLines[activeLine];
    const isComplete = typedText === currentLine;
    const isEmpty = typedText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setTypedText(currentLine.slice(0, typedText.length + 1));
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isEmpty) {
          setTypedText(currentLine.slice(0, typedText.length - 1));
          return;
        }

        setIsDeleting(false);
        setActiveLine((prev) => (prev + 1) % typingLines.length);
      },
      !isDeleting && isComplete ? 1300 : isDeleting ? 35 : 70
    );

    return () => window.clearTimeout(timeout);
  }, [activeLine, isDeleting, typedText]);

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

            <motion.p className="hero-kicker" variants={staggerItem}>
              Backend Engineer • Node.js • Python
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

            <motion.p className="hero-credibility" variants={staggerItem}>
              1+ year experience • Built production-ready systems •
              Performance-focused
            </motion.p>
          </motion.div>

          <motion.div className="hero-right" {...fadeRight(0.32)}>
            <motion.div
              className="terminal-shell"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              <motion.div
                className="terminal-shell-inner"
              animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="terminal-header">
                  <div className="terminal-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="terminal-title">backend-session.tsx</span>
                </div>

                <div className="terminal-body">
                  <div className="terminal-line terminal-line--muted">
                    <span className="prompt-symbol">$</span>
                    <span>node deploy-service.js --env production</span>
                  </div>

                  <div className="terminal-line">
                    <span className="prompt-symbol">&gt;</span>
                    <span>{typedText}</span>
                    <span className="typing-caret" aria-hidden="true" />
                  </div>

                  <div className="terminal-snippet">
                    <span className="code-keyword">const</span> optimize ={' '}
                    <span className="code-keyword">async</span> () =&gt; {'{'}
                    <br />
                    <span className="code-indent">
                      <span className="code-keyword">return</span> await
                      redisCache(apiResponse);
                    </span>
                    <br />
                    {'};'}
                  </div>

                  <div className="terminal-status">
                    <div className="status-row">
                      <span>GET /api/v1/users</span>
                      <strong className="status-value status-value--live">120ms</strong>
                    </div>
                    <div className="status-row">
                      <span>Cache Layer</span>
                      <strong>Redis OK</strong>
                    </div>
                    <div className="status-row">
                      <span>Database</span>
                      <strong>PostgreSQL Live</strong>
                    </div>
                  </div>

                  <div className="terminal-metrics">
                    {terminalMetrics.map((metric) => (
                      <div key={metric.label} className="metric-card">
                        <span className="metric-label">{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="floating-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, 12, 0], rotate: [0, -1.2, 0] }}
              transition={{
                opacity: { delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                x: { delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <span className="floating-label">Service Health</span>
              <strong>99.9% uptime mindset</strong>
              <p>API to cache to database, with secure auth and performance-first decisions.</p>
            </motion.div>
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
            {trustSignals.map((signal) => (
              <article key={signal.title} className="trust-card">
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
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
          <div className="systems-grid">
            {systemPrinciples.map((item, index) => (
              <div key={item} className="systems-item">
                <span className="systems-item-mark">{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
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
