import TypingEffect from "../components/TypingEffect"
import CV from "../assets/CV.pdf"

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
            <canvas id="hero-canvas"></canvas>
            <div className="hero-content">
                <h1>Rukhshan <span style={{color: "#ff5e00"}}>Shahid</span></h1>
                <div className="typed-text" id="typedElement">
                    <TypingEffect />
                </div>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Crafting high-performance, modern web experiences with passion and precision. 2+ years of turning ideas into digital excellence.</p>
                <div className="hero-btns">
                    <a href={CV} download="resume.pdf" className="btn btn-outline">Download Resume</a>
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
