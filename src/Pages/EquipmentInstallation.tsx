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

import equipmentInstallationImg from "../assets/img/equipmentInstallation.jpg";

import styles from "./Services.module.scss";

const EquipmentInstallation: React.FC = () => {
  const items = [
    "Heavy machinery power supply",
    "Control panels",
    "Motor installations",
    "Transformers",
    "Programmable Logic Controllers (PLCs)",
    "Generator installations",
    "Electric vehicle charging stations and more",
  ];
  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage
          src={equipmentInstallationImg}
          alt="Equipment Installation"
        />
        <VStack align="center">
          <Title size="h1" text="Expert Equipment Installation Services" />
          <Text size="medium" align="center">
            {
              "At Amptron Electric, our skilled electricians are dedicated to providing top-notch equipment installation services to meet your electrical needs. We understand the importance of a seamless and efficient installation process, and our team is committed to delivering quality workmanship that exceeds industry standards. Whether you're a homeowner, business owner, or industrial client, our experts are well-equipped to handle a diverse range of electrical equipment installations."
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
          text="Why Choose Amptron Electric for Equipment Installation?"
        ></Title>
        <Text size="medium" align="center">
          {
            "With a reputation for excellence and a dedication to customer satisfaction, Amptron Electric stands out as a trusted partner for all your equipment installation needs. Our electricians combine technical proficiency with a commitment to delivering outstanding service, ensuring that your electrical systems are installed efficiently and reliably."
          }
        </Text>

        <Text size="medium" align="center">
          {
            "Contact us today to discuss your equipment installation requirements and experience the difference of working with a team of professionals who prioritize quality, safety, and customer satisfaction."
          }
        </Text>
      </VStack>
    </ContainerWrapper>
  );
};

export default EquipmentInstallation;
