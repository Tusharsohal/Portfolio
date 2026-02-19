import React from 'react';
import './skills.css';

function Skills() {
  const skills = {
    primary: [
      { name: 'Node.js' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'REST API Design' },
      { name: 'JWT Authentication' },
      { name: 'RBAC' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' }
    ],
    secondary: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Angular' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'Swagger / OpenAPI' }
    ],
    tools: [
      { name: 'Git' },
      { name: 'Postman' },
      { name: 'CI/CD basics' },
      { name: 'Unit Testing' },
      { name: 'Render' },
      { name: 'Vercel' }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Focused on secure backend systems, API design, and scalable databases for production environments.
          </p>
        </header>

        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-indicator primary"></span>
              Primary Skills
            </h3>
            <p className="category-description">
              Core technologies I use daily for production systems
            </p>
            <div className="skill-tags">
              {skills.primary.map((skill, index) => (
                <span key={index} className="skill-tag primary">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-indicator secondary"></span>
              Secondary Skills
            </h3>
            <p className="category-description">
              Frontend and supporting technologies I work with regularly
            </p>
            <div className="skill-tags">
              {skills.secondary.map((skill, index) => (
                <span key={index} className="skill-tag secondary">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-indicator tools"></span>
              Tools & Platforms
            </h3>
            <p className="category-description">
              Development tools and cloud platforms I'm proficient with
            </p>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag tools">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h4>Backend Focus</h4>
            <p>Strong in Node.js, FastAPI, PostgreSQL, and secure API design with JWT/RBAC</p>
          </div>
          <div className="summary-card">
            <h4>Full-Stack Capability</h4>
            <p>Comfortable with React, Next.js, and end-to-end system architecture</p>
          </div>
          <div className="summary-card">
            <h4>Production Experience</h4>
            <p>Built and deployed secure, scalable systems for defence and product SaaS</p>
          </div>
        </div>

        <div className="certifications-block">
          <h3 className="certifications-title">Certifications & Formal Training</h3>
          <p className="certifications-subtitle">
            Industry-recognized coursework supporting backend and full-stack expertise
          </p>
          <div className="certifications-grid">
            {[
              {
                title: "Backend Development for .Net Full Stack",
                issuer: "Coursera-Board infinity",
                date: "Apr 24, 2025",
                relevance: "Backend architecture, APIs, authentication, and database-driven applications.",
                link: "https://coursera.org/verify/4CXCN2FKIP79",
                category: "core"
              },
              {
                title: "Frontend Development using React",
                issuer: "Coursera-Board infinity",
                date: "Feb 23, 2025",
                relevance: "Component-driven UI development and integration with REST APIs.",
                link: "https://coursera.org/verify/3K5EQI7A7GS1",
                category: "core"
              },
              {
                title: "Python Data Structures",
                issuer: "University of Michigan",
                date: "May 29 2021",
                relevance: "Algorithmic thinking, data handling, and backend problem-solving foundations.",
                link: "https://coursera.org/verify/4RWV2K47MVX7",
                category: "foundations"
              },
              {
                title: "Web Development Fundamentals",
                issuer: "IBM SkillsBuild",
                date: "July 14, 2024",
                relevance: "Core web concepts: HTTP, client–server model, and browser behavior.",
                link: "https://www.credly.com/badges/df2678cc-59da-4a63-90ec-19ab60f7f118/linked_in_profile",
                category: "foundations"
              }
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`cert-card ${cert.category}`}
              >
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-meta">{cert.issuer} • {cert.date}</p>
                  <p className="cert-relevance">{cert.relevance}</p>
                </div>
                <span className="cert-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
