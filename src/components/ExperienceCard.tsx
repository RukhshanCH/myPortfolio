interface ExperienceCardProps {
    date: string;
    title: string;
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
