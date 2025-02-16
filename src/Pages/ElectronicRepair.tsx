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

import electronicRepairImg from "../assets/img/electronicRepair.jpg";

import styles from "./Services.module.scss";

const ElectronicRepair: React.FC = () => {
  const items = [
    "Motor drive repairs and optimization",
    "Circuit breaker and switchgear repairs",
    "Transformer diagnostics and repair",
    "Power quality analysis and solutions",
    "Sensor and control system optimizations",
    "SCADA system diagnostics",
    "Automated production line troubleshooting",
  ];
  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage src={electronicRepairImg} alt="Electronic Repair" />
        <VStack align="center">
          <Title size="h1" text="Expert Electronic Repair" />
          <Text size="medium" align="center">
            {
              "At Amptron Electric, we understand that in the fast-paced world of commercial and industrial operations, any downtime due to electronic failures can lead to significant disruptions and financial losses. That's why we're proud to offer a comprehensive range of electronic repair services tailored specifically for the unique demands of businesses."
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
          text="Why Choose Amptron Electric for Electronic Repair?"
        ></Title>
        <Text size="medium" align="center">
          {
            "Amptron Electric is committed to the highest standards of safety and compliance. Our repairs adhere to industry regulations, ensuring the safety of your personnel and the longevity of your electronic systems. We understand that every commercial or industrial setup is unique. Our team works closely with clients to provide customized electronic repair solutions that meet their specific needs and challenges."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "Don't let electronic failures hinder your business operations. Contact Amptron Electric today for reliable, efficient, and specialized electronic repair services. We are dedicated to keeping your commercial and industrial systems at peak performance, ensuring your business stays powered for success."
          }
        </Text>
      </VStack>
    </ContainerWrapper>
  );
};

export default ElectronicRepair;
