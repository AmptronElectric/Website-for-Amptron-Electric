import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import Button from "../Button/Button";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import logoLight from "../../assets/logo-horizontal-light.webp";
import logoDark from "../../assets/logo-horizontal-dark.webp";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const { isDarkMode } = useTheme();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
  ];

  return (
    <header className={styles.header}>
      {/* Logo linked to Home */}
      <NavLink to="/" className={styles.logo}>
        <img
          src={isDarkMode ? logoDark : logoLight}
          alt="Electrical Services in Burnaby, Coquitlam, Surrey, Richmond, Langley, Vancouver"
        />
      </NavLink>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className={styles.contactButton}>
        <NavLink to="contact">
          <Button text="CONTACT" />
        </NavLink>
      </div>

      {/* Burger Menu for Smaller Screens */}
      <BurgerMenu
        links={navLinks}
        extraContent={
          <NavLink className={styles.btn} to="contact">
            <Button width="100%" text="CONTACT" />
          </NavLink>
        }
      />

      <ThemeToggle />
    </header>
  );
};

export default Navbar;
