import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projecten</Link></li>
                    <li><Link to="/about">Over Mij</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;