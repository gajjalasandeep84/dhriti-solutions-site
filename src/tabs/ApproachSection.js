import React from 'react';

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "We begin by understanding your business goals, challenges, and requirements through in-depth consultations."
  },
  {
    number: 2,
    title: "Strategy",
    description: "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and objectives."
  },
  {
    number: 3,
    title: "Implementation",
    description: "Using agile methodologies, we execute the plan with regular check-ins and adaptations based on feedback."
  },
  {
    number: 4,
    title: "Optimization",
    description: "We continuously monitor, measure, and optimize solutions to ensure long-term success and ROI."
  }
];

const ApproachSection = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Our Approach</h2>
      <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1rem', color: '#475569' }}>
        We follow a proven methodology to ensure successful outcomes for all our client engagements.
      </p>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem'
      }}>
        {steps.map(step => (
          <div key={step.number} style={{
            backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)', maxWidth: '250px',
            textAlign: 'left', position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px', backgroundColor: '#1d4ed8',
              color: 'white', borderRadius: '50%', width: '28px', height: '28px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem',
              fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>{step.number}</div>
            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', marginTop: '1rem' }}>{step.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#334155' }}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection