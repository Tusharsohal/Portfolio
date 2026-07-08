import React, { useState } from 'react';
import './skills.css';

function Skills() {
  const [isVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', num: '00' },
    { id: 'lang', label: 'Languages', num: '01' },
    { id: 'backend', label: 'Backend', num: '02' },
    { id: 'frontend', label: 'Frontend', num: '03' },
    { id: 'database', label: 'Databases', num: '04' },
    { id: 'devops', label: 'DevOps & Tools', num: '05' },
    { id: 'concepts', label: 'Concepts', num: '06' },
  ];

  const skills = [
    { name: 'JavaScript', cat: 'lang', level: 'Expert' },
    { name: 'Python', cat: 'lang', level: 'Proficient' },
    { name: 'SQL', cat: 'lang', level: 'Proficient' },
    { name: 'TypeScript', cat: 'lang', level: 'Familiar' },
    { name: 'C#', cat: 'lang', level: 'Familiar' },
    { name: 'HTML5', cat: 'lang', level: 'Expert' },
    { name: 'CSS3', cat: 'lang', level: 'Expert' },

    { name: 'Node.js', cat: 'backend', level: 'Expert' },
    { name: 'FastAPI', cat: 'backend', level: 'Expert' },
    { name: 'Express.js', cat: 'backend', level: 'Expert' },
    { name: 'REST API Design', cat: 'backend', level: 'Expert' },
    { name: 'ASP.NET MVC', cat: 'backend', level: 'Familiar' },
    { name: 'Microservices', cat: 'backend', level: 'Proficient' },
    { name: 'Swagger / OpenAPI', cat: 'backend', level: 'Proficient' },
    { name: 'OAuth', cat: 'backend', level: 'Proficient' },

    { name: 'React.js', cat: 'frontend', level: 'Expert' },
    { name: 'Next.js', cat: 'frontend', level: 'Expert' },
    { name: 'Angular', cat: 'frontend', level: 'Expert' },
    { name: 'Tailwind CSS', cat: 'frontend', level: 'Expert' },
    { name: 'Electron.js', cat: 'frontend', level: 'Proficient' },

    { name: 'PostgreSQL', cat: 'database', level: 'Expert' },
    { name: 'MongoDB', cat: 'database', level: 'Expert' },
    { name: 'MySQL', cat: 'database', level: 'Proficient' },
    { name: 'SQLite', cat: 'database', level: 'Proficient' },
    { name: 'MongoDB Atlas', cat: 'database', level: 'Proficient' },
    { name: 'Schema Design', cat: 'database', level: 'Expert' },
    { name: 'Query Optimisation', cat: 'database', level: 'Proficient' },

    { name: 'Git', cat: 'devops', level: 'Expert' },
    { name: 'Postman', cat: 'devops', level: 'Expert' },
    { name: 'Figma', cat: 'devops', level: 'Proficient' },
    { name: 'CI/CD', cat: 'devops', level: 'Familiar' },
    { name: 'Unit Testing', cat: 'devops', level: 'Proficient' },
    { name: 'Vercel', cat: 'devops', level: 'Expert' },
    { name: 'Render', cat: 'devops', level: 'Proficient' },
    { name: 'Cloudinary', cat: 'devops', level: 'Proficient' },
    { name: 'SheetJS / xlsx', cat: 'devops', level: 'Proficient' },
    { name: 'Razorpay', cat: 'devops', level: 'Proficient' },
    { name: 'Nodemailer / SMTP', cat: 'devops', level: 'Proficient' },

    { name: 'JWT Authentication', cat: 'concepts', level: 'Expert' },
    { name: 'RBAC', cat: 'concepts', level: 'Expert' },
    { name: 'System Design', cat: 'concepts', level: 'Proficient' },
    { name: 'Database Normalisation', cat: 'concepts', level: 'Expert' },
    { name: 'Secure Architecture', cat: 'concepts', level: 'Expert' },
    { name: 'API Performance', cat: 'concepts', level: 'Expert' },
    { name: 'Responsive Design', cat: 'concepts', level: 'Proficient' },
    { name: 'Real-time Dashboards', cat: 'concepts', level: 'Proficient' },
  ];

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '4', label: 'Production Projects' },
    { value: '42+', label: 'Skills & Tools' },
    { value: 'MERN', label: 'Primary Stack' },
  ];

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.cat === activeCategory);

  const levelOrder = { Expert: 0, Proficient: 1, Familiar: 2 };
  const sorted = [...filtered].sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);

  return (
    <section id="skills" className="sk-root">
      <div className="sk-grain" aria-hidden="true" />
      <div className="sk-ghost" aria-hidden="true">SKILLS</div>
      <div className="sk-separator" aria-hidden="true" />

      <div className={`sk-stats ${isVisible ? 'sk-visible' : ''}`}>
        {stats.map((s, i) => (
          <div key={i} className="sk-stat" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="sk-stat-value">{s.value}</span>
            <span className="sk-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className={`sk-section-label ${isVisible ? 'sk-visible' : ''}`}>
        <span className="sk-label-num">04</span>
        <span className="sk-label-line" />
        <span className="sk-label-text">Skills & Stack</span>
      </div>

      <div className={`sk-heading-row ${isVisible ? 'sk-visible' : ''}`}>
        <h2 className="sk-heading">
          <span className="sk-heading-solid">What I</span>
          <span className="sk-heading-italic"> bring.</span>
        </h2>
        <p className="sk-sub">
          Full-stack engineer focused on secure backend systems, clean API design,
          and production-grade databases — with strong frontend range to ship complete products end-to-end.
        </p>
      </div>

      <p className={`sk-context ${isVisible ? 'sk-visible' : ''}`}>
        Core backend technologies and tools I use to build scalable systems.
      </p>

      <div className={`sk-filters ${isVisible ? 'sk-visible' : ''}`}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`sk-filter-btn ${activeCategory === cat.id ? 'sk-filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="sk-filter-num">{cat.num}</span>
            <span className="sk-filter-label">{cat.label}</span>
          </button>
        ))}
      </div>

      <div className={`sk-grid ${isVisible ? 'sk-visible' : ''}`}>
        {sorted.map((skill, i) => (
          <div
            key={`${skill.cat}-${skill.name}`}
            className={`sk-skill-card sk-skill-card--${skill.cat} sk-skill-card--${skill.level.toLowerCase()}`}
            style={{ animationDelay: `${i * 28}ms` }}
          >
            <div className="sk-skill-top">
              <span className="sk-skill-cat-dot" />
              <span className="sk-skill-level">{skill.level}</span>
            </div>
            <span className="sk-skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className={`sk-legend ${isVisible ? 'sk-visible' : ''}`}>
        <div className="sk-legend-title">Proficiency</div>
        <div className="sk-legend-items">
          {['Expert', 'Proficient', 'Familiar'].map((l) => (
            <span key={l} className={`sk-legend-item sk-legend-item--${l.toLowerCase()}`}>
              <span className="sk-legend-dot" />
              {l}
            </span>
          ))}
        </div>
        <div className="sk-legend-cats">
          {categories.filter((c) => c.id !== 'all').map((c) => (
            <span key={c.id} className={`sk-legend-cat sk-legend-cat--${c.id}`}>
              <span className="sk-legend-dot" />
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
