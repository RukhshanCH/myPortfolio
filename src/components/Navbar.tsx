import { useEffect, useState } from "react";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {

    const [isDark, setIsDark] = useState(true);

    const handleThemeToggle = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        !isDark ? document.body.classList.add('light') : document.body.classList.remove('light');

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
                    {/* <li><a href="#experience">Experience</a></li> */}
                    <li><a href="#services">Services</a></li>
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
