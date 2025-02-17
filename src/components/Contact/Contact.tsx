import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../context/ThemeContext";

import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Popup from "../Popup/Popup";
import Title from "../Title/Title";
import Text from "../Text/Text";

import lightImg from "../../assets/img/box-light.png";
import darkImg from "../../assets/img/box-dark.png";

import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();

  const form = useRef<HTMLFormElement | null>(null);

  const [popupMessage, setPopupMessage] = useState<string[] | null>(null);

  const closePopup = () => setPopupMessage(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const firstName = formData.get("first_name")?.toString().trim();
    const phone = formData.get("phone_number")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!firstName || !phone || !message) {
      setPopupMessage([
        "Unable to send a contact form.",
        "Check all required fields.",
      ]);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setPopupMessage([
            "Your request has been successfully sent",
            "We will get in touch with you shortly",
            "THANK YOU",
          ]);
          form.current?.reset();
        },
        () => {
          setPopupMessage(["Something went wrong", "Please try again later"]);
        }
      );
  };

  return (
    <ContainerWrapper>
      {/* <Title text="GET IN TOUCH" size="h1" /> */}
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerContent}>
          <Title
            className={styles.title}
            text="Get in Touch with Amptron Electric"
            size="h2"
          />
          <Text>
            {
              "We're here to help with all your commercial electrical needs. Whether you need a quote, an estimate, or have questions about our services, our team is ready to assist you."
            }
          </Text>
          <div className={styles.contactSection}>
            <p>
              <a
                href="tel:+17789944027"
                className={styles.contactLink}
                aria-label="Call us at +1 778-994-4027"
              >
                Phone: +1 778-994-4027
              </a>
            </p>
            <p>
              <a
                href="mailto:amptronelectricbc@gmail.com"
                className={styles.contactLink}
                aria-label="Email us at amptronelectricbc@gmail.com"
              >
                Email: amptronelectricbc@gmail.com
              </a>
            </p>
          </div>
          <Text>
            {
              "Use the contact form to reach out, and we'll respond as soon as possible. Provide details about your project, and we'll get back to you with the information you need. For urgent inquiries, call us directly for immediate assistance."
            }
          </Text>
          <Text>{"We look forward to working with you!"}</Text>
          <div className={styles.contactImg}>
            <img src={isDarkMode ? darkImg : lightImg} alt="Industrial Electrician in Metro Vancouver" />
          </div>
        </div>
        <div className={styles.contactFormContainer}>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.names}>
              <div className={styles.namesInput}>
                <label className={styles.formLabel} htmlFor="first_name">
                  First Name<span className={styles.required}></span>
                </label>
                <br />
                <input
                  id="first_name"
                  className={styles.formControl}
                  type="text"
                  name="first_name"
                  required
                />
              </div>
              <div className={styles.namesInput}>
                <label className={styles.formLabel} htmlFor="last_name">
                  Last Name
                </label>
                <br />
                <input
                  id="last_name"
                  className={styles.formControl}
                  type="text"
                  name="last_name"
                />
              </div>
            </div>
            <div className={styles.names}>
              <div className={styles.namesInput}>
                <label className={styles.formLabel} htmlFor="email">
                  Email<span className={styles.required}></span>
                </label>
                <br />
                <input
                  id="email"
                  className={styles.formControl}
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className={styles.namesInput}>
                <label className={styles.formLabel} htmlFor="phone_number">
                  Phone Number<span className={styles.required}></span>
                </label>
                <br />
                <input
                  id="phone_number"
                  className={styles.formControl}
                  type="tel"
                  name="phone_number"
                  required
                />
              </div>
            </div>
            <div>
              <label className={styles.formLabel} htmlFor="company">
                Company
              </label>{" "}
              <br />
              <input
                id="company"
                className={styles.formControl}
                type="text"
                name="company"
              />
            </div>
            <div>
              <label className={styles.formLabel} htmlFor="message">
                Message<span className={styles.required}></span>
              </label>
              <textarea
                id="message"
                className={styles.formControl}
                name="message"
                cols={30}
                rows={10}
                required
              ></textarea>
              <input
                className={styles.contactFormBtn}
                type="submit"
                value="Submit"
                // onClick={"sendEmail()"}
              />
            </div>
          </form>
        </div>
      </div>

      {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
    </ContainerWrapper>
  );
};

export default Contact;
