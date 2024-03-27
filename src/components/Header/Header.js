import {React, useState, useEffect}from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const [hasVisitedRent, setHasVisitedRent] = useState(false);
  useEffect(() => {
    if(location.pathname === '/monthly-pricing'){
      setHasVisitedRent(true);
    }
  },[location])

  const handleNavLinkClick = (event, path) => {
    
    if (path === '/monthly-pricing') {
      if(!hasVisitedRent) {
        event.preventDefault();
        alert("Access to Rent Determination is restricted until a property is bought.");
        return;
      }
    }

    // If the user is on /monthly-pricing, prevent navigating to /property-purchase
    if (path === '/property-purchase') {
      if(hasVisitedRent) {
      event.preventDefault();
      alert("You can no longer buy a property.");
      return;
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tycoon Sim</div>
      <nav className={styles.nav}>
        <NavLink to="/" activeClassName={styles.active}>Introduction</NavLink>
        {/* Add onClick handler for /property-purchase NavLink */}
        <NavLink to="/property-purchase" activeClassName={styles.active} onClick={(e) => handleNavLinkClick(e, '/property-purchase')}>Property Purchase</NavLink>
        {/* Add onClick handler for /monthly-pricing NavLink */}
        <NavLink to="/monthly-pricing" activeClassName={styles.active} onClick={(e) => handleNavLinkClick(e, '/monthly-pricing')}>Rent Determination</NavLink>
        {/* Other NavLinks remain unchanged */}
        <NavLink to="/game-outcome" activeClassName={styles.active}>Leaderboard</NavLink>
        <NavLink to="/faq" activeClassName={styles.active}>Help Center</NavLink>
        <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
