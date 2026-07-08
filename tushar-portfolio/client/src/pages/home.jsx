import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Layers, Shield, Zap, Lock, Gauge, Server, Terminal, Database, Map, GitBranch, KeyRound } from 'lucide-react';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';
import '../styles/design-system.css';
import '../styles/home.css';

const trustSignals = [
  {
    Icon: Lock,
    title: 'JWT + RBAC + IAM auth in production',
    body: 'Refresh-token rotation and role-scoped access enforcing unit-level data isolation for 800+ users.',
  },
  {
    Icon: Map,
    title: 'GIS backend with PostGIS & GeoAlchemy2',
    body: 'Spatial services powering operational maps, reports, and dashboards from PostgreSQL.',
  },
  {
    Icon: Gauge,
    title: 'PostgreSQL tuned for scale',
    body: 'Joins, indexing, and recursive hierarchical queries that cut latency on large operational datasets.',
  },
  {
    Icon: Server,
    title: 'Shipped to defence-grade production',
    body: 'Redis caching, zero-downtime data migration, and schema versioning under strict deployment protocols.',
  },
];

const buildPrinciples = [
  {
    Icon: Layers,
    title: 'Layered REST Architecture',
    body: 'FastAPI and Node.js services with clean separation across routes, services, and data layers — each independently testable and versioned.',
  },
  {
    Icon: Shield,
    title: 'Security by Default',
    body: 'JWT with refresh rotation, RBAC, and IAM built in from the first commit — data isolation and least-privilege access, not bolted on later.',
  },
  {
    Icon: Zap,
    title: 'Engineered for Load',
    body: 'Indexed schemas, recursive CTEs, and a Redis cache layer so heavy queries and real workloads stay fast under pressure.',
  },
];

const engineeringChallenges = [
  {
    Icon: Database,
    tag: 'Query Optimization',
    title: 'Slow dashboards on large operational datasets',
    body: 'Rewrote hot read paths with targeted joins and indexing on high-cardinality columns, improving PostgreSQL response time and backend scalability under real load.',
    stack: ['PostgreSQL', 'Indexing', 'Joins'],
  },
  {
    Icon: GitBranch,
    tag: 'Recursive Queries',
    title: 'Deeply nested military command hierarchies',
    body: 'Modeled the org tree with recursive hierarchical queries so an entire command chain resolves in a single query instead of many application-level round trips.',
    stack: ['Recursive CTE', 'PostgreSQL', 'SQLAlchemy'],
  },
  {
    Icon: Gauge,
    tag: 'Caching',
    title: 'Repeated reads hammering the database',
    body: 'Introduced a Redis caching layer over stable reference and lookup data, reducing redundant DB hits and smoothing response times on dashboard endpoints.',
    stack: ['Redis', 'Cache Invalidation'],
  },
  {
    Icon: Map,
    tag: 'GIS Backend',
    title: 'Serving spatial data for operational maps',
    body: 'Built GIS-enabled services with PostGIS and GeoAlchemy2 to store and query geospatial geometries feeding maps, reports, and operational overlays.',
    stack: ['PostGIS', 'GeoAlchemy2', 'SQLAlchemy'],
  },
  {
    Icon: KeyRound,
    tag: 'Authentication',
    title: 'Secure, role-scoped access across a hierarchy',
    body: 'Implemented JWT with refresh-token rotation, RBAC, and IAM integration so every request is authenticated, scoped to a role, and isolated to its own unit.',
    stack: ['JWT', 'RBAC', 'IAM'],
  },
  {
    Icon: Server,
    tag: 'Production Migration',
    title: 'Evolving schema on a live defence platform',
    body: 'Executed production data migration and schema versioning while keeping the application stable — preserving data integrity in a defence-compliant environment.',
    stack: ['Migrations', 'Schema Versioning', 'PostgreSQL'],
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
              <span>Backend Engineer · FastAPI · Python · PostgreSQL</span>
            </motion.p>

            <motion.h1 className="hero-title" variants={staggerItem}>
              <span>Backend Engineer</span>
              <span>Secure REST APIs. Optimized databases. Production systems.</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={staggerItem}>
              I build production-grade backend systems for defence and
              enterprise applications — REST APIs, PostgreSQL/PostGIS
              optimization, JWT/RBAC auth, and Redis caching that hold up in
              real deployments.
            </motion.p>

            <motion.p className="hero-highlight-line" variants={staggerItem}>
              FastAPI • Python • PostgreSQL • PostGIS • SQLAlchemy • Redis • JWT • RBAC
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
              1+ year experience • Defence &amp; enterprise production systems •
              Secure backend architecture
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
                  <span><em>800+</em> users</span>
                  <span><em>PostGIS</em> GIS backend</span>
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
              Concrete backend work shipped to production — secure auth, GIS
              services, tuned databases, and deployments that hold up under
              real defence and enterprise workloads.
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

        <section className="chal-section" aria-label="Engineering challenges solved">
          <div className="chal-shell">
            <div className="chal-heading">
              <span className="chal-kicker">Engineering Challenges Solved</span>
              <h2 className="chal-title">Hard problems, shipped.</h2>
              <p className="chal-subtitle">
                Real backend problems I worked through in production — from
                database internals to secure auth and GIS. Each one is a decision
                that made the system faster, safer, or more scalable.
              </p>
            </div>

            <div className="chal-grid">
              {engineeringChallenges.map(({ Icon, tag, title, body, stack }) => (
                <article key={title} className="chal-card">
                  <div className="chal-card-top">
                    <span className="chal-card-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <span className="chal-card-tag">{tag}</span>
                  </div>
                  <h3 className="chal-card-title">{title}</h3>
                  <p className="chal-card-body">{body}</p>
                  <div className="chal-card-stack">
                    {stack.map((s) => (
                      <span key={s} className="chal-card-chip">{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
