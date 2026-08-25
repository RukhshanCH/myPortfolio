import { useEffect, useState } from "react";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {

    const [isDark, setIsDark] = useState(true);

    const handleThemeToggle = () => {
        setIsDark(prev => !prev);

        if (isDark) {
            document.body.classList.add('light');
            document.documentElement.style.setProperty("--primary", "#ff5e00");
            document.documentElement.style.setProperty("--secondary", "#ff9833");

            document.documentElement.style.setProperty("--shadow-color1", "rgba(255, 152, 51, 0.1)");
            document.documentElement.style.setProperty("--shadow-color2", "rgba(255, 152, 51, 0.2)");
            document.documentElement.style.setProperty("--shadow-color3", "rgba(255, 152, 51, 0.3)");
            document.documentElement.style.setProperty("--shadow-color5", "rgba(255, 152, 51, 0.5)");

            document.documentElement.style.setProperty("--background", "#2b0707");
            document.documentElement.style.setProperty("--profile-bg", "rgba(49, 24, 12, 0.72)");
            document.documentElement.style.setProperty("--profile-ring", "rgba(255, 255, 255, 0.12)");
            document.documentElement.style.setProperty("--profile-glow", "rgba(255, 152, 51, 0.26)");
            document.documentElement.style.setProperty("--button-bg-start", "rgba(38, 20, 12, 0.96)");
            document.documentElement.style.setProperty("--button-bg-end", "rgba(68, 33, 15, 0.88)");
            document.documentElement.style.setProperty("--button-border", "rgba(255, 152, 51, 0.35)");
            document.documentElement.style.setProperty("--button-glow", "rgba(255, 152, 51, 0.22)");
            document.documentElement.style.setProperty("--button-text", "#111111");
           document.documentElement.style.setProperty("--button-icon-color", "#fff8f2");
        } else {
            document.body.classList.remove('light');
            document.documentElement.style.removeProperty("--primary");
            document.documentElement.style.removeProperty("--secondary");
 
            document.documentElement.style.removeProperty("--shadow-color1");
            document.documentElement.style.removeProperty("--shadow-color2");
            document.documentElement.style.removeProperty("--shadow-color3");
            document.documentElement.style.removeProperty("--shadow-color5");
            document.documentElement.style.removeProperty("--profile-bg");
            document.documentElement.style.removeProperty("--profile-ring");
            document.documentElement.style.removeProperty("--profile-glow");
            document.documentElement.style.removeProperty("--button-bg-start");
            document.documentElement.style.removeProperty("--button-bg-end");
            document.documentElement.style.removeProperty("--button-border");
            document.documentElement.style.removeProperty("--button-glow");
            document.documentElement.style.removeProperty("--button-text");
            document.documentElement.style.removeProperty("--button-icon-color");
 
            document.documentElement.style.removeProperty("--background");
        }
    };

    useEffect(() => {

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
                <a href="#home" className="logo" style={{ textDecoration: "none" }}>
                    RS.
                </a>
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
                </ul>
                <button id="themeToggle" aria-label={isDark ? "Switch to Dark" : "Switch to Light"} className="theme-toggle" onClick={handleThemeToggle}>
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
