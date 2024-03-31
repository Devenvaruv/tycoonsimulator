import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="devweber.com" className={styles.icon}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="devweber.com" className={styles.icon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="devweber.com" className={styles.icon}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;