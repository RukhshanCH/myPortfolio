import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
      faJs,
    faReact,
    faNodeJs,
    faGitAlt,
    faTailwindCss,
    faTypescript,
    faGithub,
    faBootstrap
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

    const skills = [
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'TypeScript', icon: faTypescript },
        { name: 'JavaScript', icon: faJs },
        { name: 'Tailwind CSS', icon: faTailwindCss },
        { name: 'Bootstrap', icon: faBootstrap },
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Git', icon: faGitAlt },
        { name: 'GitHub', icon: faGithub }
    ]
    
    const doubled = [...skills, ...skills];

    return (
        <section id="skills" style={{margin: "0", maxWidth: "100%"}} className="marquee-wrap fade-up">
            <h2 className="section-title">Tech Stack</h2>
            <div className="marquee-inner">
                {doubled.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <FontAwesomeIcon className="skill-icon" icon={skill.icon} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
