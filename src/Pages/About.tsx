import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerWrapper from "../components/ContainerWrapper/ContainerWrapper";
import Title from "../components/Title/Title";
import HStack from "../components/HStack/HStack";
import ResponsiveImage from "../components/ResponsiveImage/ResponsiveImage";
import VStack from "../components/VStack/VStack";
import about from "../assets/img/about.jpg";
import Text from "../components/Text/Text";
import Button from "../components/Button/Button";

import styles from "./About.module.scss";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ContainerWrapper>
      <HStack spacing={30} align="center" justify="center">
        <ResponsiveImage
          src={about}
          alt="Switchgear"
          className={styles.aboutImg}
        />
        <VStack align="center">
          <Title size="h1" text="About Us" />
          <Text size="medium" align="center">
            {
              "Amptron Electric brings a rich background in industrial and commercial electrical services, accumulated over more than 10 years of dedicated service. We possess a deep understanding of the unique challenges posed by industrial and commercial electrical projects."
            }
          </Text>
          <Text size="medium" align="center">
            {
              "We understand the importance of expertise in delivering reliable electrical solutions. Our commitment to excellence is exemplified by our team members holding Red Seal interprovincial certificates, a testament to the highest standards of craftsmanship and professionalism in the industry. Additionally, our team is equipped with the FSR (Field Safety Representative) Ticket, ensuring that safety and compliance are at the forefront of every project we undertake."
            }
          </Text>
          <Text size="medium" align="center">
            {
              "Amptron Electric Inc. is a full-service electrical contractor serving Metro Vancouver, British Columbia. Our experienced electrician's offer complete residential & commercial electrical services."
            }
          </Text>
          <Title
            size="h2"
            italic
            text="We are fully licensed, bonded, and insured."
          />
          <HStack spacing={20} className={styles.aboutBtnContainer}>
            <Button
              color="primary"
              text="Contact Us"
              onClick={() => navigate("/contact")}
            />
            <Button
              color="secondary"
              text="Services"
              onClick={() => navigate("/services")}
            />
          </HStack>
          <Button
            className={styles.btn}
            width="100%"
            text={"Book Electrical Appointment Now"}
            onClick={() =>
              window.open("https://calendly.com/amptronelectricbc/30min", "_blank")
            }
          />
        </VStack>
      </HStack>
    </ContainerWrapper>
  );
};

export default Contact;
