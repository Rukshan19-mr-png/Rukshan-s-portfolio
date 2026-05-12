import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectsSection.css';

const projectsData = [
  {
    id: 1,
    title: 'Bookfair Reservation System',
    description: 'A full-stack application built for managing book stall reservations. Features include real-time availability tracking, admin dashboard, and automated email confirmations.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    githubLink: 'https://github.com/Rukshan19-mr-png/bookfair-reservation-system',
    liveLink: 'http://localhost:5173/'
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'Interactive analytics dashboard for e-commerce platforms. Visualizes sales data, user metrics, and inventory status with beautiful charts and responsive UI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Express', 'Node.js', 'MongoDB'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'A robust RESTful API for task management with JWT authentication, role-based access control, and comprehensive API documentation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    tags: ['Node.js', 'MongoDB', 'JWT', 'Swagger'],
    githubLink: '#',
    liveLink: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section pt-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id} 
              className={`project-card animate-fade-in delay-${(idx + 1) * 100}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} aria-label="GitHub Repository" className="icon-link">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.liveLink} aria-label="Live Demo" className="icon-link">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
