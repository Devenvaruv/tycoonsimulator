import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tycoon Sim</div>
      <nav className={styles.nav}>
        <Link to="/">Introduction</Link>
        <Link to="/property-purchase">PropertyPurchase</Link>
        <Link to="/monthly-pricing">MonthlyPricing</Link>
        <Link to="/game-outcome">GameOutcome</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;