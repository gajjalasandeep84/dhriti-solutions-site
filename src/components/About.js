import React from 'react';

function About() {
  return (
    <section id="about">
      {/* Gradient Banner Intro */}
      <div style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Dhriti Solutions is a full-service technology and consulting firm dedicated to empowering
            organizations through innovative technology solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ fontWeight: 'bold' }}>Our Mission</h2>
          <p>
            Our mission is to help organizations reach their highest potential by delivering innovative technology solutions that generate meaningful business results and lasting human impact.
          </p>
          <p>
            We are dedicated to excellence, upholding the highest ethical standards, and building long-term partnerships grounded in trust, transparency, and mutual success.
          </p>
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ fontWeight: 'bold' }}>Our Vision</h2>
          <p>
            We envision a future where technology naturally extends human potential, enabling organizations and communities to become more efficient, sustainable, and equitable on a global scale.
          </p>
          <p>
            Dhriti Solutions is committed to leading this transformation, earning recognition as the trusted partner for organizations navigating complex technological challenges and pursuing innovation-driven growth.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div style={{
        textAlign: 'center',
        backgroundColor: '#eef3f9',
        padding: '3rem 2rem',
        borderRadius: '8px',
        maxWidth: '900px',
        margin: '2rem auto'
      }}>
        <h2 style={{ fontWeight: 'bold' }}>Our Core Values</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
        Our core values shape every decision we make and reflect the foundation of who we are as a company.
        They guide how we work, how we collaborate, and how we deliver impact to our clients and communities.
        </p>
      </div>
    </section>
  );
}

export default About;
