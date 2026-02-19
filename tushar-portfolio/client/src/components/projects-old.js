import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Target, CheckCircle } from 'lucide-react';
import "./projects.css";

function DetailedProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "PalettePath",
      company: "Freelance Project",
      role: "Full Stack Developer",
      duration: "Jan 2024 - Present",
      status: "In Development",
      team: "Solo Project",
      description: "Developed a full-featured portfolio website tailored for artists to professionally showcase their artwork, list services, and accept commissions. The platform includes dynamic galleries, customizable artist profiles, and integrated social media links to enhance reach.",
      longDescription: "PalettePath is a comprehensive artist portfolio platform built with MongoDB, Express.js, React, and Node.js. It features user authentication, image upload capabilities, portfolio customization, and social sharing features. The platform allows artists to create stunning galleries, manage client communications, and handle commission workflows seamlessly.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      achievements: [
        "Responsive gallery layout for displaying art with zoom functionality",
        "User-friendly admin dashboard for managing portfolio content",
        "Created commission management system with payment integration",
        "Secure backend using Express and MongoDB for artwork and user data",
        "Social media integration (Instagram, Youtube, etc.) to increase visibility"
      ],
      github: "https://github.com/Tusharsohal?tab=repositories",
      live: "https://palettepath-frontend-naq9.onrender.com"
    },
    {
      id: 2,
      title: "EazyMod",
      company: "Personal Project",
      role: "Backend Developer",
      duration: "Oct 2024 - Dec 2024",
      status: "Completed",
      team: "Solo project",
      description: "Built a web-based management system for car modification shops to streamline their service offerings, handle customer bookings, and maintain service records. Designed with usability in mind, EazyMod provides both admins and staff with efficient tools to track appointments, service types, and customer information.",
      longDescription: "EazyMod is a comprehensive business management solution for automotive modification shops. It includes customer management, service tracking, inventory control, and billing systems with role-based access control. The system features real-time notifications, automated scheduling, and detailed analytics dashboard.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap", "SignalR", "Azure"],
      achievements: [
        "Reduced appointment scheduling time by 75%",
        "Admin dashboard for managing service categories, pricing, and booking slots",
        "Booking form for customers to request services with preferred timing",
        "Built role-based access control system",
        "Customer database for tracking service history and contact details"
      ],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "AquaRevive",
      company: "IBM SkillsBuild",
      role: "Frontend Developer",
      duration: "May 2024 - July 2024",
      status: "Completed",
      team: "6 members",
      description: "Collaborated on AquaRevive during the IBM SkillsBuild Internship — a web-based sustainability dashboard focused on promoting efficient water management and conservation awareness. The platform is designed to present real-time data, educational content, and environmental impact metrics in an intuitive and visually engaging manner.",
      longDescription: "AquaRevive is an innovative water management system developed in partnership with IBM. It provides real-time water quality monitoring, usage analytics, and predictive maintenance features for sustainable water resource management. The platform combines IoT data with machine learning algorithms to optimize water usage patterns.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "GitHub"],
      achievements: [
        "Developed interactive data visualization dashboard",
        "Responsive UI built with Tailwind CSS and React components",
        "Team collaboration using GitHub for development",
        "Infographics and visual storytelling to educate users on water sustainability",
        "Optimized performance and accessibility for all screen sizes"
      ],
      github: "https://github.com/Tusharsohal?tab=repositories",
      live: "https://tusharsohal.github.io/AquaRevive/index.html"
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Intentionally no state update; observer kept for future animation hooks
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Handle project selection with smooth transitions
  const handleProjectSelect = useCallback((index) => {
    if (index !== activeProject) {
      setActiveProject(index);
      
      // Scroll to top of project details on mobile
      if (isMobile) {
        const projectDetails = document.querySelector('.project-details');
        if (projectDetails) {
          projectDetails.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    }
  }, [activeProject, isMobile]);

  // Get status class helper
  const getStatusClass = useCallback((status) => {
    return status === 'Completed' ? 'status-completed' : 'status-development';
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowUp' && activeProject > 0) {
        e.preventDefault();
        handleProjectSelect(activeProject - 1);
      } else if (e.key === 'ArrowDown' && activeProject < projects.length - 1) {
        e.preventDefault();
        handleProjectSelect(activeProject + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeProject, projects.length, handleProjectSelect]);

  const currentProject = projects[activeProject];

  return (
    <section 
      id="projects" 
      className="projects-detailed-view"
      role="main"
      aria-label="Projects showcase"
    >
      <div className="projects-container">
        
        {/* Sidebar */}
        <aside 
          className="projects-sidebar"
          role="navigation"
          aria-label="Project navigation"
        >
          <div className="sidebar-header">
            <h2 className="sidebar-title">Projects</h2>
            <p className="sidebar-subtitle">
              {isMobile ? 'Swipe to explore projects' : 'Click to explore each project'}
            </p>
          </div>
          
          <nav className="project-list" role="tablist">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`project-item ${index === activeProject ? 'active' : ''}`}
                onClick={() => handleProjectSelect(index)}
                role="tab"
                aria-selected={index === activeProject}
                aria-controls={`project-panel-${project.id}`}
                tabIndex={index === activeProject ? 0 : -1}
                type="button"
              >
                <div className="project-item-company">{project.company}</div>
                <div className="project-item-role">{project.role}</div>
                <div className="project-item-duration">{project.duration}</div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Project Details */}
        <main 
          className="project-details"
          role="tabpanel"
          id={`project-panel-${currentProject.id}`}
          aria-labelledby={`project-tab-${currentProject.id}`}
        >
          
          <header className="project-header">
            <div className="project-title-section">
              <div className="project-company">{currentProject.company}</div>
              <h1>{currentProject.title}</h1>
              <div className="project-meta-info">
                <div className="meta-item">
                  <Calendar size={16} aria-hidden="true" />
                  <span>{currentProject.duration}</span>
                </div>
                <div className="meta-item">
                  <Users size={16} aria-hidden="true" />
                  <span>{currentProject.team}</span>
                </div>
              </div>
            </div>
            
            <div 
              className={`status-badge ${getStatusClass(currentProject.status)}`}
              role="status"
              aria-label={`Project status: ${currentProject.status}`}
            >
              {currentProject.status}
            </div>
          </header>

          
          <div className="project-content">
            <div className="project-description">
              <p>{currentProject.longDescription}</p>
            </div>

            
            <section className="achievements-section">
              <h3 className="section-title1">
                <Target className="achievement-icon" aria-hidden="true" />
                Key Achievements
              </h3>
              <div className="achievements-grid">
                {currentProject.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-text">
                      <CheckCircle className="achievement-icon" aria-hidden="true" />
                      <span>{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            
            <section className="technologies-section">
              <h3 className="section-title1">
                <Code size={20} aria-hidden="true" />
                Technologies Used
              </h3>
              <div className="tech-grid" role="list">
                {currentProject.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-tag"
                    role="listitem"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          
          <footer className="project-actions">
            <a 
              href={currentProject.github} 
              className="action-button secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${currentProject.title} on GitHub`}
            >
              <Github size={16} aria-hidden="true" />
              <span>View Code</span>
            </a>
            <a 
              href={currentProject.live} 
              className="action-button primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${currentProject.title}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          </footer>
        </main>
      </div>
    </section>
  );
}

export default DetailedProjects;