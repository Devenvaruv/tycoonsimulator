import React, { useEffect, useState } from "react";
import './Home.css';


import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

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

/**
 * Home component representing the introduction and overview of the Austin Real Estate Simulator.
 */
const Home = () => {

    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithRedirect(auth, provider)
          .then((result) => {
            // User signed in
            console.log(result.user);
          })
          .catch((error) => {
            // Handle Errors here.
            console.error(error);
          });
      };
      useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            // User is signed in.
            console.log("User is signed in:", user);
            setUserId(user.uid);
            setUserName(user.displayName);

            console.log("USER Name", user.displayName)
          } else {
            // No user is signed in.
            console.log("No user is signed in.");
          }
        });
        return () => unsubscribe();
      }, []);
    return (
        <div className="austin-intro">
            {/* Main Heading */}
            <h1>Welcome to the Austin Real Estate Simulator!</h1>

            {/* Subheading */}
            <h2>Explore the Thriving City of Austin</h2>

            {/* Introduction Paragraph */}
            <p className="intro-paragraph">
             Once a quiet college town, Austin, Texas, has rapidly grown into a booming tech hub
                and metropolis. This transformation has brought a fusion of cultures, a lively music
                scene, and innovative businesses, making Austin a magnet for both tourists and new
                residents.
            </p>

            {/* Section Heading */}
            <h3>The Rise of a Real Estate Powerhouse</h3>

            {/* Real Estate Powerhouse Paragraph */}
            <p className="intro-paragraph">
                With the advent of platforms like Airbnb, Austin has become a hotspot for property
                investment. The city's diverse neighborhoods offer unique investment opportunities,
                each with its distinct character and potential for varying returns on investment.
            </p>

            {/* Subsection Heading */}
            <h4>Your Journey in Real Estate Investment</h4>

            {/* Real Estate Investment Journey Paragraph */}
            <p className="intro-paragraph"> 
                Step into the world of real estate investment in Austin. This game challenges you to
                maximize profits through smart property acquisitions and effective pricing strategies.
                It's more than a game; it's a simulation of real-world investment decisions and market
                dynamics.
            </p>

            {/* Closing Subheading */}
            <h2>Become a Part of Austin's Growth Story</h2>

            {/* Closing Paragraph */}
            <p className="intro-paragraph">
                As you play, you'll not only develop your skills as a property investor but also gain
                insights into the evolving landscape of Austin's real estate market. Join us in this
                exciting and educational journey as you carve your path to becoming a successful real
                estate mogul in one of America's most dynamic cities.
            </p>
            {!userId && (
        <div className="button-container">
        <button type="button" className="wofButton" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
      )}
        </div>
    );
}

export default Home;
