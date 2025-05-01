import React from 'react';

const staffingServices = [
  {
    icon: "👤",
    title: "Contract & Full-time Placement",
    description: "Our specialized tech recruitment services connect you with skilled professionals across various technology domains, for both contract and permanent positions.",
    features: [
      "Technical talent acquisition",
      "Skills assessment and verification",
      "Cultural fit evaluation",
      "Contract-to-hire options",
      "Executive tech recruiting"
    ]
  },
  {
    icon: "🌐",
    title: "Remote Talent Solutions",
    description: "We help organizations build and manage high-performing remote technical teams, addressing the challenges of distributed work while leveraging its benefits.",
    features: [
      "Global talent sourcing",
      "Remote team setup and management",
      "Communication and collaboration tools",
      "Remote work policies and practices",
      "Distributed team performance optimization"
    ]
  },
  {
    icon: "🎓",
    title: "Internship Programs",
    description: "Our internship program services help you design, implement, and manage effective technical internship programs that benefit both your organization and emerging talent.",
    features: [
      "Internship program design",
      "University partnerships",
      "Technical curriculum development",
      "Intern mentoring frameworks",
      "Conversion to full-time strategies"
    ]
  }
];

const StaffingTab = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Staffing
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#475569" }}>
        Find the right technology talent to power your innovation with our specialized staffing solutions.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {staffingServices.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              flex: "1 1 300px",
              maxWidth: "360px"
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{service.icon}</div>
            <h3 style={{ fontWeight: "600" }}>{service.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#475569", marginBottom: "0.5rem" }}>
              {service.description}
            </p>
            <strong style={{ fontSize: "0.9rem" }}>Key Features</strong>
            <ul style={{ fontSize: "0.85rem", paddingLeft: "1.2rem" }}>
              {service.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: "0.25rem" }}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" style={{ color: "#1e3a8a", fontWeight: "500", fontSize: "0.9rem" }}>
              Inquire about this service →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffingTab;