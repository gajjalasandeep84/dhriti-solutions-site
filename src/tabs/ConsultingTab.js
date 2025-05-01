import React from 'react';

const consultingServices = [
  {
    icon: "🗺️",
    title: "IT Roadmap",
    description: "Our IT roadmap consulting helps you plan your technology investments strategically, ensuring alignment with business goals and maximum ROI.",
    features: [
      "Technology needs assessment",
      "Strategic IT planning",
      "Prioritization frameworks",
      "Implementation timeline development",
      "Budget planning and optimization"
    ]
  },
  {
    icon: "🗄️",
    title: "Architecture Consulting",
    description: "Our architecture consulting services help you design technical solutions that are robust, scalable, and aligned with your business requirements and growth plans.",
    features: [
      "Solution architecture design",
      "System integration planning",
      "Technology stack selection",
      "Scalability and performance planning",
      "Architecture review and optimization"
    ]
  },
  {
    icon: "💡",
    title: "Digital Advisory",
    description: "Our digital advisory services provide strategic guidance on leveraging technology for competitive advantage, innovation, and business growth.",
    features: [
      "Digital strategy development",
      "Innovation workshop facilitation",
      "Technology trend analysis",
      "Digital maturity assessment",
      "Digital business model innovation"
    ]
  }
];

const ConsultingTab = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Consulting
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#475569" }}>
        Strategic technology consulting to guide your digital initiatives and drive business growth.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {consultingServices.map((service, index) => (
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

export default ConsultingTab;