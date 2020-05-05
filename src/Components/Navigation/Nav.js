import React from 'react';
import './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/solve">Solve</Link>
            </li>
            <li>
              <Link to="/wxicons">Weather</Link>
            </li>
            <li>
              <Link to="/alert">Alert</Link>
            </li>
            <li>
              <Link to="/caution">Caution</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </nav>
    );
}

export default Nav;