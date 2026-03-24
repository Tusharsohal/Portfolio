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
      role:     'Web Developer',
      duration: 'Sep 2025 – Present',
      location: 'New Delhi',
      type:     'Full-time',
      impact:   'Indian Army · Prod',
      description: [
        'Architecting secure REST APIs for a defence-grade intelligence and operations platform deployed at the Indian Army PMO office — handling sensitive multi-unit operational data at production scale.',
        'Designed a multi-tier RBAC system enforcing strict unit-level data isolation — no unit can access another\'s data — combined with a hierarchical approval workflow where actions escalate upward through command tiers before execution.',
        'Optimised PostgreSQL schemas for large-scale operational datasets visualised on real-time maps; executed database migrations and schema versioning under defence-compliant production protocols.',
        'Built modular Angular + Next.js frontend components for real-time operational dashboards, integrating internal department APIs under strict data security constraints.',
      ],
      technologies: ['FastAPI', 'PostgreSQL', 'Python', 'JWT', 'RBAC', 'Angular', 'Next.js'],
      achievements: [
        { label: 'RBAC model',     value: 'Multi-tier'    },
        { label: 'Approval chain', value: 'Hierarchical'  },
        { label: 'Data isolation', value: 'Unit-level'    },
        { label: 'Deployment',     value: 'Army · Prod'   },
      ],
    },
    {
      company:  'Lord Krishna Convent School',
      role:     'Software Developer Intern',
      duration: 'Jun 2024 – Aug 2025',
      location: 'Gurugram',
      type:     'Internship',
      impact:   '1,000+ daily users',
      description: [
        'Designed full system UI in Figma, then built a desktop Library Management System using Electron.js + React.js — automating book issuance, returns, overdue fine calculation, and reporting, cutting manual effort by ~85%.',
        'Integrated Excel import/export via SheetJS for bulk student and book inventory data management, eliminating manual entry workflows entirely.',
        'Built and deployed the official LKCS school website on the MERN stack — serving 1,000+ daily users — with Cloudinary media management, MongoDB Atlas, GoDaddy domain on Vercel + Render.',
        'Implemented role-based access with secure login for staff, librarians, and administrators; built interactive analytics dashboards for real-time library and school data.',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'SQLite', 'MongoDB', 'Electron.js', 'SheetJS', 'Figma', 'Cloudinary'],
      achievements: [
        { label: 'Admin effort cut', value: '~85%'      },
        { label: 'Daily users',      value: '1,000+'    },
        { label: 'Pipeline',         value: 'Figma→Prod'},
        { label: 'Stack',            value: 'MERN'      },
      ],
    },
    {
      company:  'BVICAM — Software Consultancy Development Cell',
      role:     'Full Stack Developer Intern',
      duration: 'Jan 2025 – Mar 2025',
      location: 'New Delhi',
      type:     'Internship',
      impact:   'Springer Nature · Live',
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
              Full Stack Developer currently building secure, production-grade backend systems
              for the <strong>Indian Army</strong> at UPSALA DefSol. I specialise in REST API
              design, JWT/RBAC security architecture, and PostgreSQL optimisation — with
              enough frontend range to own a product from Figma to deployment.
            </p>
            <p className="ab-intro-body">
              Previously delivered production systems at LKCS serving
              <strong> 1,000+ daily users</strong> and a live payment integration for a
              <strong> Springer Nature</strong> academic journal. I build systems that are
              secure by design, not by accident.
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
            <span className="ab-label-text">Certifications</span>
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
