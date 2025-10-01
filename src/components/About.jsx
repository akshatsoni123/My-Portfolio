import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm a Computer Science student at IIIT Pune with a passion for full-stack development
              and problem-solving. Currently working as an SDE Intern at ITJOBxs, where I'm building
              scalable web applications using the MERN stack. I love solving DSA problems and creating
              efficient, user-friendly applications.
            </p>

            <div className="stats">
              <div className="stat-item">
                <h3>2 Months</h3>
                <p>SDE Internship</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-item">
                <h3>IIIT Pune</h3>
                <p>CSE Student</p>
              </div>
            </div>

            <div className="about-details">
              <h3>What I Do</h3>
              <ul>
                <li>🌐 MERN Stack Development</li>
                <li>⚛️ React & Node.js Applications</li>
                <li>💻 Data Structures & Algorithms</li>
                <li>📱 Responsive Web Applications</li>
                <li>🚀 RESTful API Development</li>
                <li>🛠️ Database Design & Management</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="code-preview">
                <div className="code-header">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="title">portfolio.js</span>
                </div>
                <div className="code-content">
                  <pre>
{`const developer = {
  name: "Akshat Soni",
  education: "IIIT Pune - CSE",
  role: "SDE Intern @ ITJOBxs",
  skills: ["MongoDB", "Express", "React", "Node.js"],
  passion: "Building scalable applications",
  currentlyLearning: "Advanced DSA & System Design",
  funFact: "Love solving LeetCode problems!"
};

console.log(developer.passion);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;