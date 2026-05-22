import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const fallbackEmail = 'maleesharukshan19@gmail.com';

  const createMailToLink = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio message');
    const body = encodeURIComponent(
      `Name: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\n${formData.message || ''}`
    );
    return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors above.');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('subject', formData.subject);
      submissionData.append('message', formData.message);
      submissionData.append('_replyto', formData.email);
      submissionData.append('_subject', `New message from ${formData.name}`);
      submissionData.append('_template', 'table');
      submissionData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/maleesharukshan19@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: submissionData
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      if (data.success !== 'true' && data.success !== true) {
        throw new Error(data.message || 'Email service rejected the request');
      }

      setSubmitStatus('success');
      setSubmitMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form submit error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Unable to send your message right now. Please try again later. You can also email me directly.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section pt-section">
      <div className="container">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        
        <div className="contact-container animate-fade-in">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p className="contact-desc">
              I'm currently open for new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>maleesharukshan19@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+94 77 887 0865</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Dalugama, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  className={errors.name ? 'error-input' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className={errors.email ? 'error-input' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  className={errors.subject ? 'error-input' : ''}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange}
                  className={errors.message ? 'error-input' : ''}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">{submitMessage || 'Message sent successfully!'}</div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-error">
                  {submitMessage || 'Please fix the errors above.'}
                  <div className="fallback-link">
                    <a href={createMailToLink()} target="_blank" rel="noreferrer">Send email directly</a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
