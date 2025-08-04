import React from 'react';

const UploadMaterials = ({ materials, setCurrentView }) => (
  <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e9ecef 0%, #f5f5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '700px', background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Upload Learning Materials</h2>
        <button onClick={() => setCurrentView('admin-dashboard')} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Back to Dashboard
        </button>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Material Title:</label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Enter material title" />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Material Type:</label>
            <select style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option>Video Recording</option>
              <option>PDF Document</option>
              <option>Word Document</option>
            </select>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Upload File:</label>
            {/* Upload input can go here */}
          </div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h3>Uploaded Materials</h3>
          {materials.map(material => (
            <div key={material.id} style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{material.title}</strong>
                <p style={{ margin: '5px 0', color: '#666' }}>Type: {material.type} | Uploaded: {material.uploadDate}</p>
              </div>
              <button style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default UploadMaterials;
