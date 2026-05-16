import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
        const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-container" style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", padding: "0 2rem"}}>
                <p>
                    © <span>{year}</span> Rukhshan Shahid | Crafted with <span style={{ color: 'var(--primary)' }}> React</span>
                </p>
                <div className="social-links" style={{margin: "0"}}>
                    <a href="https://github.com/RukhshanCH/" aria-label="GitHub profile (opens in new tab)" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/rukhshan-shahid-40bb27369/" aria-label="Linkedin profile (opens in new tab)" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} />
                    </a>
                    <a href="https://wa.me/923000941566?text=Hi%20Rukhshan,%20I%20want%20to%20discuss%20a%20project." aria-label="Chat on Whatsapp (opens in new tab)" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon={faWhatsapp} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ch.rukhshan@gmail.com&su=Hello&body=Enter%20your%20message%20here" aria-label="Send email (opens Gmail)" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
