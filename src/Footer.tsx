import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
        const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-container" style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", padding: "0 2rem"}}>
                <p>
                    © <span>{year}</span> Rukhshan Shahid | Crafted with <span style={{ color: '#ff5e00' }}> React</span>
                </p>
                <div className="social-links" style={{margin: "0"}}>
                    <a href="https://github.com/RukhshanCH/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/rukhshan-shahid-40bb27369/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://wa.me/923000941566?text=Hi%20Rukhshan,%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ch.rukhshan@gmail.com&su=Hello&body=Enter%20your%20message%20here" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
