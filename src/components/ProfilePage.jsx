import React from 'react';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import './ProfilePage.css';

const ProfilePage = ({ user, materials, advertisements, setCurrentView }) => {
  console.log('ProfilePage received user:', user);
  console.log('User role:', user?.role);
  console.log('Role comparison - is student:', user?.role === 'student');
  console.log('Role comparison - is teacher:', user?.role === 'teacher');

  if (!user) {
    return (
      <div className="profile-page">
        <div className="no-profile">
          <div className="no-profile-card">
            <h2 className="no-profile-title">No Profile Found</h2>
            <p className="no-profile-message">
              Please log in to view your profile and access your dashboard.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h2 className="profile-title">My Profile</h2>
          
          <div className="profile-info">
            <div className="info-card">
              <div className="info-label">Username</div>
              <div className="info-value">{user.username || 'N/A'}</div>
            </div>
            
            <div className="info-card">
              <div className="info-label">Email Address</div>
              <div className="info-value">{user.email || 'N/A'}</div>
            </div>
            
            <div className="info-card">
              <div className="info-label">Account Type</div>
              <div className="info-value">
                <span className={`role-badge ${user.role === 'teacher' ? 'role-teacher' : 'role-student'}`}>
                  {user.role === 'teacher' ? 'Teacher' : 'Student'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-section">
          {user.role === 'student' ? (
            <StudentDashboard 
              materials={materials || []} 
              advertisements={advertisements || []} 
              setCurrentView={setCurrentView} 
            />
          ) : user.role === 'teacher' ? (
            <TeacherDashboard setCurrentView={setCurrentView} />
          ) : (
            <div className="no-profile">
              <div className="no-profile-card">
                <h3 className="no-profile-title">Unknown Role</h3>
                <p className="no-profile-message">Role: "{user.role}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
