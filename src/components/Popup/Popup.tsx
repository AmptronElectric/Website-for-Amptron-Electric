import React from "react";
import styles from "./Popup.module.scss";

interface PopupProps {
  message: string[];
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {message.map((line, index) => (
          <p key={index} className={styles.text}>{line}</p>
        ))}
        <button className={styles.okButton} onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
