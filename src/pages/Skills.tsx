import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faTailwindCss
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <section id="skills" className="fade-up">
            <h2 className="section-title">Tech Stack</h2>
            <div className="skills-grid">
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faHtml5} /><span>HTML5</span></div>
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faCss3Alt} /><span>CSS3</span></div>
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faJs} /><span>JavaScript</span></div>
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faTailwindCss} /><span>Tailwind CSS</span></div>
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faReact} /><span>React</span></div>
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faNodeJs} /><span>Node.js</span></div>
                <div className="skill-card"><FontAwesomeIcon className="skill-icon" icon={faGitAlt} /><span>Git/GitHub</span></div>
            </div>
        </section>
    )
}

export default Skills
