import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    const data = [
        {
            img: " ",
            title: "iNotebook",
            description: "A simple note-taking app with real-time synchronization.",
            techStack: ["React", "Node.js", "MongoDB"],
            githubLink: "iNotebook",
            demoLink: "https://inoteeboook.netlify.app/"
        },
        {
            img: " ",
            title: "AI Face Styler",
            description: "An AI-powered tool that applies artistic styles to facial images in real-time.",
            techStack: ["Flask", "TensorFlow", "OpenCV"],
            githubLink: "AI-Face-Styler",
            demoLink: " "
        },
        {
            img: " ",
            title: "E-commerce Platform",
            description: "A full-featured e-commerce platform with payment integration.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "E-commerce-frontend-design",
            demoLink: "https://e-commerce-website-2025.netlify.app/"
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
