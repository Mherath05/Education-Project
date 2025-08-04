import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/firebaseService';
import './AdminDashboard.css';

const AdminDashboard = ({ students, advertisements, setCurrentView }) => {
  const [localStudents, setLocalStudents] = useState(students || []);
  
  useEffect(() => {
    const loadStudents = async () => {
      try {
        console.log('Loading students from Firebase...');
        const studentsData = await getStudents();
        console.log('Students loaded:', studentsData);
        setLocalStudents(studentsData);
      } catch (error) {
        console.error('Error loading students:', error);
      }
    };
    
    loadStudents();
  }, []);

  console.log('Current students count:', localStudents.length);
  
  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">
            <span className="admin-icon">👑</span>
            Welcome Nuwan
          </h1>
          <button onClick={() => setCurrentView('login')} className="logout-btn">
            <span>🚪</span>
            Logout
          </button>
        </div>

        <div className="admin-grid">
          <div className="admin-stats">
            <div className="section-title">
              <span className="section-icon">📊</span>
              System Overview
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">
                  <span className="stat-icon">�‍🎓</span>
                  {localStudents.length}
                </div>
                <div className="stat-label">Total Students</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">
                  <span className="stat-icon">✅</span>
                  {localStudents.filter(s => s.paymentStatus).length}
                </div>
                <div className="stat-label">Paid This Month</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">
                  <span className="stat-icon">⏳</span>
                  {advertisements.filter(ad => ad.status === 'pending').length}
                </div>
                <div className="stat-label">Pending Ads</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">
                  <span className="stat-icon">�</span>
                  {Math.round((localStudents.filter(s => s.paymentStatus).length / Math.max(localStudents.length, 1)) * 100)}%
                </div>
                <div className="stat-label">Payment Rate</div>
              </div>
            </div>
          </div>

          <div className="admin-actions">
            <div className="section-title">
              <span className="section-icon">⚡</span>
              Quick Actions
            </div>
            
            <div className="action-buttons">
              <button 
                onClick={() => setCurrentView('upload-materials')} 
                className="action-btn btn-upload"
              >
                <span className="btn-icon">�</span>
                <span>Upload Materials</span>
              </button>
              
              <button 
                onClick={() => setCurrentView('manage-students')} 
                className="action-btn btn-students"
              >
                <span className="btn-icon">👥</span>
                <span>Manage Students</span>
              </button>
              
              <button 
                onClick={() => setCurrentView('manage-ads')} 
                className="action-btn btn-ads"
              >
                <span className="btn-icon">📢</span>
                <span>Manage Ads</span>
              </button>
              
              <button 
                onClick={() => setCurrentView('payment-management')} 
                className="action-btn btn-payments"
              >
                <span className="btn-icon">�</span>
                <span>Payments</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
