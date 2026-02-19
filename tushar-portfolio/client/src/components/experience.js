import React from 'react';
import { Calendar, Target, CheckCircle } from 'lucide-react';
import './experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "UPSALA",
      role: "Web Developer",
      duration: "Sep 2025 – Present",
      type: "defence",
      focus: "Defence & enterprise systems • Backend & APIs",
      contributions: [
        "Owned backend API design for secure role-based access across intelligence operations",
        "Worked within defence-compliant security constraints to deliver production-ready features",
        "Optimized database queries supporting real-time operational dashboards",
        "Collaborated with frontend teams to integrate secure APIs with Angular/Next.js interfaces"
      ],
      tech: ["Angular", "Next.js", "FastAPI", "PostgreSQL"],
      environment: "Secure, controlled production deployment"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Real-world production experience building secure backend systems in enterprise and defence environments.
          </p>
        </header>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-entry" data-type={exp.type}>
              <div className="experience-dot" aria-hidden="true" />
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-company-row">
                    <h3 className="company-name">{exp.company}</h3>
                    <span className="current-role-badge">Current Role</span>
                  </div>
                  <p className="experience-role-line">{exp.role} · {exp.focus}</p>
                  <div className="experience-duration">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                  <div className="experience-context">
                    {exp.type === 'defence' && (
                      <span className="badge">
                        <Target size={14} />
                        Defence-grade systems
                      </span>
                    )}
                    {exp.environment && (
                      <span className="badge">Secure production environment</span>
                    )}
                  </div>
                </div>

                <div className="experience-contributions">
                  <h4>What I Owned</h4>
                  <ul className="experience-points">
                    {exp.contributions.map((contribution, i) => (
                      <li key={i}>
                        <CheckCircle size={14} />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tech">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
