

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [intern, setIntern] = useState(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');

  useEffect(() => {
    if (page === 'dashboard') {
      fetch('http://localhost:5000/api/intern')
        .then(res => res.json())
        .then(data => setIntern(data));
    }
  }, [page]);

  const handleLogin = (e) => {
    e.preventDefault();
    setPage('dashboard');
  };

  // Dashboard data
  let dashboardName = formName || (intern && intern.name) || '...';
  let dashboardReferral = dashboardName !== '...' ? `${dashboardName.replace(/\s+/g, '').toLowerCase()}2025` : (intern && intern.referralCode) || '...';
  // Generate a dummy donation amount based on the entered name
  let dashboardDonations = dashboardName !== '...'
    ? (1000 + dashboardName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0))
    : (intern ? intern.totalDonations : '...');
  let dashboardRewards = intern ? intern.rewards : [];

  if (page === 'login') {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Intern Dashboard Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <input type="text" placeholder="Name" required value={formName} onChange={e => setFormName(e.target.value)} style={{ padding: '8px', width: '200px' }} />
            <input type="email" placeholder="Email" required value={formEmail} onChange={e => setFormEmail(e.target.value)} style={{ padding: '8px', width: '200px' }} />
            <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
          </form>
          <p style={{ marginTop: '20px' }}>Or <span style={{ color: '#61dafb', cursor: 'pointer' }} onClick={() => setPage('signup')}>Sign Up</span></p>
        </header>
      </div>
    );
  }

  if (page === 'signup') {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Intern Dashboard Signup</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <input type="text" placeholder="Name" required value={formName} onChange={e => setFormName(e.target.value)} style={{ padding: '8px', width: '200px' }} />
            <input type="email" placeholder="Email" required value={formEmail} onChange={e => setFormEmail(e.target.value)} style={{ padding: '8px', width: '200px' }} />
            <input type="password" placeholder="Password" required style={{ padding: '8px', width: '200px' }} />
            <button type="submit" style={{ padding: '8px 16px' }}>Sign Up</button>
          </form>
          <p style={{ marginTop: '20px' }}>Already have an account? <span style={{ color: '#61dafb', cursor: 'pointer' }} onClick={() => setPage('login')}>Login</span></p>
        </header>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome, {dashboardName}</h2>
        <div style={{ margin: '20px 0' }}>
          <strong>Referral Code:</strong> {dashboardReferral}
        </div>
        <div style={{ margin: '20px 0' }}>
          <strong>Total Donations Raised:</strong> ${dashboardDonations}
        </div>
        <div style={{ margin: '20px 0' }}>
          <h3>Rewards & Unlockables</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {dashboardRewards.map((reward, idx) => (
              <li key={idx} style={{ background: '#444', margin: '8px 0', padding: '8px 16px', borderRadius: '8px' }}>{reward}</li>
            ))}
          </ul>
        </div>
        <button style={{ marginTop: '20px', padding: '8px 16px' }} onClick={() => { setPage('login'); setFormName(''); setFormEmail(''); }}>Logout</button>
      </header>
    </div>
  );
}

export default App;
