import React from 'react';

const AdminDashboard = ({ students, advertisements, setCurrentView }) => (
  <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e9ecef 0%, #f5f5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '900px', background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Admin Dashboard</h2>
        <button onClick={() => setCurrentView('login')} style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <button onClick={() => setCurrentView('upload-materials')} style={{ padding: '20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>Upload Materials</button>
        <button onClick={() => setCurrentView('manage-students')} style={{ padding: '20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>Manage Students</button>
        <button onClick={() => setCurrentView('manage-ads')} style={{ padding: '20px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>Manage Advertisements</button>
        <button onClick={() => setCurrentView('payment-management')} style={{ padding: '20px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>Payment Management</button>
      </div>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h3>Quick Stats</h3>
        <p>Total Students: {students.length}</p>
        <p>Paid This Month: {students.filter(s => s.paymentStatus).length}</p>
        <p>Pending Advertisements: {advertisements.filter(ad => ad.status === 'pending').length}</p>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
