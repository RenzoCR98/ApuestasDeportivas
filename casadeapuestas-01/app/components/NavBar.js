'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './NarBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.leftSection}>
        <div className={styles.menuButton} onClick={toggleMenu}>
          &#9776; {/* Entidad HTML para las tres líneas horizontales (menú hamburguesa) */}
        </div>
        <div className={styles.logo}>ApuestasX365</div>
      </div>
      <div className={styles.buttons}>
        <Link href="/login">
          <button className={styles.button}>Iniciar{'\n'}sesión</button>
        </Link>
        <button className={styles.button}>Regístrate</button>
      </div>
      {isOpen && (
        <ul className={styles.navMenu}>
          <li>Futbol</li>
          <li>Voley</li>
          <li>Tenis</li>
          <li>Basketball</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;