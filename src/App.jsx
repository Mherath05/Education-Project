import React, { useState, useEffect } from 'react';
import { getStudents, getMaterials, getAdvertisements } from './services/firebaseService';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ClassesPage from './components/ClassesPage';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';
import RegistrationForm from './components/RegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import UploadMaterials from './components/UploadMaterials';
import ManageStudents from './components/ManageStudents';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import ManageAds from './components/ManageAds';
import PaymentManagement from './components/PaymentManagement';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const [currentView, setCurrentView] = useState('register');
  const [userRole, setUserRole] = useState('');

  // Load data from Firebase on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [studentsData, materialsData, adsData] = await Promise.all([
          getStudents(),
          getMaterials(),
          getAdvertisements()
        ]);
        setStudents(studentsData);
        setMaterials(materialsData);
        setAdvertisements(adsData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  // Add this useEffect to monitor currentUser changes
  useEffect(() => {
    console.log('Current user changed:', currentUser);
  }, [currentUser]);

  // Navigation for home page
  const handleNav = (page) => {
    setCurrentView(page);
  };

  let viewComponent; // Add this line

  switch(currentView) {
    case 'register':
      viewComponent = <RegistrationForm onRegister={form => { setRegisteredUsers([...registeredUsers, form]); setCurrentView('login'); }} setCurrentView={setCurrentView} />;
      break;
    case 'login':
      viewComponent = <LoginPage 
        setCurrentView={setCurrentView} 
        setCurrentUser={setCurrentUser} 
        setUserRole={setUserRole} 
      />;
      break;
    case 'home':
      viewComponent = <>
        <Navbar onNavigate={handleNav} />
        <HomePage />
      </>;
      break;
    case 'classes':
      viewComponent = <>
        <Navbar onNavigate={handleNav} />
        <ClassesPage />
      </>;
      break;
    case 'contact':
      viewComponent = <>
        <Navbar onNavigate={handleNav} />
        <ContactPage />
      </>;
      break;
    case 'profile':
      viewComponent = <>
        <Navbar onNavigate={handleNav} />
        <ProfilePage 
          user={currentUser} 
          materials={materials}
          advertisements={advertisements}
          setCurrentView={setCurrentView}
        />
      </>;
      break;
    case 'admin-dashboard':
      viewComponent = <AdminDashboard students={students} advertisements={advertisements} setCurrentView={setCurrentView} />;
      break;
    case 'upload-materials':
      viewComponent = <UploadMaterials materials={materials} setCurrentView={setCurrentView} />;
      break;
    case 'manage-students':
      viewComponent = <ManageStudents students={students} setStudents={setStudents} setCurrentView={setCurrentView} />;
      break;
    case 'manage-ads':
      viewComponent = <ManageAds advertisements={advertisements} setAdvertisements={setAdvertisements} setCurrentView={setCurrentView} />;
      break;
    case 'payment-management':
      viewComponent = <PaymentManagement students={students} setStudents={setStudents} setCurrentView={setCurrentView} />;
      break;
    case 'student-dashboard':
      viewComponent = <StudentDashboard materials={materials} advertisements={advertisements} setCurrentView={setCurrentView} />;
      break;
    case 'teacher-dashboard':
      viewComponent = <TeacherDashboard setCurrentView={setCurrentView} />;
      break;
    default:
      viewComponent = <RegistrationForm onRegister={form => { setRegisteredUsers([...registeredUsers, form]); setCurrentView('login'); }} setCurrentView={setCurrentView} />;
      break;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
      {viewComponent}
    </div>
  );
};

export default App;
















