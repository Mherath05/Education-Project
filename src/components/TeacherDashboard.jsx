import React, { useState } from 'react';
import './TeacherDashboard.css';

const TeacherDashboard = ({ setCurrentView }) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Advertisement request submitted successfully!');
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <div className="teacher-dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">
          <span className="section-icon">👨‍🏫</span>
          Teacher Dashboard
        </h2>
        <button 
          onClick={() => setCurrentView('login')} 
          className="logout-button"
        >
          🚪 Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="section-title">
          <span className="section-icon">📢</span>
          Request Advertisement
        </div>
        
        <form onSubmit={handleSubmit} className="advertisement-form">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Subject/Expertise</label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-input"
              placeholder="e.g., Mathematics, Physics, English"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Advertisement Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Describe your teaching services, experience, and what makes you unique..."
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            📤 Submit Advertisement Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherDashboard;
