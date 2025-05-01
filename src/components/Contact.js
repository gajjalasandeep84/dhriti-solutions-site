import React from 'react';

function Contact() {
  return (
    <section id="contact">
      {/* Top Banner */}
      <div style={{
        padding: '4rem 2rem',
        marginTop: '2rem',     // ✅ Add this line
        background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Get in Touch</h1>
        <p style={{ marginTop: '1rem' }}>
          Let's discuss how we can help transform your business with innovative technology solutions.
        </p>
      </div>

      {/* Info Cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
        flexWrap: 'wrap',
        backgroundColor: '#f9f9f9'
      }}>
        <ContactCard icon="📞" title="Call Us" text="Speak directly with our experts" info="+1 (518) 111-1234" />
        <ContactCard icon="📧" title="Email Us" text="Send us your inquiries anytime" info="hr@dhriti.solutions" />
        <ContactCard icon="⏰" title="Business Hours" text="We’re available:" info="Mon–Fri: 9:00 AM – 5:00 PM EST" />
      </div>

      {/* Form and Contact Info */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '2rem',
        justifyContent: 'center'
      }}>
        {/* Form */}
        <form style={{
          flex: '1',
          minWidth: '350px',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <h2>Send Us a Message</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input type="text" placeholder="Full Name *" style={inputStyle} required />
            <input type="email" placeholder="Email Address *" style={inputStyle} required />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input type="text" placeholder="Phone Number" style={inputStyle} />
            <input type="text" placeholder="Company Name" style={inputStyle} />
          </div>
          <select style={inputStyle}>
            <option>Select a service</option>
            <option>Software</option>
            <option>Consulting</option>
            <option>Data Science</option>
            <option>Staffing</option>
          </select>
          <input type="text" placeholder="Subject *" style={inputStyle} required />
          <textarea placeholder="Message *" rows="4" style={inputStyle} required></textarea>
          <button type="submit" style={{
            padding: '1rem',
            background: 'linear-gradient(to right, #1e3a8a, #1db489)',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
          }}>Send Message</button>
        </form>

        {/* Contacts */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
          <h2>Our Contacts</h2>
          <ContactBlock
            title="Albany (HQ)  & Human Resources"
            address="20 Sutton Dr,Cohoes, NY 12047"
            phone="(518)-111-1234"
            email="hr@dhriti.solutions"
          />
          <ContactBlock
            title="Sales"
            phone="(518)-111-1234"
            email="ganesh@dhriti.solutions"
          />
          <ContactBlock
            title="Sales"
            phone="(518)-111-1234"
            email="kc@dhriti.solutions"
          />
        </div>
      </div>
    </section>
  );
}

const ContactCard = ({ icon, title, text, info }) => (
  <div style={{
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    width: '250px',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '2rem' }}>{icon}</div>
    <h3>{title}</h3>
    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{text}</p>
    <p style={{ fontWeight: 'bold', color: '#1e3a8a' }}>{info}</p>
  </div>
);

const ContactBlock = ({ title, address, phone, email }) => (
  <div style={{
    background: '#f5f7f9',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem'
  }}>
    <h4 style={{ margin: '0 0 0.5rem' }}>{title}</h4>
    {address && <p style={{ margin: '0.5rem 0' }}>{address}</p>}
    {phone && <p style={{ margin: '0.5rem 0' }}>📞 {phone}</p>}
    {email && <p style={{ margin: '0.5rem 0' }}>✉️ {email}</p>}
  </div>
);

const inputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%'
};

export default Contact;
