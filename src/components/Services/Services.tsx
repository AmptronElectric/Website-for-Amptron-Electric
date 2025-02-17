import React from "react";
import { Link } from "react-router-dom";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Title from "../Title/Title";
import Card from "../Card/Card";

import equipmentInstallation from "../../assets/img/equipInstal.jpg";
import electricalRepair from "../../assets/img/electricalRepair.webp";
import systemIntegration from "../../assets/img/systemIntegration.jpg";
import postSupport from "../../assets/img/postSupport.jpg";
import commissioning from "../../assets/img/commissioning.webp";

import styles from "./Services.module.scss";

const Services: React.FC = () => {
  return (
    <section id="services">
      <ContainerWrapper>
        <Title size="h1" text="ELECTRICAL SERVICES" />
        <div className={styles.cardContainer}>
          <Link to="/equipment-installation" className={styles.cardLink}>
            <Card
              imageSrc={equipmentInstallation}
              title="Equipment Installation"
              altText="Industrial electrical panel upgrade in Metro Vancouver factory. Electrical equipment installation."
              items={[
                "Small to large-scale installation of electrical equipment",
                "Electrical Panel Upgrades & Installation",
                "EV Charger Installation",
                "Lighting Installation ",
                "Motor Controls and Variable Frequency Drives (VFD) Setup",
              ]}
              ctaPath="/equpment-installation"
            />
          </Link>

          <Link to="/electrical-repair" className={styles.cardLink}>
            <Card
              imageSrc={electricalRepair}
              title="Electrical Repair"
              altText="Electronic repair and maintenance for industrial systems"
              items={[
                "Electrical Repair & Maintenance",
                "Troubleshooting & Diagnostics",
                "Motor & Variable Frequency Drives (VFD) Repairs",
                "Electrical Testing & Fault Isolation",
                "Industrial Panel Repairs",
                "Control System Repairs",
                "Lighting System Repairs",
              ]}
              ctaPath="/electrical-repair"
            />
          </Link>

          <Link to="/system-integration" className={styles.cardLink}>
            <Card
              imageSrc={systemIntegration}
              title="System Integration"
              altText="Industrial electrical control panel with PLC system integration for automated manufacturing"
              items={[
                "Design and Implementation of Automation Systems",
                "Integration of Sensors and Instruments",
                "Custom PLC Programming",
                "Legacy System Upgrades",
                "Machine-to-Machine Communication (M2M)",
              ]}
              ctaPath="/system-integration"
            />
          </Link>

          <Link to="/post-installation-support" className={styles.cardLink}>
            <Card
              imageSrc={postSupport}
              title="Post-Installation Support"
              altText="Electrician performing post-installation support and electrical system diagnostics in a commercial facility"
              items={[
                "Ongoing support for any issues that may arise after installation",
                "Preventative Maintenance",
                "Troubleshooting assistance",
                "Scheduled maintenance services to maximize the reliability of the electrical systems",
                "Software Updates",
              ]}
              ctaPath="/post-installation-support"
            />
          </Link>

          <Link to="/commissioning" className={styles.cardLink}>
            <Card
              imageSrc={commissioning}
              title="Commissioning"
              altText="Industrial electrician performing commissioning and system verification on electrical control panel"
              items={[
                "Deficiency testing",
                "Reliability testing",
                "Error testing",
                "Searching for any inconsistencies between design and installation requirements with start-up and operational performance",
                "Safety System Validation",
              ]}
              ctaPath="/commissioning"
            />
          </Link>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default Services;
