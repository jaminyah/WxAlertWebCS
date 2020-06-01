import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppIcon from '../../assets/images/app-icon32.png';
import "./NavMenu.css";

function NavMenu () {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    
        return () => {
          mediaQuery.removeListener(handleMediaQueryChange);
        };
      }, []);
    
      const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
          setIsSmallScreen(true);
        } else {
          setIsSmallScreen(false);
        }
      };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="Header">
             <NavLink to="/"><img src={AppIcon} alt="app icon" /></NavLink> 
            
            { (!isSmallScreen || isNavVisible) && (
                <nav className="Nav">
    
                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/">
                        <span className="link-yellow">Home</span></NavLink>

                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/solve">
                        <span className="link-white">Solve</span></NavLink>

                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/wxicons">
                        <span className="link-white">Weather</span></NavLink>

                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/alert">
                        <span className="link-white">Alert</span></NavLink>

                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/caution">
                        <span className="link-white">Caution</span></NavLink>

                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/legal">
                        <span className="link-white">Legal</span></NavLink>

                    <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/contact">
                        <span className="link-white">Comments</span></NavLink>
                </nav> 
            )}

            <button onClick={toggleNav} className="Burger">
                <img src={require("../../assets/images/hamburger.png")} alt="burger icon" />
            </button>

        </header>
    );
}

export default NavMenu;