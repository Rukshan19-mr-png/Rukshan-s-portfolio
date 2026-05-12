import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section pt-section">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-content">
          <div className="about-text animate-fade-in">
            <p>
              I am a dedicated software engineering student with a strong passion for developing 
              efficient and scalable web applications. My journey in tech started with a curiosity 
              about how websites work, which quickly turned into a love for coding and problem-solving.
            </p>
            <p>
              Currently, I am expanding my knowledge in modern full-stack technologies, 
              focusing on the React ecosystem, Node.js, and expressive UI/UX design. When I'm not coding, 
              I enjoy reading tech blogs and contributing to the open-source community.
            </p>
          </div>
          
          <div className="about-cards animate-fade-in delay-200">
            <div className="about-card">
              <div className="card-icon">
                <BookOpen size={28} />
              </div>
              <h3>Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>BSc (Hons) in Software Engineering</h4>
                  <p>University of Kelaniya, Sri Lanka</p>
                  <span>2024 - Present</span>
                </div>
                <div className="timeline-item">
                  <h4>G.C.E. Advanced Level</h4>
                  <p>St.Mary's college, Kegalle</p>
                  <span>Completed 2022</span>
                </div>
              </div>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <Award size={28} />
              </div>
              <h3>Certifications</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Co-chair Person</h4>
                  <p>Junior Hackathon</p>
                  <span>2025</span>
                </div>
                <div className="timeline-item">
                  <h4>Responsive Web Design</h4>
                  <p>FreeCodeCamp</p>
                  <span>2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
