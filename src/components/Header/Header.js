import {React, useState, useEffect}from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';


import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider , onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfndJ5pcN5lfzyyTxlT0WbyBCTV0ktncM",
    authDomain: "fir-test-58373.firebaseapp.com",
    projectId: "fir-test-58373",
    storageBucket: "fir-test-58373.appspot.com",
    messagingSenderId: "971121072370",
    appId: "1:971121072370:web:bdcdb9d48307b03f32586b",
    measurementId: "G-BK9B9VWGFK",
  };
  initializeApp(firebaseConfig);
const Header = () => {
  const location = useLocation();
  const [hasVisitedRent, setHasVisitedRent] = useState(false);
  

  const [userId, setUserId] = useState("some");
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider)
      .then((result) => {
       
        setUserId(result.user);
        
        console.log(result.user);
      })
      .catch((error) => {
      
        console.error(error);
      });
  };


  

  useEffect(() => {
    
    async function checkUserSession() {
      const loggedInUserId = await checkSession();
      setUserId(loggedInUserId);
    }

    checkUserSession();
  }, []);

  const checkSession = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUserId(user.uid);
      } else {
        // No user is signed in.
        setUserId(null);
      }
    });
  }

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
        <NavLink to="/property-purchase" activeClassName={styles.active} onClick={(e) => handleNavLinkClick(e, '/property-purchase')}>Property Purchase</NavLink>
        <NavLink to="/monthly-pricing" activeClassName={styles.active} onClick={(e) => handleNavLinkClick(e, '/monthly-pricing')}>Rent Determination</NavLink>
        <NavLink to="/game-outcome" activeClassName={styles.active}>Leaderboard</NavLink>
        <NavLink to="/faq" activeClassName={styles.active}>Help Center</NavLink>
        <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
        
        <a href="/path/to/how-to-play.pdf" download="How_to_Play.pdf">
          How to Play
        </a>
        {!userId && (
        <button type="button" className="centeredButton" onClick={signInWithGoogle}>
        Sign in
      </button>
      )}
      </nav>
    </header>
  );
};

export default Header;
