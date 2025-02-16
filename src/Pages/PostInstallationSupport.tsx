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

import postSupportImg from "../assets/img/postSupport.jpg";

import styles from "./Services.module.scss";

const PostInstallationSupport: React.FC = () => {
  const items = [
    "Troubleshooting Assistance",
    "Preventive Maintenance",
    "Monitoring and Diagnostics",
    "Emergency Assistance",
    "Regular Maintenance Programs",
    "Performance Optimization",
    "Comprehensive System Checks",
  ];
  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage src={postSupportImg} alt="Post-Installation Support" />
        <VStack align="center">
          <Title size="h1" text="Post-Installation Support" />
          <Text size="medium" align="center">
            {
              "At Amptron Electric, our commitment doesn't end when the installation is complete. We believe that maintaining and optimizing your electrical systems is just as important as installing them. Our comprehensive Post-Installation Support services are designed to ensure your systems continue to perform at their best, providing you with peace of mind and uninterrupted operations."
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
        <Title size="h1" text="Why Post-Installation Support Matters"></Title>
        <Text size="medium" align="center">
          {
            "Electrical systems are the backbone of any modern facility, and their proper functioning is critical to your operations. These systems require ongoing care and attention to maintain their reliability, safety, and efficiency over time. At Amptron Electric, we understand the challenges that come with managing complex electrical systems and are committed to providing the support you need."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "Regular maintenance and timely troubleshooting help extend the lifespan of your equipment, ensuring you get the most value from your investment. By identifying potential issues before they escalate, our proactive approach prevents costly downtime and keeps your operations running smoothly. Properly maintained systems also enhance safety by reducing the risks associated with faulty or outdated equipment, while ensuring compliance with all relevant regulations."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "From routine inspections to emergency response, our dedicated team is here to support your systems at every stage of their lifecycle. With Amptron Electric, you can have confidence in the reliability, safety, and efficiency of your electrical infrastructure."
          }
        </Text>
      </VStack>
    </ContainerWrapper>
  );
};

export default PostInstallationSupport;
