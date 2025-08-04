import React from 'react';

const PaymentManagement = ({ students, setStudents, setCurrentView }) => (
  <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e9ecef 0%, #f5f5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '900px', background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Payment Management</h2>
        <button onClick={() => setCurrentView('admin-dashboard')} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Back to Dashboard
        </button>
      </div>
      <div style={{ marginBottom: '30px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h3>Monthly Payment Cycle</h3>
        <p>Current Month: August 2024</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
          Reset All Payments for New Month
        </button>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Generate Payment Report
        </button>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Student Name</th>
              <th style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Payment Status</th>
              <th style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Last Payment Date</th>
              <th style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{student.name}</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
                  <span style={{ 
                    padding: '5px 10px', 
                    borderRadius: '20px', 
                    backgroundColor: student.paymentStatus ? '#d4edda' : '#f8d7da',
                    color: student.paymentStatus ? '#155724' : '#721c24',
                    fontSize: '12px'
                  }}>
                    {student.paymentStatus ? 'PAID' : 'PENDING'}
                  </span>
                </td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #eee' }}>{student.lastPayment}</td>
                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
                  <button 
                    onClick={() => {
                      const updated = students.map(s => 
                        s.id === student.id ? { ...s, paymentStatus: true, lastPayment: new Date().toISOString().split('T')[0] } : s
                      );
                      setStudents(updated);
                    }}
                    disabled={student.paymentStatus}
                    style={{ 
                      padding: '5px 15px', 
                      backgroundColor: student.paymentStatus ? '#6c757d' : '#28a745',
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: student.paymentStatus ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {student.paymentStatus ? 'Already Paid' : 'Mark as Paid'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default PaymentManagement;
