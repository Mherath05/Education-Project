import React, { useEffect } from 'react';
import './HomePage.css';
import nuwanPhoto from '../assets/nuwan.jpg'; 
const HomePage = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Sir Nuwan's Accounting Learning Platform</h1>
            <p className="hero-subtitle">Learn accounting in a simple and effective way!</p>
            <div className="hero-cta">
              <a href="#" className="cta-btn primary">
                🚀 Get Started
              </a>
              <a href="#" className="cta-btn secondary">
                🔑 Login to Learn
              </a>
            </div>
          </div>
  <div className="hero-image">
  <div className="teacher-photo">
    <img src={nuwanPhoto} alt="Sir Nuwan" className="photo" />
  </div>
</div>

        </div>
      </section>

      {/* About Sir Nuwan */}
      <section className="about-section animate-on-scroll">
        <div className="about-container">
          <div className="about-image">
            👨‍🎓
          </div>
          <div className="about-content">
            <h2>About Sir Nuwan</h2>
            <p>
              With over 15 years of experience in teaching accounting, Sir Nuwan has helped thousands of students 
              master the fundamentals of accounting and achieve their academic goals. His unique teaching methodology 
              simplifies complex accounting concepts and makes learning enjoyable.
            </p>
            <p>
              Sir Nuwan holds a Master's degree in Accounting and is passionate about making quality education 
              accessible to all students. His proven track record and dedication to student success make him 
              one of the most sought-after accounting instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="courses-section animate-on-scroll">
        <div className="courses-container">
          <h2 className="section-title">Course Overview</h2>
          <div className="courses-grid">
            <div className="course-card">
              <span className="course-icon">📊</span>
              <h3 className="course-title">Basic Accounting</h3>
              <p className="course-description">
                Learn the fundamental principles of accounting, including the accounting equation, 
                double-entry bookkeeping, and basic financial statements.
              </p>
            </div>
            <div className="course-card">
              <span className="course-icon">⚖️</span>
              <h3 className="course-title">Trial Balance</h3>
              <p className="course-description">
                Master the preparation and analysis of trial balances, error detection, 
                and correction techniques in accounting records.
              </p>
            </div>
            <div className="course-card">
              <span className="course-icon">📈</span>
              <h3 className="course-title">Financial Statements</h3>
              <p className="course-description">
                Complete guide to preparing income statements, balance sheets, 
                and cash flow statements with practical examples.
              </p>
            </div>
            <div className="course-card">
              <span className="course-icon">💰</span>
              <h3 className="course-title">Cost Accounting</h3>
              <p className="course-description">
                Understand cost classification, allocation methods, and cost control 
                techniques for effective business management.
              </p>
            </div>
            <div className="course-card">
              <span className="course-icon">🏦</span>
              <h3 className="course-title">Bank Reconciliation</h3>
              <p className="course-description">
                Learn to prepare bank reconciliation statements and identify 
                discrepancies between bank and book records.
              </p>
            </div>
            <div className="course-card">
              <span className="course-icon">📋</span>
              <h3 className="course-title">Advanced Topics</h3>
              <p className="course-description">
                Explore advanced accounting concepts including depreciation, 
                provisions, and partnership accounting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access-section animate-on-scroll">
        <div className="quick-access-container">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-access-grid">
            <a href="#" className="quick-access-item">
              <span className="quick-access-icon">🎥</span>
              <span className="quick-access-title">Watch Lessons</span>
            </a>
            <a href="#" className="quick-access-item">
              <span className="quick-access-icon">📚</span>
              <span className="quick-access-title">Download Notes</span>
            </a>
            <a href="#" className="quick-access-item">
              <span className="quick-access-icon">📝</span>
              <span className="quick-access-title">Assignments</span>
            </a>
            <a href="#" className="quick-access-item">
              <span className="quick-access-icon">📄</span>
              <span className="quick-access-title">Past Papers</span>
            </a>
            <a href="#" className="quick-access-item">
              <span className="quick-access-icon">🎯</span>
              <span className="quick-access-title">Join Live Class</span>
            </a>
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="notices-section animate-on-scroll">
        <div className="notices-container">
          <h2 className="section-title">Notices & Announcements</h2>
          <div className="notice-item">
            <div className="notice-date">August 20, 2025</div>
            <div className="notice-text">📚 Mid-term Examination scheduled - Prepare for Basic Accounting and Trial Balance topics</div>
          </div>
          <div className="notice-item">
            <div className="notice-date">August 15, 2025</div>
            <div className="notice-text">📖 New study notes for Financial Statements chapter have been uploaded to the platform</div>
          </div>
          <div className="notice-item">
            <div className="notice-date">August 10, 2025</div>
            <div className="notice-text">🎥 Special live session on Cost Accounting this weekend - Don't miss it!</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section animate-on-scroll">
        <div className="testimonials-container">
          <h2 className="section-title">What Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Sir Nuwan's teaching method is amazing! He makes complex accounting concepts so easy to understand. 
                I improved my grades significantly after joining his classes."
              </p>
              <div className="testimonial-author">- Saman Perera, Grade 12</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "The best accounting teacher I've ever had. His notes are comprehensive and the live sessions are 
                incredibly helpful. Highly recommend to anyone struggling with accounting."
              </p>
              <div className="testimonial-author">- Nimali Silva, A/L Student</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <h3>Contact & Support</h3>
            <div>
              <a href="mailto:sirnuwanclasses@gmail.com" className="contact-item">
                📧 sirnuwanclasses@gmail.com
              </a>
              <a href="tel:+94771234567" className="contact-item">
                📱 +94 77 123 4567
              </a>
              <a href="https://wa.me/94771234567" className="contact-item">
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📺</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
          </div>
          
          <p>&copy; 2025 Sir Nuwan's Accounting Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;