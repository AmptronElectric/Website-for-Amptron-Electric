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
        <Title text="WELCOME TO" size="h2" className={styles.welcomeTitle} />
        <Title text="Amptron Electric" className={styles.title} />
        <Text size="medium">
          {"Locally owned electrical service and repair"}
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
