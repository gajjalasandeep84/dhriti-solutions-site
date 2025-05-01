// Services.js
import React, { useState, useEffect } from 'react';
import SoftwareTab from '../tabs/SoftwareTab';
import StaffingTab from '../tabs/StaffingTab';
import ApproachSection from '../tabs/ApproachSection';
import DataScienceTab from '../tabs/DataScienceTab';
import ConsultingTab from '../tabs/ConsultingTab';

const Services = ({ initialTab = 'Software' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Software':
        return <><SoftwareTab /><ApproachSection /></>;
      case 'Staffing':
        return <><StaffingTab /><ApproachSection /></>;
      case 'Consulting':
        return <><ConsultingTab /><ApproachSection /></>;
      case 'Data Science':
        return <><DataScienceTab /><ApproachSection /></>;
      case 'AI ML':
      case 'Cybersecurity':
      case 'Coaching':
        return <><div style={{ padding: '2rem' }}><h2>{activeTab}</h2><p>Content coming soon...</p></div><ApproachSection /></>;
      default:
        return null;
    }
  };

  return (
    <section id="services">
      <div style={{
        background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Our Services</h1>
        <p style={{ marginTop: '1rem' }}>
          Comprehensive technology solutions designed to solve real business challenges and drive innovation.
        </p>
      </div>

      <div style={{ backgroundColor: '#f9f9f9', padding: '3rem 2rem', paddingBottom: '6rem' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {["Software", "AI ML", "Data Science", "Cybersecurity", "Coaching", "Consulting", "Staffing"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === tab ? '#e0e7ff' : '#f0f0f0',
                fontWeight: activeTab === tab ? '600' : '500',
                color: '#1e293b'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {renderTabContent()}
      </div>
    </section>
  );
};

export default Services;
