import React from "react";
import styles from "./List.module.scss";
import { IconType } from "react-icons"; // To allow passing any react-icons type

interface ListProps {
  listItems: string[];
  icon?: IconType; // Optional icon component
}

const List: React.FC<ListProps> = ({ listItems, icon: Icon }) => {
  return (
    <ul className={styles.list}>
      {listItems.map((item, index) => (
        <li key={index} className={styles.listItem}>
          {Icon && <Icon className={styles.icon} />}
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
