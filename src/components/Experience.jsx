import FadeIn from "./FadeIn";

function Experience() {
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
                <FadeIn>
                    <div className="exp-box">
                        <div class="box">
                            <div className="exp-header">
                                <h3>Web Developer at Upwork</h3>
                                <img src={require("./images/upwork.jpeg")} alt="" width="300" />
                            </div>
                            <pre>August 2023 - Present</pre>
                            <p>
                                I am currently a full-time web developer on Upwork, dedicated to
                                exceeding client expectations through exceptional work. My approach
                                involves thoroughly understanding client requirements to deliver
                                projects that align perfectly with their vision. I specialize in both
                                front-end and back-end development, ensuring a comprehensive solution
                                for each project. Beyond Upwork, I am readily available for clients
                                seeking my full-stack web development services. I pride myself on open
                                communication and timely delivery, making the collaboration process
                                seamless. Let’s create something amazing together!
                            </p>
                        </div>
                        <img src={require("./images/upwork.jpeg")} alt="" width="300" />
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="exp-box">
                        <img src={require("./images/onebyte.jpeg")} alt="" width="300" />
                        <div class="box">
                            <div className="exp-header">
                                <h3>Software Engineer Intern at Onebyte</h3>
                                <img src={require("./images/onebyte.jpeg")} alt="" width="300" />
                            </div>
                            <pre>July 2023 - August 2023</pre>
                            <p>
                                Worked as a Software Engineer Intern at Onebyte. During this
                                internship, I worked with industry professionals to provide solution
                                to creating alert queries in Elasticsearch and Opensearch. I also
                                worked for the development of an API that manages all the requests to
                                a Hospital Management System's server. And I worked for the
                                documentation of HL7 which is a messaging format used for sharing
                                information by health care providers.
                            </p>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="exp-box">
                        <div class="box">
                            <div className="exp-header">
                                <h3>Software Engineer Intern at Paakhealth</h3>
                                <img src={require("./images/paakhealth.jpeg")} alt="" width="300" />
                            </div>
                            <pre>September 2022 - December 2022</pre>
                            <p>
                                During this internship, I alongside my team worked on developing the
                                documentation of a health care application. Our goal was to provide a
                                design and architecture solution for a health care application that
                                manages a blood donation service and an ambulance service. Working
                                here I learnt how different problems are solved in software
                                development and what formats are used for communicating the
                                information to the stakeholders.
                            </p>
                        </div>
                        <img src={require("./images/paakhealth.jpeg")} alt="" width="300" />
                    </div>
                </FadeIn>
            </div>
        </>
    );
}

export default Experience;
