import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Code, Calendar, MapPin,
  Star, ExternalLink, Zap, Trophy, ArrowRight
} from 'lucide-react';
import './about.css';

function About() {
  const [isVisible,        setIsVisible]        = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const certContainerRef = useRef(null);
  const sectionRef       = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const initCertificateClicks = useCallback(() => {
    const certContainer = certContainerRef.current;
    const certCards = certContainer?.querySelectorAll('.cert-card');
    if (!certContainer || !certCards?.length) return;

    certCards.forEach(card => {
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
    });

    const updated = certContainer.querySelectorAll('.cert-card');
    updated.forEach(card => {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.cert-link')) { e.stopPropagation(); return; }
        if (this.classList.contains('clicked')) {
          this.classList.remove('clicked');
          certContainer.classList.remove('has-focus');
          return;
        }
        updated.forEach(c => c.classList.remove('clicked'));
        certContainer.classList.remove('has-focus');
        this.classList.add('clicked');
        certContainer.classList.add('has-focus');
      });
    });

    const onOutside = e => {
      if (!e.target.closest('.cert-card')) {
        updated.forEach(c => c.classList.remove('clicked'));
        certContainer.classList.remove('has-focus');
      }
    };
    const onEsc = e => {
      if (e.key === 'Escape') {
        updated.forEach(c => c.classList.remove('clicked'));
        certContainer.classList.remove('has-focus');
      }
    };
    document.addEventListener('click', onOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => { const c = initCertificateClicks(); return c; }, 250);
    return () => clearTimeout(t);
  }, [isVisible, initCertificateClicks]);

  /* ══════════════════════════════════════
     EXPERIENCE — accurate, verified data
  ══════════════════════════════════════ */
  const experiences = [
    {
      company:  'UPSALA DefSol & IT Services Pvt. Ltd.',
      role:     'Backend Engineer',
      duration: 'Sep 2025 – Present',
      location: 'New Delhi',
      type:     'Full-time',
      impact:   '800+ users · Prod',
      highlights: ['Secure REST APIs', 'PostGIS / GeoAlchemy2', 'JWT · RBAC · IAM', 'Redis + Migration'],
      description: [
        'Developed secure REST APIs for a defence-grade intelligence platform supporting 800+ internal users across hierarchical military organizations.',
        'Designed authentication and authorization with JWT, refresh tokens, RBAC, and IAM integration for secure enterprise access with strict unit-level data isolation.',
        'Built GIS-enabled backend services using PostgreSQL, PostGIS, SQLAlchemy, and GeoAlchemy2 for dashboards, reports, and operational mapping.',
        'Optimized PostgreSQL queries with joins, indexing, and recursive hierarchical queries, improving backend scalability and response time.',
        'Implemented Redis caching, backend optimizations, and production data migration while ensuring application stability across the full software lifecycle.',
      ],
      technologies: ['FastAPI', 'Python', 'PostgreSQL', 'PostGIS', 'SQLAlchemy', 'GeoAlchemy2', 'Redis', 'JWT', 'RBAC', 'IAM', 'Angular', 'Next.js'],
      achievements: [
        { label: 'Users served',   value: '800+'       },
        { label: 'Auth',           value: 'JWT · RBAC' },
        { label: 'GIS backend',    value: 'PostGIS'    },
        { label: 'Deployment',     value: 'Defence'    },
      ],
    },
    {
      company:  'Lord Krishna Convent School',
      role:     'Software Developer Intern',
      duration: 'Jun 2024 – Aug 2025',
      location: 'Gurugram',
      type:     'Internship',
      impact:   '1,000+ users · Deployed',
      highlights: ['Java Desktop App', 'Deployed School ERP', 'Role-Based Access', 'Backend APIs'],
      description: [
        'Designed, developed, and deployed a Java desktop Library Management application — managing inventory, book issuance, returns, and fine calculation for daily library operations.',
        'Implemented Excel import/export for bulk record management and automated administrative workflows, reducing manual effort by approximately 85%.',
        'Designed, built, and deployed a full-stack school management platform (ERP) serving 1,000+ users, with backend APIs for student management, events, enquiries, complaints, and content management.',
        'Implemented secure role-based access for staff, librarians, and administrators, and optimized backend APIs for improved responsiveness.',
      ],
      technologies: ['Java', 'Apache POI', 'SQLite', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Cloudinary', 'Figma'],
      achievements: [
        { label: 'Admin effort cut', value: '~85%'       },
        { label: 'Users served',     value: '1,000+'     },
        { label: 'Library app',      value: 'Java'       },
        { label: 'Delivery',         value: 'Deployed'   },
      ],
    },
    {
      company:  'BVICAM — Software Consultancy Development Cell',
      role:     'Full Stack Developer Intern',
      duration: 'Jan 2025 – Mar 2025',
      location: 'New Delhi',
      type:     'Internship',
      impact:   'Springer Nature · Live',
      highlights: ['Payment Integration', 'Session Security', 'MySQL Design', 'Transaction Flow'],
      description: [
        'Developed a subscription management system for BIJIT Journal — an academic publication by Springer Nature — handling user registration, plan selection, and end-to-end payment flows.',
        'Integrated Razorpay payment gateway with server-side session management in ASP.NET MVC, preventing client-side tampering of transaction state across the full subscription lifecycle.',
        'Designed and optimised normalised MySQL schemas for subscriber records, transaction logs, plan metadata, and access control — ensuring data integrity across concurrent subscription events.',
      ],
      technologies: ['ASP.NET MVC', 'C#', 'MySQL', 'Razorpay', 'JavaScript'],
      achievements: [
        { label: 'Publisher',    value: 'Springer' },
        { label: 'Payment GW',  value: 'Razorpay' },
        { label: 'Session mgmt',value: 'Secure'   },
        { label: 'DB',          value: 'MySQL'    },
      ],
    },
  ];

  /* ══════════════════════════════════════
     CERTIFICATIONS
  ══════════════════════════════════════ */
  const certifications = [
    {
      title: 'Backend Development for .NET Full Stack',
      issuer: 'Coursera — Board Infinity',
      date: 'Apr 24, 2025', credentialId: '4CXCN2FKIP79',
      link: 'https://coursera.org/verify/4CXCN2FKIP79', icon: Trophy,
    },
    {
      title: 'Frontend Development using React',
      issuer: 'Coursera — Board Infinity',
      date: 'Feb 23, 2025', credentialId: '3K5EQI7A7GS1',
      link: 'https://coursera.org/verify/3K5EQI7A7GS1', icon: Star,
    },
    {
      title: 'Python Data Structures',
      issuer: 'University of Michigan',
      date: 'May 29, 2021', credentialId: '4RWV2K47MVX7',
      link: 'https://coursera.org/verify/4RWV2K47MVX7', icon: Zap,
    },
    {
      title: 'Web Development Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Jul 14, 2024', credentialId: 'df2678cc-59da',
      link: 'https://www.credly.com/badges/df2678cc-59da-4a63-90ec-19ab60f7f118/linked_in_profile',
      icon: Code,
    },
  ];

  return (
    <div className="ab-root" id="about" ref={sectionRef}>
      <div className="ab-grain" aria-hidden="true" />

      {/* ══════════════════════════════
          BAND 1 — INTRO  (Floral White)
      ══════════════════════════════ */}
      <div className="ab-band-intro">
        <div className={`ab-section-label ${isVisible ? 'ab-visible' : ''}`}>
          <span className="ab-label-num">01</span>
          <span className="ab-label-line" />
          <span className="ab-label-text">About</span>
        </div>

        <div className={`ab-intro ${isVisible ? 'ab-visible' : ''}`}>
          <div className="ab-intro-left">
            <h2 className="ab-intro-heading">
              <span className="ab-heading-row">I build things</span>
              <span className="ab-heading-row ab-heading-italic">that work</span>
              <span className="ab-heading-row ab-heading-outline">at scale.</span>
            </h2>
          </div>

          <div className="ab-intro-right">
            <p className="ab-intro-body">
              Backend Engineer with 1+ years building production-grade systems
              for defence and enterprise applications. I work across REST API
              development, PostgreSQL/PostGIS optimization, SQLAlchemy &amp;
              GeoAlchemy2, JWT/RBAC authentication, Redis caching, and secure
              backend architecture — currently deepening Java and Spring Boot.
            </p>

            <div className="ab-stats-row">
              {[
                { num: '3',    label: 'Companies'  },
                { num: '6+',   label: 'Projects'   },
                { num: '4',    label: 'Certs'      },
                { num: '1yr+', label: 'Experience' },
              ].map(s => (
                <div className="ab-stat" key={s.label}>
                  <span className="ab-stat-num">{s.num}</span>
                  <span className="ab-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="ab-why-hire">
              <div className="ab-why-hire-head">
                <span className="ab-why-hire-kicker">Why hire me?</span>
                <h3 className="ab-why-hire-title">Backend strength, built for production.</h3>
              </div>
              <ul className="ab-why-hire-list">
                <li>Ship secure REST APIs in Python/FastAPI and Node.js for real, high-stakes users.</li>
                <li>Optimize PostgreSQL/PostGIS with indexing, joins, and recursive queries.</li>
                <li>Own auth end to end — JWT, refresh tokens, RBAC, and IAM.</li>
                <li>Deliver from schema design and caching to production migration and deployment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          BAND 2 — EXPERIENCE  (Smoky)
      ══════════════════════════════ */}
      <div className="ab-band-exp" id="experience">
        <div className={`ab-exp-wrap ${isVisible ? 'ab-visible' : ''}`}>

          <div className="ab-section-label ab-section-label--inline">
            <span className="ab-label-num">02</span>
            <span className="ab-label-line" />
            <span className="ab-label-text">Experience</span>
          </div>

          <div className="ab-exp-layout">

            <nav className="ab-exp-nav" aria-label="Experience navigation">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  className={`ab-exp-btn ${activeExperience === i ? 'ab-exp-btn--active' : ''}`}
                  onClick={() => setActiveExperience(i)}
                >
                  <span className="ab-exp-btn-idx">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ab-exp-btn-body">
                    <span className="ab-exp-btn-company">{exp.company}</span>
                    <span className="ab-exp-btn-role">{exp.role}</span>
                    <span className="ab-exp-btn-dur">{exp.duration}</span>
                  </div>
                  <ArrowRight size={12} className="ab-exp-btn-arrow" />
                </button>
              ))}
            </nav>

            <div className="ab-exp-detail">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`ab-exp-panel ${activeExperience === i ? 'ab-exp-panel--active' : ''}`}
                  aria-hidden={activeExperience !== i}
                >
                  <div className="ab-ep-header">
                    <div className="ab-ep-title-block">
                      <div className="ab-ep-meta-top">
                        <span className="ab-ep-type">{exp.type}</span>
                        <span className="ab-ep-location">
                          <MapPin size={10} /> {exp.location}
                        </span>
                        <span className="ab-ep-dur">
                          <Calendar size={10} /> {exp.duration}
                        </span>
                      </div>
                      <h3 className="ab-ep-role">{exp.role}</h3>
                      <p  className="ab-ep-company">{exp.company}</p>

                      <div className="ab-ep-highlights">
                        {exp.highlights.map((item) => (
                          <span key={item} className="ab-ep-highlight-tag">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="ab-ep-impact">
                      <span className="ab-ep-impact-value">{exp.impact}</span>
                      <span className="ab-ep-impact-label">Key Impact</span>
                    </div>
                  </div>

                  <div className="ab-ep-metrics">
                    {exp.achievements.map((a, j) => (
                      <div key={j} className="ab-ep-metric">
                        <span className="ab-ep-metric-val">{a.value}</span>
                        <span className="ab-ep-metric-label">{a.label}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="ab-ep-desc">
                    {exp.description.map((d, j) => (
                      <li key={j}>
                        <span className="ab-ep-desc-arrow">→</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="ab-ep-stack">
                    <span className="ab-ep-stack-label">Stack</span>
                    <div className="ab-ep-tags">
                      {exp.technologies.map((t, j) => (
                        <span key={j} className="ab-ep-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          BAND 3 — CERTIFICATIONS (Bone)
      ══════════════════════════════ */}
      <div className="ab-band-cert" id="certifications">
        <div className={`ab-cert-wrap ${isVisible ? 'ab-visible' : ''}`}>

          <div className="ab-section-label ab-section-label--inline">
            <span className="ab-label-num">03</span>
            <span className="ab-label-line" />
            <span className="ab-label-text">Education &amp; Certifications</span>
          </div>

          <div className="ab-edu">
            {[
              { degree: 'Master of Computer Applications', school: 'Guru Gobind Singh Indraprastha University', year: '2025', gpa: 'GPA 8.3 / 10' },
              { degree: 'Bachelor of Computer Applications', school: 'Guru Gobind Singh Indraprastha University', year: '2022', gpa: 'GPA 8.4 / 10' },
            ].map((e) => (
              <div className="ab-edu-item" key={e.degree}>
                <div className="ab-edu-top">
                  <span className="ab-edu-year">{e.year}</span>
                  <span className="ab-edu-gpa">{e.gpa}</span>
                </div>
                <h4 className="ab-edu-degree">{e.degree}</h4>
                <p className="ab-edu-school">{e.school}</p>
              </div>
            ))}
          </div>

          <div className="cert-container" ref={certContainerRef}>
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div key={i} className="cert-card" style={{ animationDelay: `${i * 120}ms` }}>
                  <div className="cert-card-inner">
                    <div className="cert-card-top">
                      <div className="cert-icon-wrap"><Icon size={20} /></div>
                      <div className="cert-card-meta">
                        <span className="cert-date">Issued {cert.date}</span>
                        <span className="cert-id">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p  className="cert-issuer">{cert.issuer}</p>
                    <a
                      href={cert.link}
                      className="cert-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      View Credential <ExternalLink size={12} />
                    </a>
                    <div className="cert-corner" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
