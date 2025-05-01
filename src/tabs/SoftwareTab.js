import React from 'react';

const softwareServices = [
  {
    icon: "🔁",
    title: "Web Development",
    description: "From responsive websites to complex web applications, our team leverages the latest technologies to deliver scalable, high-performance solutions that drive business value.",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWAs)",
      "UI/UX design and implementation",
      "Web portal development",
      "E-commerce solutions"
    ],
    technologies: ["React", "Angular", "Vue.js", "Node.js", "Next.js", "TypeScript"]
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "We create intuitive, feature-rich mobile experiences across iOS and Android platforms that engage users and meet your business objectives.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions",
      "Hybrid mobile applications",
      "Mobile app UI/UX design",
      "App Store optimization"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Our cloud expertise helps businesses migrate, optimize, and innovate on leading cloud platforms, ensuring reliability, security, and cost-efficiency.",
    features: [
      "Cloud migration and modernization",
      "Cloud-native application development",
      "Serverless architecture implementation",
      "Microservices design and development",
      "DevOps and CI/CD pipelines"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
  }
];

const SoftwareTab = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Software
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#475569" }}>
        Custom software solutions designed to solve complex business challenges and drive digital transformation.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {softwareServices.map((service, index) => (
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
            <strong style={{ fontSize: "0.9rem" }}>Technologies</strong>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#f1f5f9",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                    fontSize: "0.8rem"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href="#contact" style={{ color: "#1e3a8a", fontWeight: "500", fontSize: "0.9rem" }}>
              Inquire about this service →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareTab;