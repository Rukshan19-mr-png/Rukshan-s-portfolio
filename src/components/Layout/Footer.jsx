import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="logo gradient-text">Maleesha.</h2>
            <p>Building beautiful and interactive web experiences.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Maleesha Rukshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
