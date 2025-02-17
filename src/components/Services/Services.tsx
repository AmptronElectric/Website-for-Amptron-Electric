import React from "react";
import { Link } from "react-router-dom";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Title from "../Title/Title";
import Card from "../Card/Card";

import equipmentInstallation from "../../assets/img/equipInstal.jpg";
import electronicRepair from "../../assets/img/electronicRepair.jpg";
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
              altText="Equipment Installation"
              items={[
                "Small to large-scale installation of electrical equipment and systems",
                "EV Charger Installation",
                "Light Installation ",
                // "Control Systems Integration",
                "Emergency Systems",
                "Instrumentation and Motor Installation",
              ]}
              ctaPath="/equpment-installation"
            />
          </Link>

          <Link to="/electronic-repair" className={styles.cardLink}>
            <Card
              imageSrc={electronicRepair}
              title="Electronic Repair"
              altText="Electronic Repair"
              items={[
                "Diagnostic Services",
                "Fault Isolation",
                "Component-Level Repair (resistors, capacitors, integrated circuits, and more)",
                "Power Supply and Control System Repair",
              ]}
              ctaPath="/electronic-repair"
            />
          </Link>

          <Link to="/system-integration" className={styles.cardLink}>
            <Card
              imageSrc={systemIntegration}
              title="System Integration"
              altText="System Integration"
              items={[
                "Design and Implementation of Automation Systems",
                "Integration of Sensors and Instruments",
                "PLC Programming and Integration",
                "Data Acquisition and Communication Systems"
              ]}
              ctaPath="/system-integration"
            />
          </Link>

          <Link to="/post-installation-support" className={styles.cardLink}>
            <Card
              imageSrc={postSupport}
              title="Post-Installation Support"
              altText="Post-Installation Support"
              items={[
                "Ongoing support for any issues that may arise after installation",
                "Troubleshooting assistance",
                "Scheduled maintenance services to maximize the reliability of the electrical systems",
                "Preventative Maintenance",
              ]}
              ctaPath="/post-installation-support"
            />
          </Link>

          <Link to="/commissioning" className={styles.cardLink}>
            <Card
              imageSrc={commissioning}
              title="Commissioning"
              altText="Commissioning"
              items={[
                "Deficiency testing",
                "Reliability testing",
                "Error testing",
                "Searching for any inconsistencies between design and installation requirements with start-up and operational performance",
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
