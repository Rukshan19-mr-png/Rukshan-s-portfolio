import React from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React']
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Java',  'SQL', 'MongoDB']
  },
  {
    title: 'Tools & Other',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Postman']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section pt-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={`skill-category animate-fade-in delay-${(idx + 1) * 100}`}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
