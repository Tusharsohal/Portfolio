import React, { useState } from 'react';
import './skills.css';

function Skills() {
  const [isVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', num: '00' },
    { id: 'lang', label: 'Languages', num: '01' },
    { id: 'backend', label: 'Backend', num: '02' },
    { id: 'database', label: 'Databases', num: '03' },
    { id: 'orm', label: 'ORM', num: '04' },
    { id: 'concepts', label: 'Security & Auth', num: '05' },
    { id: 'devops', label: 'Caching & Tools', num: '06' },
    { id: 'frontend', label: 'Frontend', num: '07' },
  ];

  const skills = [
    // Languages
    { name: 'Python', cat: 'lang', level: 'Proficient' },
    { name: 'JavaScript', cat: 'lang', level: 'Expert' },
    { name: 'SQL', cat: 'lang', level: 'Proficient' },
    { name: 'Java', cat: 'lang', level: 'Proficient' },
    { name: 'TypeScript', cat: 'lang', level: 'Familiar' },
    { name: 'C#', cat: 'lang', level: 'Familiar' },

    // Backend
    { name: 'FastAPI', cat: 'backend', level: 'Expert' },
    { name: 'Node.js', cat: 'backend', level: 'Expert' },
    { name: 'Express.js', cat: 'backend', level: 'Expert' },
    { name: 'REST API Design', cat: 'backend', level: 'Expert' },
    { name: 'Swagger / OpenAPI', cat: 'backend', level: 'Proficient' },
    { name: 'ASP.NET MVC', cat: 'backend', level: 'Familiar' },

    // Databases
    { name: 'PostgreSQL', cat: 'database', level: 'Expert' },
    { name: 'PostGIS', cat: 'database', level: 'Proficient' },
    { name: 'MySQL', cat: 'database', level: 'Proficient' },
    { name: 'MongoDB', cat: 'database', level: 'Proficient' },
    { name: 'SQLite', cat: 'database', level: 'Proficient' },
    { name: 'Schema Design', cat: 'database', level: 'Expert' },
    { name: 'Query Optimization', cat: 'database', level: 'Proficient' },
    { name: 'Recursive Queries', cat: 'database', level: 'Proficient' },

    // ORM
    { name: 'SQLAlchemy', cat: 'orm', level: 'Proficient' },
    { name: 'GeoAlchemy2', cat: 'orm', level: 'Proficient' },

    // Security & Auth
    { name: 'JWT', cat: 'concepts', level: 'Expert' },
    { name: 'RBAC', cat: 'concepts', level: 'Expert' },
    { name: 'Refresh Tokens', cat: 'concepts', level: 'Proficient' },
    { name: 'IAM', cat: 'concepts', level: 'Proficient' },
    { name: 'Secure Architecture', cat: 'concepts', level: 'Expert' },
    { name: 'API Performance', cat: 'concepts', level: 'Expert' },

    // Caching & Tools
    { name: 'Redis', cat: 'devops', level: 'Proficient' },
    { name: 'Docker', cat: 'devops', level: 'Familiar' },
    { name: 'Git', cat: 'devops', level: 'Expert' },
    { name: 'Postman', cat: 'devops', level: 'Expert' },
    { name: 'CI/CD', cat: 'devops', level: 'Familiar' },
    { name: 'Vercel', cat: 'devops', level: 'Expert' },
    { name: 'Render', cat: 'devops', level: 'Proficient' },

    // Frontend
    { name: 'React.js', cat: 'frontend', level: 'Expert' },
    { name: 'Angular', cat: 'frontend', level: 'Proficient' },
    { name: 'Next.js', cat: 'frontend', level: 'Proficient' },
  ];

  const currentlyLearning = [
    { name: 'Java', note: 'Deepening core Java & OOP for backend services' },
    { name: 'Spring Boot', note: 'REST APIs, DI, and enterprise service patterns' },
    { name: 'Docker', note: 'Containerizing backends for reproducible deploys' },
    { name: 'AWS', note: 'Cloud compute, deployment, and managed data services' },
    { name: 'Kafka', note: 'Event streaming and async, decoupled architectures' },
    { name: 'AI Engineering', note: 'LLM apps, RAG, and AI-augmented backends' },
  ];

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '4', label: 'Production Projects' },
    { value: '35+', label: 'Skills & Tools' },
    { value: 'FastAPI', label: 'Core Backend' },
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
          Backend engineer focused on secure REST APIs, PostgreSQL/PostGIS
          optimization, ORM-driven data layers, and caching — organized the way
          I actually use them in production.
        </p>
      </div>

      <p className={`sk-context ${isVisible ? 'sk-visible' : ''}`}>
        Backend-first stack, grouped by how it maps to real system layers.
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

      <div className={`sk-learning ${isVisible ? 'sk-visible' : ''}`}>
        <div className="sk-learning-head">
          <span className="sk-learning-pulse" aria-hidden="true" />
          <span className="sk-learning-kicker">Currently Learning</span>
          <span className="sk-learning-note">Actively leveling up — targeting product-scale backend engineering</span>
        </div>
        <div className="sk-learning-grid">
          {currentlyLearning.map((item, i) => (
            <div key={item.name} className="sk-learning-card" style={{ animationDelay: `${i * 60}ms` }}>
              <span className="sk-learning-name">{item.name}</span>
              <span className="sk-learning-desc">{item.note}</span>
            </div>
          ))}
        </div>
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
