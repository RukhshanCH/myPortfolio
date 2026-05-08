import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServicesCardProps {
    icon: any;
    title: string;
    description: string;
}

const ServicesCard = (
    { icon, title, description }: ServicesCardProps
) => {
    return (
        <div className="service-card">
            <FontAwesomeIcon className="service-icon" icon={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServicesCard
