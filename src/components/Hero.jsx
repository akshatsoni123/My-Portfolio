import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Akshat Soni</span>
            </h1>
            <h2 className="title">MERN Stack Developer | DSA Enthusiast</h2>
            <p className="subtitle">
              SDE Intern at ITJOBxs | Computer Science Student at IIIT Pune |
              Building scalable web applications with modern technologies and problem-solving mindset.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img
                src="/profile.jpj.jpg"
                alt="Akshat Soni"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback" style={{ display: 'none' }}>
                <svg viewBox="0 0 200 200" className="avatar-svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ffed4e', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="70" r="35" fill="url(#grad1)"/>
                  <circle cx="100" cy="155" r="55" fill="url(#grad1)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;