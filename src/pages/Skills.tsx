import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconType } from "react-icons";
import {
    faHtml5, faCss3Alt, faJs, faReact, faNodeJs,
    faGitAlt, faTailwindCss, faTypescript, faGithub, faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import { SiSupabase, SiNextdotjs } from "react-icons/si";

type Skill =
    | { name: string; icon: IconDefinition; type: 'fa' }
    | { name: string; icon: IconType; type: 'si' };

const Skills = () => {
    const skills = useMemo<Skill[]>(() => [
        { name: 'HTML5', icon: faHtml5, type: 'fa' },
        { name: 'CSS3', icon: faCss3Alt, type: 'fa' },
        { name: 'TypeScript', icon: faTypescript, type: 'fa' },
        { name: 'JavaScript', icon: faJs, type: 'fa' },
        { name: 'Tailwind CSS', icon: faTailwindCss, type: 'fa' },
        { name: 'Bootstrap', icon: faBootstrap, type: 'fa' },
        { name: 'React.js', icon: faReact, type: 'fa' },
        { name: 'Next.js', icon: SiNextdotjs, type: 'si' },
        { name: 'Node.js', icon: faNodeJs, type: 'fa' },
        { name: 'Supabase', icon: SiSupabase, type: 'si' },
        { name: 'Git', icon: faGitAlt, type: 'fa' },
        { name: 'GitHub', icon: faGithub, type: 'fa' },
    ], []);

    const doubled = useMemo(() => [...skills, ...skills], [skills]);

    return (
        <section id="skills" style={{ margin: "0", maxWidth: "100%" }} className="marquee-wrap fade-up">
            <h2 className="section-title">Tech Stack</h2>
            <div className="marquee-inner">
                {doubled.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill.type === 'fa' ? (
                            <FontAwesomeIcon className="skill-icon" icon={skill.icon} />
                        ) : (
                            <skill.icon className="skill-icon" />
                        )}
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;