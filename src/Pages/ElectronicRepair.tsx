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
    "Electrical Repair & Maintenance",
    "Troubleshooting & Diagnostics",
    "Motor & Variable Frequency Drives (VFD) Repairs",
    "Electrical Testing & Fault Isolation",
    "Industrial Panel Repairs",
    "Control System Repairs",
    "Lighting System Repairs",
  ];
  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage
          src={electronicRepairImg}
          alt="Electrician testing circuits and fixing electrical issues in factory setting"
        />
        <VStack align="center">
          <Title size="h1" text="Expert Electrical Repair" />
          <Text size="medium" align="center">
            {
              "At Amptron Electric, we understand that in the fast-paced world of commercial and industrial operations, electrical failures can cause costly downtime and disrupt productivity. That's why we offer a comprehensive range of electrical repair services designed to meet the unique demands of businesses."
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
          text="Why Choose Amptron Electric for Electrical Repair?"
        ></Title>
        <Text size="medium" align="center">
          {
            "At Amptron Electric, we are committed to maintaining the highest standards of safety, reliability, and compliance. Our electrical repair services align with industry regulations, ensuring the safety of your personnel and the optimal performance of your systems. We understand that every commercial and industrial operation is unique. That's why our experienced team works closely with you to deliver tailored repair solutions that address your specific electrical challenges."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "Don't let electrical issues disrupt your business operations.Contact Amptron Electric today for prompt, professional, and reliable electrical repair services. We are dedicated to keeping your systems running smoothly, ensuring your business stays powered for success."
          }
        </Text>
      </VStack>
    </ContainerWrapper>
  );
};

export default ElectronicRepair;
