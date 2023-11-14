import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tycoon Sim</div>
      <nav className={styles.nav}>
      <NavLink to="/" activeClassName={styles.active}>Introduction</NavLink>
        <NavLink to="/property-purchase" activeClassName={styles.active}>PropertyPurchase</NavLink>
        <NavLink to="/monthly-pricing" activeClassName={styles.active}>MonthlyPricing</NavLink>
        <NavLink to="/game-outcome" activeClassName={styles.active}>GameOutcome</NavLink>
        <NavLink to="/faq" activeClassName={styles.active}>FAQ</NavLink>
        <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;