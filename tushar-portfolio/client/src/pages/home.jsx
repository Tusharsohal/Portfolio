import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import About    from '../components/about';
import Projects from '../components/projects';
import Skills   from '../components/skills';
import Contact  from '../components/contact';
import '../styles/design-system.css';
import '../styles/home.css';

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth  - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 6,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const stack = ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'RBAC', 'JWT'];

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  });

  const fadeRight = (delay = 0) => ({
    initial:    { opacity: 0, x: 36 },
    animate:    { opacity: 1, x: 0 },
    transition: { duration: 0.9,  ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <div className="home-container">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <header id="hero" className="hero-section">

        {/* grain + blobs */}
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-blob hero-blob--a" aria-hidden="true" />
        <div className="hero-blob hero-blob--b" aria-hidden="true" />

        {/* vertical label */}
        <motion.div className="hero-vert-label" {...fadeUp(0.1)}>
          <span>Full-Stack Developer</span>
          <span className="vert-line" />
          <span>2025</span>
        </motion.div>

        <div className="hero-wrapper">

          {/* ── LEFT ── */}
          <div className="hero-left">

            {/* eyebrow */}
            <motion.div className="hero-eyebrow" {...fadeUp(0.15)}>
              <span className="eyebrow-dot" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* name block */}
            <motion.h1 className="hero-name" {...fadeUp(0.25)}>
              <span className="name-hi">Hi, I'm</span>
              <span className="name-main">Tushar</span>
              <span className="name-role">
                Backend-first <em>full-stack</em><br />developer.
              </span>
            </motion.h1>

            {/* subtitle */}
            <motion.p className="hero-subtitle" {...fadeUp(0.38)}>
              Currently building defence-grade systems for the Indian Army
              at UPSALA DefSol. Previously shipped production platforms at
              LKCS (1,000+ daily users) and a live payment system for a
              Springer Nature journal.
            </motion.p>

            {/* tech stack */}
            <motion.div className="hero-stack" {...fadeUp(0.48)}>
              {stack.map((t, i) => (
                <span
                  key={t}
                  className="stack-pill"
                  style={{ animationDelay: `${0.5 + i * 0.06}s` }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="hero-cta" {...fadeUp(0.56)}>
              <button
                className="cta-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span className="cta-label">View Projects</span>
                <span className="cta-arrow">↗</span>
                <span className="cta-fill" />
              </button>

              <button
                className="cta-ghost"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </button>
            </motion.div>

          </div>

          {/* ── VERTICAL DIVIDER ── */}
          <motion.div
            className="hero-divider"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22,1,0.36,1], delay: 0.4 }}
            aria-hidden="true"
          />

          {/* ── RIGHT — image ── */}
          <motion.div className="hero-right" {...fadeRight(0.3)}>

            {/* section counter — top of right column */}
            <div className="hero-counter" aria-hidden="true">
              <span className="counter-num">01</span>
              <span className="counter-line" />
              <span className="counter-label">Hero</span>
            </div>

            {/* parallax frame */}
            <motion.div
              className="image-frame"
              animate={{ x: mousePos.x, y: mousePos.y }}
              transition={{ type: 'spring', stiffness: 55, damping: 20 }}
            >
              {/* editorial badge — top right */}
              <motion.div
                className="image-badge"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <span className="badge-num">1yr+</span>
                <span className="badge-label">Prod<br />Exp</span>
              </motion.div>

              <div className="image-inner">
                <img src="/hero1.png" alt="Tushar Sohal" />
                {/* editorial colour overlay — blends photo into palette */}
                <div className="image-overlay" />
                <div className="image-tint"   aria-hidden="true" />
              </div>

              {/* corner accents — all four corners */}
              <div className="frame-corner frame-corner--tl" />
              <div className="frame-corner frame-corner--tr" />
              <div className="frame-corner frame-corner--bl" />
              <div className="frame-corner frame-corner--br" />

              {/* bottom caption strip */}
              <div className="image-caption">
                <span>Tushar Sohal</span>
                <span className="caption-sep">·</span>
                <span>New Delhi</span>
              </div>
            </motion.div>

            {/* scroll hint */}
            <motion.button
              className="scroll-hint"
              onClick={() => scrollToSection('about')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <span className="scroll-text">Scroll</span>
              <span className="scroll-line" />
            </motion.button>

          </motion.div>

        </div>

        {/* marquee ticker */}
        <motion.div
          className="hero-marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="marquee-track">
            {[
              'React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB',
              'JWT', 'RBAC', 'REST APIs', 'System Design', 'Angular',
              'Python', 'Electron.js', 'Swagger', 'Express.js', 'MySQL',
              'React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB',
              'JWT', 'RBAC', 'REST APIs', 'System Design', 'Angular',
              'Python', 'Electron.js', 'Swagger', 'Express.js', 'MySQL',
            ].map((t, i) => (
              <span key={i} className="marquee-item">
                {t} <span className="marquee-dot">·</span>
              </span>
            ))}
          </div>
        </motion.div>

      </header>

      {/* ══ OTHER SECTIONS ════════════════════════════════════ */}
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
