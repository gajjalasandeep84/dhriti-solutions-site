import React from 'react';
import logo from '../assets/logo.png'; // Make sure this path is correct
import eVerifyLogo from '../assets/e-verify-logo.png';
function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Logo Section */}
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Dhriti Solutions Logo" style={{ height: '40px', marginRight: '10px' }} />
        <div>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004080' }}>
            Dhriti <span style={{ color: '#2a9d8f' }}>Solutions</span>
          </span>
          <div>
            <img
              src={eVerifyLogo}
              alt="E-Verify"
              style={{
                height: '60px',
                marginLeft: '12px',
                verticalAlign: 'middle',
              }}
            />
          </div>
        </div>
      </div>


      {/* Navigation Links */}
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0 }}>
          <li>
            <button
              onClick={() => {
                const el = document.getElementById('home');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                font: 'inherit',
                padding: 0
              }}
            >
              Home
            </button>
          </li>
          <li><a href="#services" style={navStyle}>Services</a></li>
          <li><a href="#industries" style={navStyle}>Industries</a></li>
          <li><a href="#about" style={navStyle}>About</a></li>
          <li><a href="#partners" style={navStyle}>Partners</a></li>
          <li><a href="#contact" style={navStyle}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const navStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  fontSize: '1rem'
};

export default Header;
