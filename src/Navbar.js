import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import newlogo from './images/IMG_1728.png'; // Assuming you have a new logo image


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src={newlogo} alt="Logo" className="logo-image" />
            <span className="logo-text">Ian Guy</span>
          </Link>
        </div>
        
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/newpage" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/languages" onClick={handleLinkClick}>Skills</Link></li>
          <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li>
            <a
              href="https://www.linkedin.com/in/ian-guy/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/iguy1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              GitHub
            </a>
          </li>
        </ul>
        
        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="hamburger-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;