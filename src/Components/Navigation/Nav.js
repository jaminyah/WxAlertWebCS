import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav className="navbar navbar-expand-md bg-primary">

            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main-navigation">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/"><span className="nav-link text-white">Home</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/solve"><span className="nav-link text-white">Solve</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/wxicons"><span className="nav-link text-white">Weather</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/alert"><span className="nav-link text-white">Alert</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/caution"><span className="nav-link text-white">Caution</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/legal"><span className="nav-link text-white">Legal</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"><span className="nav-link text-white">Contact</span></Link>
                </li>
              </ul>
            </div>
      </nav>
    );
}

export default Nav;