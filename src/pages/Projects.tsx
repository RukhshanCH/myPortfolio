import ProjectCard from "../components/ProjectCard"
import RevealSection from "../components/RevealSection"

const Projects = () => {
    const data = [
        {
            img: " ",
            title: "Barberly",
            description: "A barber shop website with booking and service management features.",
            techStack: ["Next", "TypeScript", "Supabase", "SafePay Integration"],
            githubLink: "",
            demoLink: "https://barberly-sable.vercel.app/"
        },
        {
            img: " ",
            title: "V-Productions & Marketing",
            description: "A digital business and training company delivering solutions in various fields.",
            techStack: ["Next", "TypeScript", "Supabase", "RAG + OpenAI API"],
            githubLink: "",
            demoLink: "https://v-marketing-lahore.vercel.app/"
        },
        {
            img: " ",
            title: "CMS Porfolio",
            description: "A full-stack content management system for a portfolio website.",
            techStack: ["React", "TypeScript", "Supabase", "Node.js"],
            githubLink: "https://github.com/RukhshanCH/CMS-Portfolio",
            demoLink: "https://cms-portfolio-rho.vercel.app/"
        },
        {
            img: " ",
            title: "Roznamcha",
            description: "A daily accounting system with real-time updates.",
            techStack: ["React", "IndexexDb"],
            githubLink: "",
            demoLink: "https://roznamcha-eta.vercel.app/"
        },
        {
            img: " ",
            title: "GrowZap",
            description: "The Full-Service Digital Marketing Agency Built to Grow Businesses",
            techStack: ["Next", "TypeScript", "Framer Motion"],
            githubLink: "https://github.com/RukhshanCH/GrowZap",
            demoLink: "https://grow-zap.vercel.app/"
        },
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
            title: "NewsMonkey",
            description: "A modern news aggregation app with real-time updates.",
            techStack: ["React", "Bootstrap", "NewsAPI"],
            githubLink: "https://github.com/RukhshanCH/NewsMonkey",
            demoLink: "https://newsmonkey-n.netlify.app/"
        },
        {
            img: " ",
            title: "AI Face Styler",
            description: "An AI-powered tool that applies artistic styles to facial images in real-time.",
            techStack: ["Flask", "TensorFlow", "OpenCV"],
            githubLink: "https://github.com/RukhshanCH/AI-Face-Styler",
            demoLink: "http://161.118.181.213:8080/"
        },
        {
            img: "https://raw.githubusercontent.com/mhanzlah/climate-change-semester-project/main/preview.png",
            title: "AIClimateEffect",
            description: "A web application that predicts climate change impacts using AI models.",
            techStack: ["React", "FastApi"],
            githubLink: "https://github.com/mhanzlah/climate-change-semester-project",
            demoLink: "https://ai-climate-effect.vercel.app/"
        },
        {
            img: " ",
            title: "DotTechHub",
            description: "Software House Website with Services and Courses offered.",
            techStack: ["HTML", "SCSS", "JQuery"],
            githubLink: "https://github.com/RukhshanCH/dotTechHub",
            demoLink: "https://dotteckhub.com/"
        },
        {
            img: " ",
            title: "Interest Calculator",
            description: "A simple interest calculator app with real-time updates and chart visualization.",
            techStack: ["Typescript", "Next.js"],
            githubLink: "https://github.com/RukhshanCH/Interest-calculator/",
            demoLink: "https://interest-calculator-three-omega.vercel.app/"
        },
        {
            img: " ",
            title: "E-commerce Platform",
            description: "A full-featured e-commerce platform with payment integration.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/RukhshanCH/E-commerce-frontend-design",
            demoLink: "https://e-commerce-website-2025.netlify.app/"
        },
    ];
    return (
        <RevealSection id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {data.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </RevealSection>
    )
}

export default Projects
