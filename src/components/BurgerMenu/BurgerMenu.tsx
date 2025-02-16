import React, { useState } from "react";
import Divider from "../Divider/Divider";

import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  links: { to: string; label: string }[];
  extraContent?: React.ReactNode;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ links, extraContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.burgerMenu}>
      {/* Burger Button */}
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={styles.menu}>
          {links.map((link) => (
            <div>
              <Divider length="100%" position="center" />
              <Link
                key={link.to}
                to={link.to}
                className={styles.menuLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          {extraContent && (
            <div className={styles.extraContent} onClick={closeMenu}>
              {extraContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
