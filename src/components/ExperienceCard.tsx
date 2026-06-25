import type { JSX } from "react";

interface ExperienceCardProps {
    date: string;
    title: JSX.Element;
    description: string;
}

const ExperienceCard = (
    { date, title, description }: ExperienceCardProps
) => {
    return (
        <div className="timeline-item">
            <div className="timeline-date">{date}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ExperienceCard
