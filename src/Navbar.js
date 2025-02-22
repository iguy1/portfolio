
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/5eKX.gif'

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Button clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" sytle ={{width:"500px"}} />
            <span className="logo-text"></span>
          </Link>          </div>
          <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/newpage">Personal Page </Link></li>
            <li><Link to="/languages">Coding Languages</Link></li>
            <li><Link to="/vote">Vote</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to = "/sports">Sports</Link></li>
            <li><Link to = "/tvshow">TV Shows</Link></li>
          </ul>
          <button className="navbar-toggle" onClick={toggleMenu}aria-label="Toggle Navigation" 
          >☰</button>
        </div>
      </nav>
    );
  }
  
export default Navbar;