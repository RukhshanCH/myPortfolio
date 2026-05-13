import TypingEffect from "../components/TypingEffect"
import LightRays from '../ReactBitComponents/LightRays'
import CV from "../assets/CV.pdf"
import heroImg from "../assets/RukhshanShahid.png"

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
            />
            <div className="hero-container">
                <div className="hero-image">
                    <span></span>
                    <img src={heroImg} alt="Hero" />
                </div>
                <div className="hero-content">
                    <h1>Rukhshan <span style={{ color: "var(--primary)" }}>Shahid</span></h1>
                    <div className="typed-text" id="typedElement">
                        <TypingEffect />
                    </div>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Crafting high-performance, modern web experiences with passion and precision. 2+ years of turning ideas into digital excellence.</p>
                    <div className="hero-btns">
                        <a href={CV} download="resume.pdf" className="btn btn-outline">Download Resume</a>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
