import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    const data = [
        {
            img: " ",
            title: "AI Face Detector",
            description: "Real-time face detection using webcam and TensorFlow.",
            techStack: ["Flask", "TensorFlow", "OpenCV"],
            githubLink: "https://github.com/username/project",
            demoLink: "https://project-demo.com"
        },
        {
            img: " ",
            title: "AI Face Detector",
            description: "Real-time face detection using webcam and TensorFlow.",
            techStack: ["Flask", "TensorFlow", "OpenCV"],
            githubLink: "https://github.com/username/project",
            demoLink: "https://project-demo.com"
        },
        {
            img: " ",
            title: "AI Face Detector",
            description: "Real-time face detection using webcam and TensorFlow.",
            techStack: ["Flask", "TensorFlow", "OpenCV"],
            githubLink: "https://github.com/username/project",
            demoLink: "https://project-demo.com"
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
