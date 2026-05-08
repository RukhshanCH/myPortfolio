import ExperienceCard from "../components/ExperienceCard"

const Experience = () => {
    const data = [
        {
            date: "2020 - 2021",
            title: "Senior Frontend Developer @ TechCorp",
            description: "Leading frontend architecture for enterprise SaaS, mentoring juniors, optimizing performance by 40%."
        },
        {
            date: "2019 - 2022",
            title: "React Developer @ InnovateLabs",
            description: "Built scalable SPAs, integrated headless CMS, improved user engagement by 35%."
        },
        {
            date: "2016 - 2019",
            title: "Junior Web Developer @ StudioNex",
            description: "Developed responsive websites and collaborated on custom WordPress themes."
        }
    ];

    return (
        <section id="experience" className="fade-up">
            <h2 className="section-title">Experience Journey</h2>
            <div className="timeline">
                {data.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    )
}

export default Experience
