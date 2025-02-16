import React from "react";
import styles from "./ContainerWrapper.module.scss";

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  marginTop?: string;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children, className, width = "100%", marginTop = "140px" }) => {
  return (
    <div
      className={`${styles.container} ${className || ""}`}
      style={{ maxWidth: width, marginTop }}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;