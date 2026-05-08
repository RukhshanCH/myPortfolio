import TypingEffect from "../components/TypingEffect"

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
            <canvas id="hero-canvas"></canvas>
            <div className="hero-content">
                <h1>Rukhshan Shahid</h1>
                <div className="typed-text" id="typedElement">
                    <TypingEffect />
                </div>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Crafting high-performance, modern web experiences with passion and precision. 8+ years of turning ideas into digital excellence.</p>
                <div className="hero-btns">
                    <a href="#contact" className="btn btn-primary">Hire Me</a>
                    <a href="#projects" className="btn btn-outline">View Projects</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
