import React, { useState } from 'react';
import { registerUser } from '../services/firebaseService';
import './RegistrationForm.css';

const RegistrationForm = ({ onRegister, setCurrentView }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.username) {
      setError('Please fill in all fields.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Attempting to register user...');
      await registerUser(form.email, form.password, {
        username: form.username,
        role: form.role
      });
      
      console.log('Registration successful!');
      if (onRegister) onRegister(form);
      if (setCurrentView) setCurrentView('login');
    } catch (error) {
      console.error('Registration error:', error);
      setError(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2 className="registration-title">Create Account</h2>
        {error && <div className="registration-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Choose a username"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Create a password"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="form-select"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
          
          <button 
            type="button" 
            onClick={() => setCurrentView && setCurrentView('login')} 
            className="secondary-button"
          >
            Already have an account? Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
