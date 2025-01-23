
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">Portfolio</Link>
          </div>
          <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/newpage">Personal Page </Link></li>
            <li><Link to="/languages">Coding Languages</Link></li>
            <li><Link to="/vote">Vote</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to = "/sports">Sports</Link></li>
            <li><Link to = "/tvshow">TV Shows</Link></li>
          </ul>
          <button className="navbar-toggle" onClick={toggleMenu}>☰</button>
        </div>
      </nav>
    );
  }
  
export default Navbar;