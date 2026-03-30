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
      company: 'UPSALA DefSol — Indian Army',
      title: 'Defence Intelligence & Operations Platform',
      summary:
        'Built a defence-grade operations platform for secure multi-unit workflows, approval routing, and sensitive operational data handling.',
      label: 'Backend System • 800+ Users • Secure Environment',
      bullets: [
        'Designed a multi-tier RBAC system for secure unit-level access control and zero cross-unit data leakage.',
        'Built FastAPI-based REST APIs for workflow approvals, operational records, and map-linked intelligence modules.',
        'Optimized PostgreSQL schemas and query paths for large operational datasets used in real-time dashboards.',
        'Enforced approval chains at the API layer so field-level actions moved through command hierarchy before execution.',
      ],
      proof: [
        'RBAC implemented',
        'Defence production deployment',
        'Sensitive data isolation',
        'Workflow approvals enforced',
      ],
      techLabel: 'Tech: FastAPI, PostgreSQL, Python, JWT, RBAC, Angular, Next.js',
      tech: ['FastAPI', 'PostgreSQL', 'Python', 'JWT', 'RBAC', 'Angular', 'Next.js'],
      security: true,
      restricted: true,
      type: 'Production',
      featured: true,
      environment: 'Indian Army · Controlled Deployment',
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      index: '02',
      company: 'The Kapda Company — Personal Project',
      title: 'Custom Apparel E-Commerce Platform',
      summary:
        'Shipped a live commerce platform for customizable apparel with secure payments, multi-role access, and order workflows.',
      label: 'Multi-role System • RBAC • Payment Integration',
      bullets: [
        'Built a Node.js and Express backend powering product customization, checkout flows, and order lifecycle management.',
        'Implemented 4-role RBAC for admin, designer, seller, and customer workflows across the full platform.',
        'Integrated Razorpay and email notifications for production-ready payment confirmations and order communication.',
        'Documented backend APIs with Swagger to improve testing, onboarding, and future feature delivery.',
      ],
      proof: [
        '4-role RBAC',
        'Payment gateway integrated',
        'Live production project',
        'Swagger-documented APIs',
      ],
      techLabel: 'Tech: Node.js, Express, PostgreSQL, JWT, Razorpay, React',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Razorpay'],
      security: true,
      restricted: false,
      type: 'Personal · Live',
      featured: false,
      environment: 'Live · kapdaco.vercel.app',
      liveUrl: 'https://kapdaco.vercel.app',
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
    {
      id: 3,
      index: '03',
      company: 'Lord Krishna Convent School',
      title: 'Library Management System',
      summary:
        'Delivered a desktop workflow system that replaced manual library administration with faster, more reliable operations.',
      label: 'Desktop System • Automation • Rule-based Logic',
      bullets: [
        'Built an Electron-based library management system for book issuance, returns, overdue tracking, and reporting.',
        'Automated administrative workflows that reduced manual effort by about 85 percent.',
        'Integrated SheetJS-based bulk import and export for student records and book inventory operations.',
        'Designed the full product flow in Figma and shipped it into production as a freelance desktop application.',
      ],
      proof: [
        '85% admin effort reduced',
        'Desktop production app',
        'Bulk Excel workflows',
        'End-to-end freelance delivery',
      ],
      techLabel: 'Tech: Electron.js, React, Node.js, SQLite, SheetJS, Figma',
      tech: ['Electron.js', 'React.js', 'Node.js', 'SQLite', 'SheetJS', 'Figma'],
      security: false,
      restricted: false,
      type: 'Freelance',
      featured: false,
      environment: 'Institutional · LKCS Gurugram',
      liveUrl: null,
      githubUrl: 'https://github.com/Tusharsohal?tab=repositories',
    },
    {
      id: 4,
      index: '04',
      company: 'Lord Krishna Convent School',
      title: 'School Website & Management Platform',
      summary:
        'Built and maintained a production platform for school operations, role-based access, and public-facing content delivery.',
      label: 'Production System • 1000+ Users • Admin Panel',
      bullets: [
        'Built MERN-based backend workflows for school operations, staff access, and content management.',
        'Implemented role-based access for staff, librarians, and admins across operational dashboards.',
        'Optimized MongoDB queries and backend API paths, reducing page load time by around 35 percent.',
        'Supported a live system serving 1,000 plus daily users with stable production deployment.',
      ],
      proof: [
        '1,000+ daily users',
        '35% faster page loads',
        'RBAC implemented',
        'Production-ready system',
      ],
      techLabel: 'Tech: Node.js, Express, MongoDB, Cloudinary, React, Vercel',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Vercel'],
      security: false,
      restricted: false,
      type: 'Production',
      featured: false,
      environment: 'Production · lordkrishnaconventschool.com',
      liveUrl: 'https://lordkrishnaconventschool.com',
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
          Backend systems, production rollouts, and measurable engineering impact
          presented the way recruiters scan: what I built, what improved, and what shipped.
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
              <p className="pj-summary pj-summary--featured">{featured.summary}</p>

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
            <p className="pj-summary">{project.summary}</p>

            <div className="pj-proof-list">
              {project.proof.map((item) => (
                <span key={item} className="pj-proof-pill">{item}</span>
              ))}
            </div>

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
