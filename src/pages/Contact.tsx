import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("✓ Message sent! I'll get back soon.");

        (e.target as HTMLFormElement).reset();

        setTimeout(() => setStatus(""), 3000);
    };
    return (
        <section id="contact" className="fade-up">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea rows={5} placeholder="Your Message..." />
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Send Message
                    </button>
                    <p id="formStatus" style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
                        <span style={{color: 'var(--primary)'}}>{status}</span>
                    </p>
                </form>
                <div>
                    <h3>Let's work together.</h3>
                    <p>Available for freelance and full-time opportunities.</p>
                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
