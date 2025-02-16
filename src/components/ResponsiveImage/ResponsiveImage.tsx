import React from "react";
import styles from "./ResponsiveImage.module.scss";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className = "" }) => {
  return <img src={src} alt={alt} className={`${styles.image} ${className}`} />;
};

export default ResponsiveImage;
