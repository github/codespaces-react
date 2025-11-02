import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/" className="navbar-logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Voice Bharat</Link>
        <ul className="nav-menu" style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
          <li className="nav-item">
            <Link to="/social" className="nav-link" style={{ textDecoration: 'none', color: '#007bff' }}>Social Feed</Link>
          </li>
          <li className="nav-item">
            <Link to="/raise-issue" className="nav-link" style={{ textDecoration: 'none', color: '#007bff' }}>Raise Issue</Link>
          </li>
          <li className="nav-item">
            <Link to="/fundraisers" className="nav-link" style={{ textDecoration: 'none', color: '#007bff' }}>Fundraisers</Link>
          </li>
          <li className="nav-item">
            <Link to="/protests" className="nav-link" style={{ textDecoration: 'none', color: '#007bff' }}>Protests</Link>
          </li>
        </ul>
        <div className="search-container" style={{ display: 'flex', gap: '0.5rem' }}>
          <input type="text" placeholder="Search..." aria-label="search" style={{ padding: '0.5rem', border: '1px solid #ced4da', borderRadius: '4px' }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;