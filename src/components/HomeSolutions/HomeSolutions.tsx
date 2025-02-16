import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import HStack from "../HStack/HStack";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import Text from "../Text/Text";
import Title from "../Title/Title";
import VStack from "../VStack/VStack";

import main1 from "../../assets/img/main1.jpg";

import styles from "./HomeSolutions.module.scss";

const HomeSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ContainerWrapper className={styles.wrapper}>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage
          src={main1}
          alt="Switchgear"
          className={styles.homeSolutionsImg}
        />
        <VStack align="center">
          <Title
            size="h1"
            text="Tailored solutions for BC factories and businesses."
          />
          <Title
            size="h4"
            text="Powering success in industry and commerce, Amptron Electric is your trusted partner for industrial electrical solutions in British Columbia."
          />
          <Text size="medium" align="center">
            {
              "With over 10 years of certified experience, we specialize in delivering precise and reliable services, from intricate wiring to troubleshooting complex systems. Our expertise ensures that your operations remain safe, efficient, and optimized for success. Trust Amptron Electric to provide exceptional industrial electrical services built on a decade of excellence."
            }
          </Text>
          <Title size="h4" text="Industries We Serve:" />
          <p className={styles.industries}>
            <i>
              <strong>Industrial: </strong>
            </i>
            Supporting manufacturing plants, automation systems, and process facilities with advanced electrical solutions.
          </p>
          <p className={styles.industries}>
            <i>
              <strong>Commercial: </strong>
            </i>
            Delivering reliable electrical services for offices, retail spaces, and warehouses to ensure smooth operations.
          </p>
          <HStack spacing={20} className={styles.homeSolutionsBtnContainer}>
            <Button
            width="100%"
              color="primary"
              text="Get in Touch"
              onClick={() => navigate("/contact")}
            />
            <Button
            width="100%"
              color="secondary"
              text="Explore Our Services"
              onClick={() => navigate("/services")}
            />
          </HStack>
        </VStack>
      </HStack>
    </ContainerWrapper>
  );
};

export default HomeSolutions;
