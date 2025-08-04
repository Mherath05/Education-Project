import React from 'react';
import './StudentDashboard.css';

const StudentDashboard = ({ materials, advertisements, setCurrentView }) => (
  <div className="student-dashboard">
    <div className="dashboard-header">
      <h2 className="dashboard-title">
        <span className="section-icon">🎓</span>
        Student Dashboard
      </h2>
      <button 
        onClick={() => setCurrentView('login')} 
        className="logout-button"
      >
        🚪 Logout
      </button>
    </div>
    
    <div className="dashboard-grid">
      <div className="materials-section">
        <div className="section-title">
          <span className="section-icon">📚</span>
          Available Materials
        </div>
        
        <div className="materials-list">
          {materials && materials.length > 0 ? (
            materials.map(material => (
              <div key={material.id} className="material-item">
                <div className="material-info">
                  <h4>{material.title}</h4>
                  <p className="material-meta">
                    📄 Type: {material.type} | 📅 Uploaded: {material.uploadDate}
                  </p>
                </div>
                <button className="download-button">
                  ⬇️ Download
                </button>
              </div>
            ))
          ) : (
            <div className="no-materials">
              <div className="no-materials-icon">📭</div>
              <p>No materials available at the moment.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="sidebar">
        <div className="payment-section">
          <div className="section-title">
            <span className="section-icon">💳</span>
            Payment Status
          </div>
          
          <div className="payment-info">
            📅 Current Month: August 2024
          </div>
          
          <button className="payment-button">
            ✅ Mark Payment Done
          </button>
        </div>
        
        <div className="ads-section">
          <div className="section-title">
            <span className="section-icon">👨‍🏫</span>
            Teacher Ads
          </div>
          
          <div className="ads-list">
            {advertisements && advertisements.filter(ad => ad.status === 'approved').length > 0 ? (
              advertisements.filter(ad => ad.status === 'approved').map(ad => (
                <div key={ad.id} className="ad-item">
                  <h5 className="ad-teacher">👨‍🏫 {ad.teacherName}</h5>
                  <p className="ad-subject">📖 {ad.subject}</p>
                  <p className="ad-message">{ad.message}</p>
                </div>
              ))
            ) : (
              <div className="no-ads">
                <p>No teacher advertisements available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
