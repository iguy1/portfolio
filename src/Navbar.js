import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import newlogo from './images/IMG_1728.png'; // Assuming you have a new logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/portfolio" className="navbar-logo-link">
          <img src={newlogo} alt="Logo" className="logo-image" style={{ width: '100px' }} />            <span className="logo-text"></span>
          </Link>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/portfolio">Home</Link></li>
          <li><Link to="/newpage">Personal Page</Link></li>
          <li><Link to="/languages">Tech Stack</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          {/* Add external links for LinkedIn and GitHub */}
          <li>
            <a
              href="https://www.linkedin.com/in/ian-guy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/iguy1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/tvshow">TV Shows</Link></li>
        </ul>
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;