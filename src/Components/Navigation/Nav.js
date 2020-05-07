import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import AppIcon from '../../assets/images/app-icon32.png';

function Nav() {
    return (
      <nav className="navbar navbar-expand-md">

            <li className="navbar-brand">
              <NavLink to="/"><span className="nav-link text-white"><img src={AppIcon} alt="app icon" /></span></NavLink>
            </li>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main-navigation">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/" >
                    <span className="nav-link text-white">Home</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/solve">
                    <span className="nav-link text-white">Solve</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/wxicons">
                    <span className="nav-link text-white">Weather</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/alert">
                    <span className="nav-link text-white">Alert</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/caution">
                    <span className="nav-link text-white">Caution</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/legal">
                    <span className="nav-link text-white">Legal</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeStyle={{fontWeight: "bold", color: 'white'}} to="/contact">
                    <span className="nav-link text-white">Contact</span></NavLink>
                </li>
              </ul>
            </div>
      </nav>
    );
}

export default Nav;