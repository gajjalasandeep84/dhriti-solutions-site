// Contact.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7de2vba',
      'template_9did7be',
      form.current,
      'RbSIEsg3eItd9Q2WL'
    ).then(
      () => {
        setMessageStatus('success');
        form.current.reset();
        setTimeout(() => setMessageStatus(null), 4000);
      },
      () => {
        setMessageStatus('error');
        setTimeout(() => setMessageStatus(null), 4000);
      }
    );
  };

  return (
    <section id="contact" style={{ backgroundColor: '#f9f9f9', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Info Cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          {[{
            icon: <FaPhoneAlt size={24} style={{ color: '#ef4444' }} />, title: 'Call Us', desc: 'Speak directly with our experts', info: '+1 (518) 111-1234'
          }, {
            icon: <FaEnvelope size={24} style={{ color: '#3b82f6' }} />, title: 'Email Us', desc: 'Send us your inquiries anytime', info: 'hr@dhriti.solutions'
          }, {
            icon: <FaClock size={24} style={{ color: '#facc15' }} />, title: 'Business Hours', desc: "We're available:", info: 'Mon–Fri: 9:00 AM – 5:00 PM EST'
          }].map((item, idx) => (
            <div key={idx} style={{ flex: 1, background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ margin: 0 }}>{item.desc}</p>
              <p style={{ color: '#1d4ed8', fontWeight: '600', marginTop: '0.5rem' }}>{item.info}</p>
            </div>
          ))}
        </div>

        {/* Form & Contacts */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Form */}
          <div style={{ flex: '1 1 550px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>Send Us a Message</h2>

            <AnimatePresence>
              {messageStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    marginBottom: '1rem',
                    padding: '1rem',
                    backgroundColor: messageStatus === 'success' ? '#d1fae5' : '#fee2e2',
                    color: messageStatus === 'success' ? '#065f46' : '#991b1b',
                    borderRadius: '8px',
                    fontWeight: 500
                  }}
                >
                  {messageStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={form} onSubmit={sendEmail} style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input name="full_name" placeholder="Full Name *" required style={{ flex: 1, padding: '0.75rem' }} />
                <input name="email" placeholder="Email Address *" required type="email" style={{ flex: 1, padding: '0.75rem' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input name="phone" placeholder="Phone Number" style={{ flex: 1, padding: '0.75rem' }} />
                <input name="company" placeholder="Company Name" style={{ flex: 1, padding: '0.75rem' }} />
              </div>
              <select name="service" required style={{ padding: '0.75rem' }}>
                <option value="">Select a service</option>
                <option value="Software">Software</option>
                <option value="Consulting">Consulting</option>
                <option value="Staffing">Staffing</option>
                <option value="Data Science">Data Science</option>
              </select>
              <input name="subject" placeholder="Subject *" required style={{ padding: '0.75rem' }} />
              <textarea name="message" placeholder="Message *" required rows="5" style={{ padding: '0.75rem' }}></textarea>
              <button type="submit" style={{ background: 'linear-gradient(to right, #1e3a8a, #10b981)', color: 'white', padding: '1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Our Contacts</h3>
            {[{
              title: 'Albany (HQ) & Human Resources',
              address: '20 Sutton Dr, Cohoes, NY 12047',
              phone: '(518)-111-1234',
              email: 'hr@dhriti.solutions'
            }, {
              title: 'Sales',
              phone: '(518)-111-1234',
              email: 'ganesh@dhriti.solutions'
            }, {
              title: 'Sales',
              phone: '(518)-111-1234',
              email: 'kc@dhriti.solutions'
            }].map((item, idx) => (
              <div key={idx} style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h4>
                {item.address && <p>{item.address}</p>}
                {item.phone && <p><FaPhoneAlt style={{ marginRight: '6px' }} /> {item.phone}</p>}
                {item.email && <p><FaEnvelope style={{ marginRight: '6px' }} /> {item.email}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
