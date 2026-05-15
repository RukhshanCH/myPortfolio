import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    const data = [
        {
            img: " ",
            title: "iNotebook",
            description: "A simple note-taking app with real-time synchronization.",
            techStack: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/RukhshanCH/iNotebook",
            demoLink: "https://inoteeboook.netlify.app/"
        },
        {
            img: " ",
            title: "AI Face Styler",
            description: "An AI-powered tool that applies artistic styles to facial images in real-time.",
            techStack: ["Flask", "TensorFlow", "OpenCV"],
            githubLink: "https://github.com/RukhshanCH/AI-Face-Styler",
            demoLink: " "
        },
        {
            img: " ",
            title: "DotTechHub",
            description: "Software House Website with Services and Courses offered.",
            techStack: ["HTML", "SCSS", "JQuery"],
            githubLink: "https://github.com/RukhshanCH/DotTechHub",
            demoLink: "https://dotteckhub.com/"
        },
        {
            img: " ",
            title: "E-commerce Platform",
            description: "A full-featured e-commerce platform with payment integration.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/RukhshanCH/E-commerce-frontend-design",
            demoLink: "https://e-commerce-website-2025.netlify.app/"
        },
        {
            img: " ",
            title: "NewsMonkey",
            description: "A modern news aggregation app with real-time updates.",
            techStack: ["React", "Bootstrap", "NewsAPI"],
            githubLink: "https://github.com/RukhshanCH/NewsMonkey",
            demoLink: "https://newsmonkey.netlify.app/"
        },
        {
            img: " ",
            title: "Tax Calculator",
            description: "A simple tax calculation app for determining income tax liability.",
            techStack: ["HTML", "CSS", "JavaScript", "Python"],
            githubLink: "https://github.com/RukhshanCH/Tax-Calculator",
            demoLink: "https://tax-calcuator.netlify.app/"
        },
        {
            img: " ",
            title: "To-do List App",
            description: "A simple to-do list app with task management features.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/RukhshanCH/To-Do-List-App",
            demoLink: "https://todo-list-app.netlify.app/"
        },
        {
            img: " ",
            title: "Textutils",
            description: "A text utility app for performing various text transformations and analyses.",
            techStack: ["React", "Bootstrap"],
            githubLink: "https://github.com/RukhshanCH/Textutils",
            demoLink: "https://textutils.netlify.app/"
        },
    ];
    return (
        <section id="projects" className="fade-up">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {data.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
