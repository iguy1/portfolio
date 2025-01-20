import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
    <nav className = 'navbar'>
        <div className ='navbar-container'>
            <div className = 'navbar-logo'>
                <Link to ='/'>MyPortfolio</Link>
            </div>
            <button className ='navbar-toggle' onClick = {toggleMenu}>
            ☰</button>
        <ul className = 'nav-links'>
            <Link to = "/"><li>Home</li></Link>
            <Link to = "/newpage"><li>Personal Info</li></Link>
            <Link to = "/Languages"><li>Languages</li></Link>
            <Link to = "/vote"><li>Vote</li></Link>
            <Link to = "/projects"><li>Projects</li></Link>
        </ul>
        </div>
    </nav>
    );
}
export default Navbar;