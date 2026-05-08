import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faMobileAlt,
    faPalette,
    faFlag,
    faBriefcase,
    faChartLine,
    faPlug,
    faPaintBrush,
    faTachometerAlt,
    faMagic,
} from "@fortawesome/free-solid-svg-icons"; import ServicesCard from "../components/ServicesCard"

const Services = () => {
    const services = [
        {
            icon: faCode,
            title: "Frontend Web Development",
            description:
                "Build modern, scalable, and responsive web applications using React, TypeScript, and JavaScript.",
        },
        {
            icon: faMobileAlt,
            title: "Responsive Website Design",
            description:
                "Create fully responsive websites that work smoothly across all devices and screen sizes.",
        },
        {
            icon: faReact,
            title: "React Development",
            description:
                "Develop fast and interactive user interfaces using React and component-based architecture.",
        },
        {
            icon: faPalette,
            title: "UI/UX Implementation",
            description:
                "Convert beautiful UI/UX designs into functional and pixel-perfect web interfaces.",
        },
        {
            icon: faFlag,
            title: "Landing Page Development",
            description:
                "Design attractive and high-converting landing pages for brands, startups, and businesses.",
        },
        {
            icon: faBriefcase,
            title: "Portfolio Website Development",
            description:
                "Create personal portfolio websites with modern layouts, animations, and responsive design.",
        },
        {
            icon: faChartLine,
            title: "Dashboard & Admin Panels",
            description:
                "Build professional admin dashboards with charts, tables, authentication, and analytics.",
        },
        {
            icon: faPlug,
            title: "API Integration",
            description:
                "Connect frontend applications with REST APIs and external services for dynamic functionality.",
        },
        {
            icon: faPaintBrush,
            title: "Website Redesign",
            description:
                "Improve outdated websites with modern UI, better performance, and enhanced user experience.",
        },
        {
            icon: faTachometerAlt,
            title: "Performance Optimization",
            description:
                "Optimize website speed, loading performance, SEO, and overall user experience.",
        },
        {
            icon: faMagic,
            title: "Animation & Interactive UI",
            description:
                "Add smooth animations, transitions, and interactive elements for engaging user experiences.",
        },
        {
            icon: faFigma,
            title: "Figma to React Conversion",
            description:
                "Convert Figma or design mockups into clean, responsive, and reusable React components.",
        },
    ];
    return (
        <section id="services" className="fade-up">
            <h2 className="section-title">What I Offer</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <ServicesCard
                        key={index}
                        {...service}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services
