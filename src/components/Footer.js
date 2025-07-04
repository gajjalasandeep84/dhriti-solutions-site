// Footer.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import eVerifyLogo from '../assets/e-verify-logo.png';
import { Link } from 'react-scroll';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane
} from 'react-icons/fa';

const linkStyle = {
  color: '#94a3b8',
  cursor: 'pointer',
  marginBottom: '0.5rem',
  display: 'inline-block',
  transition: 'color 0.3s ease'
};

const hoverStyle = {
  color: '#10b981'
};

const Footer = ({ onSelectTab }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterStatus('invalid');
      return;
    }

    try {
      await emailjs.send(
        'service_7de2vba',          // <-- Replace with your EmailJS service ID
        'template_9did7be',      // <-- Replace with your EmailJS template ID
        { user_email: newsletterEmail },
        'RbSIEsg3eItd9Q2WL'           // <-- Replace with your EmailJS public key
      );
      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterStatus('error');
    }
    setTimeout(() => setNewsletterStatus(null), 4000);
  };

  return (
    <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '3rem 2rem', fontSize: '0.9rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>

          {/* Brand & Social */}
          <div style={{ flex: '1 1 220px' }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <h2 style={{ color: '#38bdf8' }}>
                Dhriti <span style={{ color: '#10b981' }}>Solutions</span><span style={{ color: '#94a3b8' }}> Inc</span>
              </h2>
            </a>
            <p style={{ margin: '1rem 0' }}>Empowering innovation through AI, people, and purpose.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><FaFacebookF /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><FaTwitter /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><FaLinkedinIn /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><FaInstagram /></a>
            </div>
          </div>

          {/* Services */}
          <div style={{ flex: '1 1 180px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[{ label: "Software Development", tab: "Software" },
              { label: "AI & ML Solutions", tab: "AI ML" },
              { label: "Data Science", tab: "Data Science" },
              { label: "Cybersecurity", tab: "Cybersecurity" },
              { label: "Coaching & Transformation", tab: "Coaching" }].map((item, i) => (
                <li key={i}>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    onClick={() => onSelectTab && onSelectTab(item.tab)}
                    style={linkStyle}
                    onMouseEnter={e => e.target.style.color = hoverStyle.color}
                    onMouseLeave={e => e.target.style.color = linkStyle.color}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div style={{ flex: '1 1 180px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {["About Us", "Careers", "Partners", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item === "Contact Us" ? "contact" : "about"}
                    smooth={true}
                    duration={500}
                    style={linkStyle}
                    onMouseEnter={e => e.target.style.color = hoverStyle.color}
                    onMouseLeave={e => e.target.style.color = linkStyle.color}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div style={{ flex: '1 1 220px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
            <p><FaMapMarkerAlt style={{ marginRight: '8px' }} /> 20 Sutton Dr <br />Cohoes , NY 12047</p>
            <p><FaPhone style={{ marginRight: '8px' }} />(971)-998-5516</p>
            <p><FaEnvelope style={{ marginRight: '8px' }} /> hr@dhriti.solutions</p>

            <p style={{ marginTop: '1.2rem', fontWeight: 'bold' }}>Subscribe to our newsletter</p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', marginTop: '0.5rem' }}>
              <input
                type="email"
                placeholder="Your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{ flex: 1, padding: '0.5rem', border: 'none', borderRadius: '4px 0 0 4px' }}
                required
              />
              <button
                type="submit"
                style={{ backgroundColor: '#14b8a6', border: 'none', padding: '0 1rem', borderRadius: '0 4px 4px 0', color: 'white' }}
              >
                <FaPaperPlane />
              </button>
            </form>
            {newsletterStatus === 'success' && <p style={{ color: '#22c55e', marginTop: '0.5rem' }}>Subscribed successfully!</p>}
            {newsletterStatus === 'error' && <p style={{ color: '#ef4444', marginTop: '0.5rem' }}>Subscription failed. Try again.</p>}
            {newsletterStatus === 'invalid' && <p style={{ color: '#facc15', marginTop: '0.5rem' }}>Enter a valid email address.</p>}
          </div>
        </div>

        <hr style={{ margin: '2rem 0', borderColor: '#1e293b' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '0.8rem', color: '#94a3b8' }}>
          <p>© 2025 Dhriti Solutions. All rights reserved |
            <Link
              to="privacy-policy"
              smooth={true}
              duration={500}
              style={{ ...linkStyle, marginRight: '1rem' }}
              onMouseEnter={e => e.target.style.color = hoverStyle.color}
              onMouseLeave={e => e.target.style.color = linkStyle.color}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">We are a proud participant in the <strong>E-Verify</strong> program.</p>
        <img
          src={eVerifyLogo}
          alt="E-Verify Logo"
          className="mx-auto mt-2 h-10"
          style={{ height: '100px', marginTop: '10px' }}
        />
      </div>

    </footer>
  );
};

export default Footer;
