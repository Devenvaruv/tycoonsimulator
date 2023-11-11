import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // You can define your CSS modules here

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Dev Weber</div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/monthly-pricing">Temp</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
    </header>
  );
};

export default Header;