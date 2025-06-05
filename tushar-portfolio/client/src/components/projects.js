import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Target, CheckCircle } from 'lucide-react';
import "./projects.css";

function DetailedProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
      live: "https://palettepath-frontend-naq9.onrender.com "
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('detailed-projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleProjectSelect = (index) => {
    setActiveProject(index);
  };

  const getStatusClass = (status) => {
    return status === 'Completed' ? 'status-completed' : 'status-development';
  };

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="projects-detailed-view">
      <div className="projects-container">
        
        {/* Sidebar */}
        <div className="projects-sidebar">
          <div className="sidebar-header">
            <h3 className="sidebar-title">Projects</h3>
            <p className="sidebar-subtitle">Click to explore each project</p>
          </div>
          
          <div className="project-list">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-item ${index === activeProject ? 'active' : ''}`}
                onClick={() => handleProjectSelect(index)}
              >
                <div className="project-item-company">{project.company}</div>
                <div className="project-item-role">{project.role}</div>
                <div className="project-item-duration">{project.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Project Details */}
        <div className="project-details">
          
          <div className="project-header">
            <div className="project-title-section">
              <div className="project-company">{currentProject.company}</div>
              <h1>{currentProject.title}</h1>
              <div className="project-meta-info">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{currentProject.duration}</span>
                </div>
                <div className="meta-item">
                  <Users size={16} />
                  <span>{currentProject.team}</span>
                </div>
              </div>
            </div>
            
            <div className={`status-badge ${getStatusClass(currentProject.status)}`}>
              {currentProject.status}
            </div>
          </div>

          
          <div className="project-content">
            <div className="project-description">
              <p>{currentProject.longDescription}</p>
            </div>

            
            <div className="achievements-section">
              <h3 className="section-title1">
                <Target className="achievement-icon" />
                Key Achievements
              </h3>
              <div className="achievements-grid">
                {currentProject.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-text">
                      <CheckCircle className="achievement-icon" />
                      {achievement}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="technologies-section">
              <h3 className="section-title1">
                <Code size={20} />
                Technologies Used
              </h3>
              <div className="tech-grid">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
          <div className="project-actions">
            <a href={currentProject.github} className="action-button secondary">
              <Github size={16} />
              View Code
            </a>
            <a href={currentProject.live} className="action-button primary">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailedProjects;