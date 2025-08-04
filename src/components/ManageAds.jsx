import React from 'react';

const ManageAds = ({ advertisements, setAdvertisements, setCurrentView }) => (
  <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e9ecef 0%, #f5f5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '900px', background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Manage Advertisements</h2>
        <button onClick={() => setCurrentView('admin-dashboard')} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Back to Dashboard
        </button>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }}>
        {advertisements.map(ad => (
          <div key={ad.id} style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{ad.teacherName}</h4>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#007bff' }}>{ad.subject}</p>
                <p style={{ margin: '0 0 10px 0', color: '#666' }}>{ad.message}</p>
                <span style={{ 
                  padding: '5px 10px', 
                  borderRadius: '20px', 
                  backgroundColor: ad.status === 'approved' ? '#d4edda' : '#fff3cd',
                  color: ad.status === 'approved' ? '#155724' : '#856404',
                  fontSize: '12px'
                }}>
                  {ad.status.toUpperCase()}
                </span>
              </div>
              <div style={{ marginLeft: '20px' }}>
                {ad.status === 'pending' && (
                  <>
                    <button 
                      onClick={() => {
                        const updated = advertisements.map(a => 
                          a.id === ad.id ? { ...a, status: 'approved' } : a
                        );
                        setAdvertisements(updated);
                      }}
                      style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}
                    >
                      Approve
                    </button>
                    <button style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      Reject
                    </button>
                  </>
                )}
                {ad.status === 'approved' && (
                  <button style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ManageAds;
