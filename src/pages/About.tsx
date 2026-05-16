const About = () => {
  return (
    <section id="about" className="fade-up">
        <h2 className="section-title">About <span style={{color: "var(--primary)"}}>Rukhshan</span></h2>
        <div className="about-grid">
            <div className="about-text">
                <p>I'm a passionate Frontend Developer with over 2 years of experience crafting intuitive, blazing-fast web applications. I specialize in React, modern JavaScript, and Django integrations.</p>
                <p>My approach combines clean UI/UX with performance optimization, ensuring every project is both stunning and functional. I've helped startups and enterprises scale their web presence.</p>
                <div className="exp-highlight">
                    <div className="exp-item"><div className="exp-number">5+</div><div>Projects</div></div>
                    <div className="exp-item"><div className="exp-number">2+</div><div>Years Exp</div></div>
                    {/* <div className="exp-item"><div className="exp-number">30+</div><div>Clients</div></div> */}
                </div>
            </div>
            <div className="skills-highlight">
                <h3>Core Expertise</h3>
                <ul style={{ marginTop: "1rem", listStyle: "none" }}>
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Advanced CSS (Tailwind, SCSS)</li>
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Performance Optimization</li>
                    <li style={{marginBottom: "1rem"}}><span style={{color: "var(--primary)"}}>⟡</span> Responsive & Mobile-first Design</li>
                    
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Attention to detail</li>
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Clean & maintainable code</li>
                    <li style={{marginBottom: "1rem"}}><span style={{color: "var(--primary)"}}>⟡</span> Time management & organization</li>
                    
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Debugging & troubleshooting expertise</li>
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Team collaboration & adaptability</li>
                    <li><span style={{color: "var(--primary)"}}>⟡</span> Continuous learning mindset</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About
