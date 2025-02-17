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

import commissioningImg from "../assets/img/commissioning.webp";

import styles from "./Services.module.scss";

const Commissioning: React.FC = () => {
  const items = [
    "Design Verification",
    "Testing and Validation",
    "Deficiency Identification",
    "Performance Optimization",
    "Final Documentation",
  ];
  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage src={commissioningImg} alt="Industrial power system commissioning and performance testing" />
        <VStack align="center">
          <Title size="h1" text="Ensuring Your Systems Are Ready to Perform" />
          <Text size="medium" align="center">
            {
              "At Amptron Electric, we understand that commissioning is a critical step in ensuring the safe, efficient, and reliable operation of your electrical systems. Our comprehensive commissioning services are designed to verify that every component of your system meets design specifications, operates as intended, and performs seamlessly in real-world conditions."
            }
          </Text>
          <Title size="h2" text="What is Commissioning?" />
          <Text size="medium" align="center">
            {
              "Commissioning is a systematic process that ensures your electrical systems are installed, tested, and optimized for peak performance. This step is essential to identify and resolve any deficiencies or inconsistencies before your systems go live, providing you with confidence and peace of mind."
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
          text="Why Choose Amptron Electric for Commissioning?"
        ></Title>
        <Text size="medium" align="center">
          {
            "At Amptron Electric, we pride ourselves on delivering commissioning services with precision and professionalism. Our experienced team of licensed electricians and technicians is dedicated to ensuring that your systems operate flawlessly from day one."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "We utilize state-of-the-art tools and follow the latest industry standards to guarantee compliance, safety, and efficiency. By partnering with us, you gain access to expert knowledge, meticulous attention to detail, and a commitment to excellence that sets us apart in the industry."
          }
        </Text>
      </VStack>
    </ContainerWrapper>
  );
};

export default Commissioning;
