import React, { useState, useEffect, useRef } from 'react';
import { Target, ExternalLink, Github, Lock, ArrowUpRight } from 'lucide-react';
import './projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      index: '01',
      company: 'UPSALA DefSol — Indian Army',
      title: 'Defence Intelligence & Operations Platform',
      outcome:
        'Production platform deployed at the <strong>Indian Army PMO office</strong> — managing sensitive multi-unit operational data with zero cross-unit leakage under defence-compliant protocols.',
      architecture:
        'Multi-tier RBAC · Unit-level data isolation · Hierarchical approval chain · Real-time operational maps · PostgreSQL optimised',
      highlight:
        'Designed a hierarchical approval workflow where actions initiated at field level escalate upward through command tiers before execution — enforced at the API layer, not just the UI.',
      environment: 'Indian Army · Controlled Deployment',
      tech: ['FastAPI', 'PostgreSQL', 'Python', 'JWT', 'RBAC', 'Angular', 'Next.js'],
      security: true,
      restricted: true,
      type: 'Production',
      featured: true,
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      index: '02',
      company: 'The Kapda Company — Personal Project',
      title: 'Customisable Apparel E-Commerce Platform',
      outcome:
        'Fully live platform for buying and <strong>customising oversized tees & hoodies</strong> — 4-role RBAC end-to-end, Razorpay payments, email order flows, and product customisation engine.',
      architecture:
        'JWT · 4-role RBAC · Razorpay · Email notifications · Product customisation · Swagger API docs',
      highlight:
        '4 roles fully working end-to-end: Admin (platform control), Designer (content & onboarding), Brand/Seller (commerce & fulfilment), Customer (shop & customise).',
      environment: 'Live · kapdaco.vercel.app',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Razorpay', 'Tailwind CSS'],
      security: true,
      restricted: false,
      type: 'Personal · Live',
      featured: false,
      liveUrl: 'https://kapdaco.vercel.app',
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
    {
      id: 3,
      index: '03',
      company: 'Lord Krishna Convent School',
      title: 'Library Management System — Desktop',
      outcome:
        'Cut manual administrative effort by <strong>~85%</strong> — automating book issuance, returns, overdue fine calculation, and bulk Excel import/export via SheetJS.',
      architecture:
        'Electron.js shell · React.js · Node.js/Express.js · Normalised SQLite · SheetJS bulk import/export',
      highlight:
        'Designed end-to-end in Figma, then shipped as a working desktop app — full Figma-to-production pipeline delivered as a freelance project.',
      environment: 'Institutional · LKCS Gurugram',
      tech: ['Electron.js', 'React.js', 'Node.js', 'SQLite', 'SheetJS', 'Figma'],
      security: false,
      restricted: false,
      type: 'Freelance',
      featured: false,
      liveUrl: null,
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
    {
      id: 4,
      index: '04',
      company: 'Lord Krishna Convent School',
      title: 'School Website & Management Platform',
      outcome:
        'Production platform serving <strong>1,000+ daily users</strong> — with role-based access for staff, librarians, and admins; page load times reduced by ~35% post-optimisation.',
      architecture:
        'MERN stack · Cloudinary media · MongoDB Atlas · Vercel + Render · GoDaddy domain',
      highlight:
        'Optimised MongoDB queries and backend APIs reducing page load by ~35%. Live in production with zero downtime since launch.',
      environment: 'Production · lordkrishnaconventschool.com',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Vercel'],
      security: false,
      restricted: false,
      type: 'Production',
      featured: false,
      liveUrl: 'https://lordkrishnaconventschool.com',
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
  ];

  const requestCaseStudy = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featured = projects.find(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="pj-root" ref={sectionRef}>

      <div className="pj-grain"      aria-hidden="true" />
      <div className="pj-ghost-word" aria-hidden="true">WORK</div>
      <div className="pj-deco-line"  aria-hidden="true" />

      {/* Section label */}
      <div className={`pj-section-label ${isVisible ? 'pj-visible' : ''}`}>
        <span className="pj-label-num">03</span>
        <span className="pj-label-line" />
        <span className="pj-label-text">Selected Work</span>
      </div>

      {/* Heading */}
      <div className={`pj-heading-row ${isVisible ? 'pj-visible' : ''}`}>
        <h2 className="pj-heading">
          <span className="pj-heading-solid">Things I've</span>
          <span className="pj-heading-italic"> shipped.</span>
        </h2>
        <p className="pj-sub">
          Defence-grade systems, live e-commerce, and institutional tools —
          every project in production, every metric real.
        </p>
      </div>

      {/* ── FEATURED CARD — Defence platform ── */}
      {featured && (
        <article
          className={`pj-card pj-card--featured ${featured.restricted ? 'pj-card--restricted' : ''} ${isVisible ? 'pj-visible' : ''} ${hoveredId === featured.id ? 'pj-card--hovered' : ''}`}
          onMouseEnter={() => setHoveredId(featured.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="pj-featured-inner">

            {/* Left */}
            <div className="pj-featured-left">
              <div className="pj-card-top">
                <span className="pj-card-index">{featured.index}</span>
                <div className="pj-card-badges">
                  <span className="pj-type-badge">{featured.type}</span>
                  {featured.security && (
                    <span className="pj-secure-badge"><Target size={10} /> Secure</span>
                  )}
                  {featured.restricted && (
                    <span className="pj-restricted-badge"><Lock size={10} /> Restricted</span>
                  )}
                </div>
              </div>

              <p className="pj-company">{featured.company}</p>
              <h3 className="pj-title pj-title--featured">{featured.title}</h3>

              <div className="pj-featured-highlight">
                <span className="pj-highlight-bar" />
                <p>{featured.highlight}</p>
              </div>

              <div className="pj-tech-list">
                {featured.tech.map((t, j) => (
                  <span key={j} className="pj-tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="pj-featured-right">
              <p
                className="pj-outcome"
                dangerouslySetInnerHTML={{ __html: featured.outcome }}
              />
              <p className="pj-arch">{featured.architecture}</p>
              <div className="pj-actions pj-actions--featured">
                <button
                  type="button"
                  className="pj-btn pj-btn--ghost"
                  onClick={requestCaseStudy}
                >
                  Request Case Study <ArrowUpRight size={13} />
                </button>
                <span className="pj-env-tag">{featured.environment}</span>
              </div>
            </div>

          </div>

          <span className="pj-big-index" aria-hidden="true">{featured.index}</span>
          <div  className="pj-corner"    aria-hidden="true" />
        </article>
      )}

      {/* ── 3-CARD GRID ── */}
      <div className={`pj-grid ${isVisible ? 'pj-visible' : ''}`}>
        {rest.map((project, i) => (
          <article
            key={project.id}
            className={`pj-card ${hoveredId === project.id ? 'pj-card--hovered' : ''}`}
            style={{ transitionDelay: `${i * 90}ms` }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div  className="pj-stripe"    aria-hidden="true" />
            <span className="pj-big-index" aria-hidden="true">{project.index}</span>

            <div className="pj-card-top">
              <span className="pj-card-index">{project.index}</span>
              <div className="pj-card-badges">
                <span className="pj-type-badge">{project.type}</span>
                {project.security && (
                  <span className="pj-secure-badge"><Target size={10} /> Secure</span>
                )}
              </div>
            </div>

            <p className="pj-company">{project.company}</p>
            <h3 className="pj-title">{project.title}</h3>
            <p
              className="pj-outcome"
              dangerouslySetInnerHTML={{ __html: project.outcome }}
            />
            <p className="pj-arch">{project.architecture}</p>

            <div className="pj-divider" />

            <div className="pj-tech-list">
              {project.tech.map((t, j) => (
                <span key={j} className="pj-tech-tag">{t}</span>
              ))}
            </div>

            <div className="pj-actions">
              <div className="pj-action-row">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pj-btn pj-btn--solid"
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pj-btn pj-btn--ghost"
                  >
                    <Github size={13} /> GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="pj-corner" aria-hidden="true" />
          </article>
        ))}
      </div>

    </section>
  );
}

export default Projects;
