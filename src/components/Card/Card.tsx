import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  items: string[];
  className?: string;
  ctaText?: string;
  ctaPath?: string;
  onCtaClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  items,
  className = "",
  ctaText = "Learn More",
  ctaPath,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (ctaPath) {
      navigate(ctaPath);
    }
  };

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardImg}>
        <img src={imageSrc} alt={altText} />
      </div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {ctaPath && (
        <div className={styles.ctaButton}>
          <Button width="250px" text={ctaText} onClick={handleButtonClick} />
        </div>
      )}
    </div>
  );
};

export default Card;
