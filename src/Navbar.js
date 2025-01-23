import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">Portfolio</Link>
          </div>
          <ul className="navbar-links">
            <li><Link to="/newpage">Personal Page </Link></li>
            <li><Link to="/languages">Coding Languages</Link></li>
            <li><Link to="/vote">Vote</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to = "/sports">Sports</Link></li>
            <li><Link to = "/tvshow">TV Shows</Link></li>
          </ul>
          <button className="navbar-toggle">☰</button>
        </div>
      </nav>
    );
  }
  
export default Navbar;