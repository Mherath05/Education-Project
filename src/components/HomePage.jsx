import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">
          Welcome to EduLearn
        </h1>
        <p className="homepage-subtitle">
          Empowering minds through innovative learning experiences. 
          Access world-class education, connect with expert instructors, 
          and achieve your academic goals.
        </p>
        
        <div className="homepage-features">
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3 className="feature-title">Quality Courses</h3>
            <p className="feature-description">
              Access comprehensive learning materials and resources
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">👨‍🏫</span>
            <h3 className="feature-title">Expert Teachers</h3>
            <p className="feature-description">
              Learn from experienced and qualified instructors
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3 className="feature-title">Track Progress</h3>
            <p className="feature-description">
              Monitor your learning journey and achievements
            </p>
          </div>
        </div>
        
        <div className="homepage-cta">
          <button className="cta-button primary">
            🚀 Start Learning
          </button>
          <button className="cta-button secondary">
            📞 Contact Support
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
