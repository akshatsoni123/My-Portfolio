import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Akshat Soni</h3>
            <p>Full Stack Developer passionate about creating amazing digital experiences.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/akshatsoni123" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Akshat Soni. All rights reserved.</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;