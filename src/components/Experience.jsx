import FadeIn from "./FadeIn";

function Experience() {
    const experiences = [
        {
            title: "Software Engineer at Recce",
            img: require("./images/recce.jpeg"),
            duration: "June 2026 - Present",
            description: `Recce is a movie discovery and review platform that allows users to share 
                          their opinions, explore reviews, and discover their next watch. As a Software Engineer 
                          at Recce, I have contributed to the development, maintenance, and continuous improvement 
                          of the platform. I have worked closely with the team to build and deliver a product that 
                          meets user expectations while providing a seamless experience. My contributions span 
                          multiple areas of software engineering, including web development, mobile application 
                          development, and DevOps, giving me hands-on experience across the product development lifecycle.`,
            reverse: false
        },
        {
            title: "Associate Software Engineer at Stax3",
            img: require("./images/stax3.jpeg"),
            duration: "June 2025 - May 2026",
            description: `Stax3 is a software development company providing 
                          software solutions and services to clients worldwide. During my time 
                          at Stax3, I contributed to the development of a web-based platform that 
                          allows users to create and deploy AI-powered chatbot agents on their websites.
                          I also worked on maintaining and enhancing a no-code gaming platform, contributing 
                          to its ongoing development and ensuring its functionality and reliability.`,
            reverse: true
        },
        {
            title: "Web Developer at Upwork",
            img: require("./images/upwork.jpeg"),
            duration: "August 2023 - May 2025",
            description: `I worked as a full-time web developer on Upwork, dedicated to
                          exceeding client expectations through exceptional work. My approach
                          involves thoroughly understanding client requirements to deliver
                          projects that align perfectly with their vision. I specialize in both
                          front-end and back-end development, ensuring a comprehensive solution
                          for each project. Beyond Upwork, I am readily available for clients
                          seeking my full-stack web development services. I pride myself on open
                          communication and timely delivery, making the collaboration process
                          seamless. Let’s create something amazing together!`,
            reverse: false
        },
        {
            title: "Software Engineer Intern at Onebyte",
            img: require("./images/onebyte.jpeg"),
            duration: "July 2023 - August 2023",
            description: `Worked as a Software Engineer Intern at Onebyte. During this
                          internship, I worked with industry professionals to provide solution
                          to creating alert queries in Elasticsearch and Opensearch. I also
                          worked for the development of an API that manages all the requests to
                          a Hospital Management System's server. And I worked for the
                          documentation of HL7 which is a messaging format used for sharing
                          information by health care providers.`,
            reverse: true
        },
        {
            title: "Software Engineer Intern at Paakhealth",
            img: require("./images/paakhealth.jpeg"),
            duration: "September 2022 - December 2022",
            description: `During this internship, I alongside my team worked on developing the
                          documentation of a health care application. Our goal was to provide a
                          design and architecture solution for a health care application that
                          manages a blood donation service and an ambulance service. Working
                          here I learnt how different problems are solved in software
                          development and what formats are used for communicating the
                          information to the stakeholders.`,
            reverse: false
        }
    ]
    return (
        <>
            <div className="experience">
                <FadeIn>
                    <div className="section-head-container">
                        <h2 className="section-head">
                            Work Experience
                        </h2>
                    </div>
                </FadeIn>
                {experiences.map((exp, i) => {
                    return <FadeIn key={i}>
                        <div className={exp.reverse ? "exp-box exp-reverse" : "exp-box"}>
                            <div class="box">
                                <div className="exp-header">
                                    <h3>{exp.title}</h3>
                                    <img src={exp.img} alt="" width="300" />
                                </div>
                                <pre>{exp.duration}</pre>
                                <p>
                                    {exp.description}
                                </p>
                            </div>
                            <img src={exp.img} alt="" width="300" />
                        </div>
                    </FadeIn>
                })}
            </div>
        </>
    );
}

export default Experience;
