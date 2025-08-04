import React, { useState } from 'react';
import { loginWithUsername, getUserData } from '../services/firebaseService';
import './LoginPage.css';

const LoginPage = ({ setCurrentView, setCurrentUser, setUserRole }) => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Admin credentials
  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');

    try {
      console.log('Login attempt with:', loginForm);
      
      // Check if admin login
      if (loginForm.username === adminCredentials.username && loginForm.password === adminCredentials.password) {
        console.log('Admin login successful');
        setUserRole('admin');
        setCurrentView('admin-dashboard');
        setCurrentUser({ username: 'admin', role: 'admin', email: 'admin@system.com' });
        setLoginForm({ username: '', password: '' });
        return;
      }

      // Firebase authentication with username
      console.log('Attempting Firebase login...');
      const userCredential = await loginWithUsername(loginForm.username, loginForm.password);
      const user = userCredential.user;
      console.log('Firebase user:', user);
      
      // Get user data from Firestore
      const userData = await getUserData(user.uid);
      console.log('User data from Firestore:', userData);
      
      if (userData) {
        const fullUserData = { 
          ...userData, 
          email: user.email,
          uid: user.uid 
        };
        
        console.log('Setting current user to:', fullUserData);
        setUserRole(userData.role);
        setCurrentView('home');
        setCurrentUser(fullUserData);
      } else {
        throw new Error('User data not found in database');
      }
      
      setLoginForm({ username: '', password: '' });
      
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        {loginError && <div className="login-error">{loginError}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              value={loginForm.username}
              onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              value={loginForm.password}
              onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <button 
          onClick={() => setCurrentView('register')} 
          className="secondary-button"
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
