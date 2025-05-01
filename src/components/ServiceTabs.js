import React, { useState } from 'react';

const tabData = {
  Software: "Details about Software Services...",
  "AI ML": "AI & Machine Learning solutions tailored to your business...",
  "Data Science": "Insights and analytics that drive strategic decisions...",
  Cybersecurity: "Protect your data and digital infrastructure...",
  Coaching: "Professional development and tech training services...",
  Consulting: "Expert advisory to accelerate your technology roadmap...",
  Staffing: "Flexible staffing solutions to build high-performing teams..."
};

const tabNames = Object.keys(tabData);

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("Software");

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f8f9fa' }}>
      {/* Tab Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === tab ? '#e0e7ff' : '#f0f0f0',
              fontWeight: activeTab === tab ? '600' : '500'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
      }}>
        <h3>{activeTab}</h3>
        <p>{tabData[activeTab]}</p>
      </div>
    </section>
  );
}
