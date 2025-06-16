import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import eVerifyLogo from '../assets/e-verify-logo.png';

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const getLinkStyle = (sectionId) =>
    sectionId === activeSection
      ? { ...navStyle, color: '#2a9d8f', fontWeight: '700' }
      : navStyle;

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={logo} alt="Dhriti Solutions Logo" style={{ height: '40px' }} />
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004080' }}>
            Dhriti <span style={{ color: '#2a9d8f' }}>Solutions</span>
          </div>
        </div>
        <img
          src={eVerifyLogo}
          alt="E-Verify"
          style={{ height: '64px', marginLeft: '24px' }}
        />
      </div>

      <nav>
        <ul style={navListStyle}>
          <li><a href="#home" style={getLinkStyle('home')}>Home</a></li>
          <li><a href="#services" style={getLinkStyle('services')}>Services</a></li>
          <li><a href="#industries" style={getLinkStyle('industries')}>Industries</a></li>
          <li><a href="#about" style={getLinkStyle('about')}>About</a></li>
          <li><a href="#partners" style={getLinkStyle('partners')}>Partners</a></li>
          <li><a href="#contact" style={getLinkStyle('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Styling
const headerStyle = {
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
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  flexWrap: 'wrap'
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1.5rem',
  margin: 0,
  padding: 0
};

const navStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'all 0.3s ease'
};

export default Header;
