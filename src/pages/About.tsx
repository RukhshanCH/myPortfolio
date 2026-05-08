const About = () => {
  return (
    <section id="about" className="fade-up">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
            <div className="about-text">
                <p>I'm a passionate Frontend Developer with over 8 years of experience crafting intuitive, blazing-fast web applications. I specialize in React, modern JavaScript, and Django integrations.</p>
                <p>My approach combines clean UI/UX with performance optimization, ensuring every project is both stunning and functional. I've helped startups and enterprises scale their web presence.</p>
                <div className="exp-highlight">
                    <div className="exp-item"><div className="exp-number">50+</div><div>Projects</div></div>
                    <div className="exp-item"><div className="exp-number">8+</div><div>Years Exp</div></div>
                    <div className="exp-item"><div className="exp-number">30+</div><div>Clients</div></div>
                </div>
            </div>
            <div className="skills-highlight">
                <h3>Core Expertise</h3>
                <ul style={{ marginTop: "1rem", listStyle: "none" }}>
                    <li>⚡ Modern React (Hooks, Next.js)</li>
                    <li>⚡ Django & REST APIs</li>
                    <li>⚡ Advanced CSS (Tailwind, SCSS)</li>
                    <li>⚡ Performance Optimization</li>
                    <li>⚡ Responsive & Mobile-first Design</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About
