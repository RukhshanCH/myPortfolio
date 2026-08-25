import { useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
    SiBootstrap,
    SiCss,
    SiDjango,
    SiDocker,
    SiFlask,
    SiFramer,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiZapier,
} from "react-icons/si";

type Skill = {
    name: string;
    icon: IconType;
    category: "Frontend" | "Backend" | "Tools" | "Automation";
};

const Skills = () => {
    const skills = useMemo<Skill[]>(() => [
        { name: "HTML5", icon: SiHtml5, category: "Frontend" },
        { name: "CSS3", icon: SiCss, category: "Frontend" },
        { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
        { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
        { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
        { name: "Bootstrap", icon: SiBootstrap, category: "Frontend" },
        { name: "React.js", icon: SiReact, category: "Frontend" },
        { name: "Framer Motion", icon: SiFramer, category: "Frontend" },
        { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
        { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
        { name: "Flask", icon: SiFlask, category: "Backend" },
        { name: "Django", icon: SiDjango, category: "Backend" },
        { name: "Supabase", icon: SiSupabase, category: "Backend" },
        { name: "Docker", icon: SiDocker, category: "Tools" },
        { name: "Git", icon: SiGit, category: "Tools" },
        { name: "GitHub", icon: SiGithub, category: "Tools" },
        { name: "Zapier", icon: SiZapier, category: "Automation" },
    ], []);

    const categories = useMemo(
        () => ["All", ...new Set(skills.map((skill) => skill.category))],
        [skills]
    );
    const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

    const filteredSkills = useMemo(
        () =>
            activeCategory === "All"
                ? skills
                : skills.filter((skill) => skill.category === activeCategory),
        [activeCategory, skills]
    );

    return (
        <section id="skills" style={{ margin: "0 auto" }} className="fade-up">
            <h2 className="section-title">Tech Stack</h2>
            <div className="skills-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`skills-filter-btn ${activeCategory === category ? "active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="skills-grid">
                {filteredSkills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <skill.icon className="skill-icon" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;