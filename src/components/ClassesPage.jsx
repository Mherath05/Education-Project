import React from 'react';

const ClassesPage = () => (
  <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e9ecef 0%, #f5f5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ padding: '40px', textAlign: 'center', background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
      <h1>Classes</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        Here you will find all available classes and materials.
      </p>
    </div>
  </div>
);

export default ClassesPage;
