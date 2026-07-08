import React, { useState, useEffect, useRef } from 'react';
import {
  Target,
  ExternalLink,
  Github,
  Lock,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
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
      company: 'UPSALA — Defence & Intelligence',
      title: 'Defence-Grade Intelligence Platform',
      problem:
        'A defence intelligence platform needed secure, role-scoped REST APIs and GIS data serving 800+ users across a strict military hierarchy — with zero cross-unit data leakage.',
      summary:
        'Owned the backend: secure REST APIs, JWT/RBAC/IAM authentication, PostGIS-backed GIS services, and tuned PostgreSQL — deployed under defence-compliant production protocols.',
      label: 'Backend System • 800+ Users • Secure Environment',
      bullets: [
        'Developed secure REST APIs with JWT, refresh tokens, RBAC, and IAM enforcing strict unit-level data isolation.',
        'Built GIS-enabled backend services with PostGIS, SQLAlchemy, and GeoAlchemy2 for dashboards, reports, and operational mapping.',
        'Optimized PostgreSQL using joins, indexing, and recursive hierarchical queries to improve scalability and response time.',
        'Implemented Redis caching and executed production data migration with schema versioning while keeping the system stable.',
      ],
      proof: [
        '800+ users served',
        'Unit-level data isolation',
        'PostGIS GIS backend',
        'Defence-grade deployment',
      ],
      techLabel: 'Tech: FastAPI, Python, PostgreSQL, PostGIS, SQLAlchemy, GeoAlchemy2, Redis, JWT, RBAC',
      tech: ['FastAPI', 'Python', 'PostgreSQL', 'PostGIS', 'SQLAlchemy', 'GeoAlchemy2', 'Redis', 'JWT', 'RBAC'],
      security: true,
      restricted: true,
      type: 'Production',
      featured: true,
      environment: 'Defence · Controlled Deployment',
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      index: '02',
      company: 'The Kapda Company',
      title: 'Multi-Role Custom Apparel Platform',
      problem:
        'A custom-apparel store needed one platform serving four different roles — customers, sellers, designers, and admins — with real payments and product personalization.',
      summary:
        'Designed and built a multi-role e-commerce backend: REST APIs for catalog and orders, RBAC across all four roles, Razorpay payments, and a dynamic product customization engine.',
      label: 'Multi-role System • RBAC • Payment Integration',
      bullets: [
        'Built REST APIs for authentication, product catalog, order management, and user administration.',
        'Implemented Role-Based Access Control across customer, seller, designer, and admin roles.',
        'Integrated the Razorpay payment gateway for production-ready payment flows.',
        'Developed dynamic product customization letting users personalize apparel with images and text.',
      ],
      proof: [
        '4-role RBAC',
        'Razorpay integrated',
        'Live deployment',
        'Custom product engine',
      ],
      techLabel: 'Tech: Node.js, Express, PostgreSQL, JWT, Razorpay, React',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Razorpay'],
      security: true,
      restricted: false,
      type: 'Live',
      featured: false,
      environment: 'Live · kapdaco.vercel.app',
      liveUrl: 'https://kapdaco.vercel.app',
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
    {
      id: 3,
      index: '03',
      company: 'Lord Krishna Convent School',
      title: 'School Management Platform (ERP)',
      problem:
        'Lord Krishna Convent School ran operations by hand with no unified system for students, events, enquiries, and public content across 1,000+ users.',
      summary:
        'Designed, built, and deployed a full-stack school management ERP with secure role-based access and backend APIs for every operational workflow.',
      label: 'Production ERP • 1,000+ Users • Role-Based Access',
      bullets: [
        'Developed backend APIs for student management, events, enquiries, complaints, and content management.',
        'Implemented secure role-based access for staff, librarians, and administrators.',
        'Optimized backend APIs for improved responsiveness across operational dashboards.',
        'Deployed and maintained a live production platform serving 1,000+ users.',
      ],
      proof: [
        '1,000+ users',
        'Role-based access',
        'Deployed & live',
        'Backend ERP APIs',
      ],
      techLabel: 'Tech: Node.js, Express, MongoDB, Cloudinary, React, Vercel',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Vercel'],
      security: false,
      restricted: false,
      type: 'Deployed',
      featured: false,
      environment: 'Production · lordkrishnaconventschool.com',
      liveUrl: 'https://lordkrishnaconventschool.com',
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
    {
      id: 4,
      index: '04',
      company: 'Lord Krishna Convent School',
      title: 'Library Management Desktop App',
      problem:
        'The school library was run by hand — issuance, returns, inventory, and fines all tracked on paper and spreadsheets, costing hours of manual admin work.',
      summary:
        'Built and deployed a Java desktop application that automated the full library workflow, cutting manual administrative effort by approximately 85%.',
      label: 'Java Desktop App • Automation • Deployed',
      bullets: [
        'Designed, developed, and deployed a Java desktop application to manage inventory, book issuance, returns, and fine calculation.',
        'Implemented Excel import/export for bulk record management and automated administrative workflows.',
        'Reduced manual administrative effort by approximately 85% through end-to-end workflow automation.',
        'Delivered as a deployed application used in daily school library operations.',
      ],
      proof: [
        '85% admin effort cut',
        'Java desktop app',
        'Excel bulk import/export',
        'Deployed & in use',
      ],
      techLabel: 'Tech: Java, Swing, SQLite, Apache POI',
      tech: ['Java', 'Swing', 'SQLite', 'Apache POI'],
      security: false,
      restricted: false,
      type: 'Deployed',
      featured: false,
      environment: 'Institutional · LKCS Gurugram',
      liveUrl: null,
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
  ];

  const requestCaseStudy = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="pj-root" ref={sectionRef}>
      <div className="pj-grain" aria-hidden="true" />
      <div className="pj-ghost-word" aria-hidden="true">WORK</div>
      <div className="pj-deco-line" aria-hidden="true" />

      <div className={`pj-section-label ${isVisible ? 'pj-visible' : ''}`}>
        <span className="pj-label-num">03</span>
        <span className="pj-label-line" />
        <span className="pj-label-text">Selected Work</span>
      </div>

      <div className={`pj-heading-row ${isVisible ? 'pj-visible' : ''}`}>
        <h2 className="pj-heading">
          <span className="pj-heading-solid">Proof of</span>
          <span className="pj-heading-italic"> execution.</span>
        </h2>
        <p className="pj-sub">
          Each project as an engineering case study — the problem, the approach,
          how it was built, and what shipped. Backend systems and production
          deployments, not marketing copy.
        </p>
      </div>

      {featured && (
        <article
          className={`pj-card pj-card--featured ${featured.restricted ? 'pj-card--restricted' : ''} ${isVisible ? 'pj-visible' : ''} ${hoveredId === featured.id ? 'pj-card--hovered' : ''}`}
          onMouseEnter={() => setHoveredId(featured.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="pj-featured-inner">
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
              <p className="pj-classifier">{featured.label}</p>

              {featured.problem && (
                <div className="pj-case">
                  <span className="pj-case-label">Problem</span>
                  <p className="pj-case-text">{featured.problem}</p>
                </div>
              )}
              <div className="pj-case">
                <span className="pj-case-label pj-case-label--accent">Approach</span>
                <p className="pj-summary pj-summary--featured">{featured.summary}</p>
              </div>

              <span className="pj-case-label">Outcomes</span>
              <div className="pj-proof-list pj-proof-list--featured">
                {featured.proof.map((item) => (
                  <span key={item} className="pj-proof-pill">{item}</span>
                ))}
              </div>

              <div className="pj-tech-list">
                {featured.tech.map((t) => (
                  <span key={t} className="pj-tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="pj-featured-right">
              <span className="pj-case-label">Implementation</span>
              <ul className="pj-bullet-list">
                {featured.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={14} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="pj-arch">{featured.techLabel}</p>
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
          <div className="pj-corner" aria-hidden="true" />
        </article>
      )}

      <div className={`pj-grid ${isVisible ? 'pj-visible' : ''}`}>
        {rest.map((project, i) => (
          <article
            key={project.id}
            className={`pj-card ${hoveredId === project.id ? 'pj-card--hovered' : ''}`}
            style={{ transitionDelay: `${i * 90}ms` }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="pj-stripe" aria-hidden="true" />
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
            <p className="pj-classifier">{project.label}</p>

            {project.problem && (
              <div className="pj-case">
                <span className="pj-case-label">Problem</span>
                <p className="pj-case-text">{project.problem}</p>
              </div>
            )}
            <div className="pj-case">
              <span className="pj-case-label pj-case-label--accent">Approach</span>
              <p className="pj-summary">{project.summary}</p>
            </div>

            <span className="pj-case-label">Outcomes</span>
            <div className="pj-proof-list">
              {project.proof.map((item) => (
                <span key={item} className="pj-proof-pill">{item}</span>
              ))}
            </div>

            <span className="pj-case-label">Implementation</span>
            <ul className="pj-bullet-list">
              {project.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckCircle2 size={14} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="pj-arch">{project.techLabel}</p>

            <div className="pj-divider" />

            <div className="pj-tech-list">
              {project.tech.map((t) => (
                <span key={t} className="pj-tech-tag">{t}</span>
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
