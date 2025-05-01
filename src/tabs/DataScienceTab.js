// DataScienceTab.js
import React from 'react';

const dataScienceServices = [
  {
    icon: "📦",
    title: "ETL Pipelines",
    description: "We design and implement reliable ETL (Extract, Transform, Load) pipelines that streamline your data workflows and ensure data quality and consistency.",
    features: [
      "Data integration from multiple sources",
      "Real-time and batch processing",
      "Data cleaning and transformation",
      "Data quality monitoring",
      "Scalable pipeline architecture"
    ]
  },
  {
    icon: "📊",
    title: "BI Dashboards",
    description: "Our custom business intelligence dashboards transform complex data into intuitive visualizations that enable faster, more informed decision-making.",
    features: [
      "Custom dashboard development",
      "Interactive data visualizations",
      "Real-time analytics",
      "KPI tracking and reporting",
      "Mobile-friendly dashboards"
    ]
  },
  {
    icon: "🧩",
    title: "Data Engineering",
    description: "Our data engineering services focus on creating robust, scalable data infrastructure that serves as the backbone for your analytics, AI, and business intelligence efforts.",
    features: [
      "Data architecture design",
      "Data warehouse implementation",
      "Data lake design and management",
      "Big data technologies",
      "Data governance solutions"
    ]
  }
];

const DataScienceTab = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Data Science
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#475569" }}>
        Turn your data into actionable insights with our comprehensive data science and engineering services.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {dataScienceServices.map((service, index) => (
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

export default DataScienceTab;
