import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  img : string;  
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  // img,  
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      {/* <div className="project-img">
        <img src={img} alt={title} className="project-image" />
      </div> */}

      <div className="project-info">
        <h3>{title}</h3>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <p>{description}</p>

        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;