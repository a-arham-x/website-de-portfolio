import React, { useState } from 'react';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="navbar lato-regular">
            <h2>A.Arham</h2>
            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>
            <div className={`mobile-nav ${menuOpen ? 'visible' : ''}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#hobbies" onClick={() => setMenuOpen(false)}>Hobbies</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            <div class="links">
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#hobbies">Hobbies</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}
