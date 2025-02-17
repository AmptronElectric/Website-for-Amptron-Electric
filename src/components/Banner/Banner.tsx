import React from "react";

import Button from "../Button/Button";
import Text from "../Text/Text";
import Title from "../Title/Title";

import video from "../../assets/video/video.mp4";

import styles from "./Banner.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <Title text="Amptron Electric" className={styles.title} />
        <Title text="Commercial & Industrial Electrical Repair, Installation, and Integration Services" size="h2" className={styles.welcomeTitle} />
        <Text size="xlarge">
          {"Based in Port Coquitlam - Serving the Lower Mainland"}
        </Text>
        <a href="https://calendly.com/amptronelectricbc/30min" target="_blank">
          <Button text="BOOK NOW" width="200px" className={styles.bookNow} />
        </a>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.video}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
