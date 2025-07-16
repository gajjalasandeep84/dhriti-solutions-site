// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy">
      {/* Banner Header */}
      <div style={{
        background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Privacy Policy</h1>
      </div>

      {/* Policy Content */}
      <div style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', fontSize: '1rem', color: '#334155' }}>
        <h2>Introduction</h2>
        <p>At Dhriti Solutions Inc., we are committed to safeguarding the privacy of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with us through our website, services, and communications.</p>

        <h2>Who We Are</h2>
        <p>Dhriti Solutions Inc. is a technology solutions provider specializing in software development, AI/ML services, data science, cybersecurity, coaching, consulting, and staffing solutions. Our headquarters are located in Cohoe, NY, USA.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li><strong>Information You Provide:</strong> When you fill out forms on our website, subscribe to our newsletters, contact us for inquiries, or engage our services, you may provide us with personal details such as your name, email address, phone number, company name, and job title.</li>
          <li><strong>Automated Information:</strong> We may collect information about your visit to our website, including your IP address, browser type, operating system, pages viewed, and the dates/times of your visits.</li>
          <li><strong>Third-Party Sources:</strong> We may receive information about you from third-party sources, such as social media platforms or marketing partners.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li><strong>Service Delivery:</strong> To provide our services and respond to your inquiries.</li>
          <li><strong>Communication:</strong> To send newsletters, marketing materials, and updates.</li>
          <li><strong>Improvement:</strong> To analyze and enhance our website and services.</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws and protect our rights.</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. We may share it with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Who assist us under confidentiality agreements.</li>
          <li><strong>Legal Requirements:</strong> To comply with law enforcement or other legal processes.</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to secure your information, but no system is completely secure.</p>

        <h2>Your Rights</h2>
        <p>You may have rights including access, correction, deletion, objection, restriction, and portability of your personal data. To exercise these, contact us at the address below.</p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar technologies for user experience, traffic analytics, and marketing. You can adjust your browser settings to manage cookies.</p>

        <h2>Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy periodically. We encourage you to review it regularly.</p>

        <h2>Contact Us</h2>
        <p><strong>Dhriti Solutions Inc.</strong><br />
        20 Sutton Dr<br />
        Cohoes, NY 12047<br />
        Phone: (971)-998-5516<br />
        Email: hr@dhriti.solutions</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
