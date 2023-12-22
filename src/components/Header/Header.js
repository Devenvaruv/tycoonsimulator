import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tycoon Sim</div>
      <nav className={styles.nav}>
      <NavLink to="/" activeClassName={styles.active}>Introduction</NavLink>
        <NavLink to="/property-purchase" activeClassName={styles.active}>Property Purchase</NavLink>
        <NavLink to="/monthly-pricing" activeClassName={styles.active}>Rent Determination</NavLink>
        <NavLink to="/game-outcome" activeClassName={styles.active}>Game Outcome</NavLink>
        <NavLink to="/faq" activeClassName={styles.active}>Help Center</NavLink>
        <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;