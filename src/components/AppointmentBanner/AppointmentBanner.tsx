import React from "react";
import appointmentBannerIng from "../../assets/img/appointmentBanner.webp";
import styles from "./AppointmentBanner.module.scss";

const AppointmentBanner: React.FC = () => {
  return (
    <section>
      <div className={styles.scheduleContainer}>
        <a href="https://calendly.com/amptronelectricbc/30min" target="_blank">
          <p>Schedule Your 30-Minute Consultation</p>
        </a>
        <div className={styles.scheduleContainerImg}>
          <img
            src={appointmentBannerIng}
            alt="Industrial automation system with integrated electrical controls and monitoring"
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
