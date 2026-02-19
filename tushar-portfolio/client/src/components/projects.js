import React from 'react';
import { Target, ExternalLink, Github, Lock } from 'lucide-react';
import './projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      company: "Defence Client",
      title: "Defence Intelligence & Operations Platform",
      outcome: "Secure, role-based intelligence and operations platform designed for a <strong>controlled defence deployment</strong>.",
      architecture: "Built with JWT/RBAC and optimized PostgreSQL schemas",
      highlight: "Designed secure RBAC-based access control across intelligence operations",
      environment: "Controlled defence deployment",
      tech: ["FastAPI", "PostgreSQL", "JWT", "RBAC", "Angular", "Next.js"],
      security: true,
      restricted: true,
      type: "Production Project",
      liveUrl: null,
      githubUrl: null
    },
    {
      id: 2,
      company: "The Kapda Company",
      title: "Customizable E-Commerce Platform",
      outcome: "Multi-role e-commerce platform with <strong>JWT-based authentication, RBAC</strong>, and scalable REST APIs.",
      architecture: "Scalable REST APIs with multi-brand support and role-based workflows",
      highlight: "Optimized API performance for production traffic",
      environment: "Production SaaS environment",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS"],
      security: true,
      restricted: false,
      type: "Production Project",
      liveUrl: "https://kapdaco.vercel.app",
      githubUrl: "https://github.com/Tusharsohal?tab=repositories"
    },
    {
      id: 3,
      company: "Educational Institution",
      title: "Library Management System — Desktop Application",
      outcome: "Reduced manual administrative effort by <strong>~85%</strong> through workflow automation and normalized database design.",
      architecture: "Desktop application with automated reporting and normalized database design",
      highlight: "Built REST APIs handling real-world workloads",
      environment: "Institutional deployment",
      tech: ["Electron.js", "React.js", "Node.js", "SQLite"],
      security: false,
      restricted: false,
      type: "Personal Project",
      liveUrl: null,
      githubUrl: "https://github.com/Tusharsohal?tab=repositories"
    },
    {
      id: 4,
      company: "Educational Institution",
      title: "School Website & Management Platform",
      outcome: "Production platform serving <strong>1,000+ daily users</strong>, optimized for performance and reliability.",
      architecture: "Full-stack platform with optimized APIs and database queries",
      highlight: "Designed secure RBAC-based access control",
      environment: "Production web deployment",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      security: false,
      restricted: false,
      type: "Production Project",
      liveUrl: "https://lordkrishnaconventschool.com",
      githubUrl: "https://github.com/Tusharsohal?tab=repositories"
    }
  ];

  const requestCaseStudy = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Secure, scalable systems with measurable outcomes
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.restricted ? 'restricted' : ''}`}
              data-type={project.type}
            >
              <div className="project-meta">
                <div className="project-header">
                  <span className="project-company">{project.company}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-outcome" dangerouslySetInnerHTML={{ __html: project.outcome }} />
                <p className="project-architecture">{project.architecture}</p>
                <p className="project-highlight">{project.highlight}</p>
                <div className="project-environment">
                  <span className="environment-label">Environment:</span>
                  <span className="environment-value">{project.environment}</span>
                </div>
                {project.security && (
                  <div className="security-badge">
                    <Target size={14} />
                    Secure APIs & RBAC
                  </div>
                )}
              </div>

              <div className="project-tech" aria-label="Tech stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.restricted ? (
                  <>
                    <span className="restricted-note">
                      <Lock size={14} />
                      Code & demo restricted (defence project)
                    </span>
                    <button type="button" className="project-btn project-btn-secondary" onClick={requestCaseStudy}>
                      Request Case Study
                    </button>
                  </>
                ) : (
                  <>
                    <div className="project-actions-left">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn project-btn-primary"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn project-btn-secondary"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
