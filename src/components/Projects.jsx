import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Job-Resume Recommendation System",
      description: "An AI-powered system that matches job seekers with relevant positions using machine learning algorithms. Features resume parsing, job matching, and intelligent recommendations.",
      image: "/placeholder-project1.jpg",
      technologies: ["Python", "Machine Learning", "NLP", "Flask", "Pandas"],
      githubLink: "https://github.com/akshatsoni123/JOB-RESUME-RECOMMENDATION-SYSTEM",
      liveLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "A real-time chat application with WebSocket integration for instant messaging, user authentication, and responsive UI for seamless communication.",
      image: "/placeholder-project2.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js"],
      githubLink: "https://github.com/akshatsoni123/Chat-App",
      liveLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Live Polling System",
      description: "An interactive real-time polling system featuring live vote updates, multiple poll types, and comprehensive admin controls for poll management.",
      image: "/placeholder-project3.jpg",
      technologies: ["React", "Node.js", "Socket.io", "Express.js", "MongoDB"],
      githubLink: "https://github.com/akshatsoni123/Live-Poll-System",
      liveLink: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="image-placeholder">
                  <span>📱</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/akshatsoni123" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;