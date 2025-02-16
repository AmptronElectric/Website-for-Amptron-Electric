import React from "react";
import appointmentBannerIng from "../../assets/img/appointmentBanner.jpg";
import styles from "./AppointmentBanner.module.scss";

const AppointmentBanner: React.FC = () => {
  return (
    <section>
      <div className={styles.scheduleContainer}>
        <a href="https://calendly.com/amptronelectricbc/30min" target="_blank">
          <p>Schedule your 30 minutes Electrician Appointment now</p>
        </a>
        <div className={styles.scheduleContainerImg}>
          <img src={appointmentBannerIng} alt="Schedule Appointment" />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
