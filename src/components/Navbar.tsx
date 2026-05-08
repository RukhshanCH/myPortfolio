import { useEffect, useState } from "react";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {

    const [isDark, setIsDark] = useState(true);

    const handleThemeToggle = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? "#000" : "#f5f5f5";
        document.body.style.color = isDark ? "#e0e0e0" : "#111";

        const menuIcon = document.getElementById('menuIcon');
        const navLinksMenu = document.getElementById('navLinks');

        const handleClick = () => {
            navLinksMenu?.classList.toggle('active');
        };

        menuIcon?.addEventListener('click', handleClick);

        return () => {
            menuIcon?.removeEventListener('click', handleClick);
        };
    }, [isDark]);

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <div className="logo">
                    RS.
                </div>
                <div className="menu-icon" id="menuIcon">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className="nav-links" id="navLinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button id="themeToggle" className="theme-toggle" onClick={handleThemeToggle}>
                    {isDark ? (
                        <FontAwesomeIcon icon={faSun} />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} />
                    )}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
