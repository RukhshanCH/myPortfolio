import ExperienceCard from "../components/ExperienceCard"
import RevealSection from "../components/RevealSection"

const Experience = () => {
    const data = [
        {
            date: "Jul 2026 - Sep 2026",
            title: <>
                Web Developer Intern @{" "}
                <a
                    href="https://v-marketing-lahore.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                >
                    V-Productions & Marketing
                </a>
            </>,
            description: "A digital business and training company delivering solutions in digital marketing, AI automation, web development, creative services, and practical skill development."
        },
        {
            date: "May 2026 - Jun 2026",
            title: <>
                React Developer @{" "}
                <a
                    href="https://grow-zap.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                >
                    GrowZap
                </a>
            </>,
            description: "Redesigned and rebuilt the company website into a professional portfolio site to showcase GrowZap's services and work."
        },
        {
            date: "Jun 2024 - Jul 2025",
            title: <>
                React Developer @{" "}
                <a
                    href="https://dotteckhub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                >
                    DotTechHub
                </a>
            </>,
            description: "Developed and maintained responsive web applications using React.js and JavaScript, following modern frontend coding practices."
        },
        {
            date: "Jul 2025 - Aug 2025",
            title: <>
                Web Developer Intern @{" "}
                <a
                    href="https://developershubcorp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                >
                    DevelopersHub Corporation
                </a>
            </>,
            description: "Contributed to development of a functional e-commerce platform, building product listing, shopping cart, and checkout features."
        },
        {
            date: "May 2025 - Jul 2025",
            title: <>
                Web Developer Intern @{" "}
                <a
                    href="https://www.codealpha.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                >
                    Code Alpha
                </a>
            </>,
            description: "Built Beginners friendly websites like Image-Gallery, Music Player and more."
        },
    ];

    return (
        <RevealSection id="experience">
            <h2 className="section-title">Experience Journey</h2>
            <div className="timeline">
                {data.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </RevealSection>
    )
}

export default Experience
