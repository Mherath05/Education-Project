import React from 'react';

const ContactPage = () => (
  <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e9ecef 0%, #f5f5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ padding: '40px', textAlign: 'center', background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        For support or inquiries, email us at <a href="mailto:support@lms.com">support@lms.com</a> or call 123-456-7890.
      </p>
    </div>
  </div>
);

export default ContactPage;
