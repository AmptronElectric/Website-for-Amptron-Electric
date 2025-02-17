import React from "react";
import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

import Button from "../components/Button/Button";
import ContainerWrapper from "../components/ContainerWrapper/ContainerWrapper";
import HStack from "../components/HStack/HStack";
import List from "../components/List/List";
import ResponsiveImage from "../components/ResponsiveImage/ResponsiveImage";
import Text from "../components/Text/Text";
import Title from "../components/Title/Title";
import VStack from "../components/VStack/VStack";

import systemIntegrationImg from "../assets/img/systemIntegration.webp";

import styles from "./Services.module.scss";

const SystemIntegration: React.FC = () => {
  const items = [
    "HMI Development & Customization",
    "Industrial Network Integration",
    "Remote Monitoring Solutions",
    "Process Control Automation",
    "Custom PLC Programming",
    "Legacy System Upgrades",
    "Instrumentation Calibration & Integration",
    "Machine-to-Machine Communication (M2M)",
    "Variable Frequency Drive (VFD) Integration",
    "Energy Management Systems",
    "Safety System Integration",
  ];
  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage
          src={systemIntegrationImg}
          alt="Control panel wiring and PLC integration for commercial electrical systems"
        />
        <VStack align="center">
          <Title size="h1" text="System Integration" />
          <Text size="medium" align="center">
            {
              "At Amptron Electric System Integration division is dedicated to providing comprehensive solutions tailored to meet the unique needs of your business. From design and commissioning to installation, we excel in integrating automation and control systems that optimize efficiency and enhance productivity."
            }
          </Text>
          <List listItems={items} icon={FaBolt} />
          <HStack
            align="center"
            justify="center"
            spacing={20}
            className={styles.servicesBtnContainer}
          >
            <Link to="/contact" className={styles.link}>
              <Button width="100%" color="primary" text="Contact Us" />
            </Link>

            <Link to="/services" className={styles.link}>
              <Button width="100%" color="secondary" text="All Services" />
            </Link>
          </HStack>
        </VStack>
      </HStack>

      <VStack
        margin="50px 0 50px 0"
        align="center"
        justify="center"
        spacing={20}
      >
        <Title
          size="h1"
          text="Why Choose Amptron Electric for System Integration?"
        ></Title>
        <Text size="medium" align="center">
          {
            "Tailored Solutions: We understand that each business has unique requirements. Our team works closely with you to design and implement solutions that precisely fit your needs, ensuring maximum efficiency. Cutting-edge Technology: We stay at the forefront of technological advancements to bring you the latest innovations in system integration. Our solutions are designed to keep your business ahead of the curve."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "Partner with Amptron Electric for unparalleled expertise in the design, commissioning, and installation of automation and control systems. Our commitment to excellence ensures that your business operations run seamlessly, maximizing productivity and minimizing disruptions. Contact us today to explore how our System Integration services can elevate your business to new heights."
          }
        </Text>
      </VStack>
    </ContainerWrapper>
  );
};

export default SystemIntegration;
