import React from "react";
import web from "./images/web.png";
import mobile from "./images/mobile.png"
import creator from "./images/creator.png"
import backend from "./images/backend.png"
import Experience from "./Experience";
import FadeIn from "./FadeIn";

function Skills() {
    return (
        <>
            <section id="skills">
                <FadeIn>
                    <div className="section-head-container">
                        <h2 className="section-head">
                            Skill Set
                        </h2>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="domains">
                        <FadeIn className="domain">
                            <img src={web} alt="an image" width="70" />
                            Web Development
                        </FadeIn>
                        <FadeIn className="domain">
                            <img src={mobile} alt="an image" width="70" />
                            Rest APIs
                        </FadeIn>
                        <FadeIn className="domain">
                            <img src={creator} alt="an image" width="70" />
                            Mobile Development
                        </FadeIn>
                        <FadeIn className="domain">
                            <img src={backend} alt="an image" width="70" />
                            Databases
                        </FadeIn>
                    </div>
                </FadeIn>
                {/* <div class="box">
          <p>
            I have been doing software programming for over two years and I have
            developed many skills and have worked on a number of projects. I
            have made individual projects as well as collaborated with teams. My
            top skills include Python, Java Script and MERN stack development. I
            am looking forward to developing much more new skills and to work on
            different software engineering roles.
          </p>
        </div> */}
                {/* <h2>My Skill Set</h2> */}
                <FadeIn>
                    <div class="technologies">
                        <FadeIn className="tech-item">
                            <img src={require("./images/python-logo.png")} alt="python logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/js-logo.png")} alt="java script logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/html-logo.png")} alt="html logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/css-logo.png")} alt="css logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/react-logo.png")} alt="react logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/express-logo.png")} alt="express js logo" width="100" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/mongodb-logo.png")} alt="mongodb logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/flask-logo.png")} alt="flask logo" />
                        </FadeIn>
                        <FadeIn className="tech-item">
                            <img src={require("./images/postgresql-logo.png")} alt="postgresql logo" />
                        </FadeIn>
                    </div>
                </FadeIn>
            </section>
            <Experience />
        </>
    );
}

export default Skills;
