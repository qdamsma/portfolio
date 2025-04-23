import React from 'react';
import '../../styles/navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navigation navigation-animated">
                <figure>
                    <Link to="/"><img src="/img/logo.png" alt="Mijn logo" className='logo' /></Link>
                </figure>
                <ul className="navigationnav">
                    <li className="navitem"><Link to="/" className='link'>Home</Link></li>
                    <li className="navitem"><Link to="/projects" className='link'>Projecten</Link></li>
                    <li className="navitem"><Link to="/about" className='link'>Over Mij</Link></li>
                    <li className="navitem"><Link to="/contact" className='link'>Contact</Link></li>
                </ul>
                <section>
                    <button aria-label="Schakel donkere modus in/uit" className="dark-toggle">🌓</button>
                </section>
            </nav>
        </header>
    );
};

export default NavBar;