import React from "react";
import FadeIn from "./FadeIn";

function Projects() {
    const projects = [
        {
            url: "https://bakery-management-system-app.vercel.app/",
            img: require("./images/bms-pic2.png"),
            title: "Bakery Management System",
            description: `A MERN Stack Application built with the aim of providing the very
                         best User Experience and functionality. The application comes with
                         a login and signup feature. Users can create an acccount after
                         which they can check the products and items available at the
                         bakery. Users can make and update bookings and cancel them if they
                         want. The users can also update their account information if they
                         want. The application also has an admin side for the management of
                         the system. The database has been designed to be fully scalabale
                         and secure. Users are authenticated before making any operation
                         and only authorized users have access to making orders or any
                         updates. You can click on any of these images to visit the website
                         or press the button below to view the source code at github.`,
            githubLink: "https://github.com/a-arham-x/bakery-management-system"
        },
        {
            url: "https://our-own-notes.vercel.app/",
            img: require("./images/nb-pic2.png"),
            title: "Our Own Notes",
            description: `Our Own Notes is a PERN Stack application which means that it has
                         a PostgreSQL database in place of MongoDB as in MERN stack
                         applications. The application allows its users to create notes,
                         view, edit or delete them. The user has to first signup and login
                         into the application. The user can also update their account
                         information or delete their account. The Application provides a
                         great user experience.`,
            githubLink: "https://github.com/a-arham-x/notes-react-app"
        },
        {
            url: "",
            img: require("./images/rn-pic1.png"),
            title: "WhatsApp UI Clone",
            description: `A clone of the Whatsapp App that I have built in React Native. In this static mobile app, I have
                         developed four screens of the whatsapp app, the chats screen where you access
                         all your chats, the updates screen for viewing and uploading status, the communities
                         screen where you can see all the communities you have joined and the calls screen that
                         shows the call logs. In this application I have made sure that I adhere to
                         all the UI/UX principles as done by Whatsapp.`,
            githubLink: "https://github.com/a-arham-x/whatsapp-ui-clone"
        },
        {
            url: "https://event-manager-web.vercel.app/",
            img: require("./images/em-pic1.png"),
            title: "Event Manager",
            description: `A Node.js Application that is built for users to store, maange and
                         plan their events. The application allows the users to check each
                         others events which can help them plan accordingly as well as plan
                         to attend a certain event. The application comes with a weather
                         api integration that tells the users about the weather of a
                         specific place on a specific date, so they could decide if that
                         time and place is suitable for arranging any event or not.`,
            githubLink: "https://github.com/a-arham-x/event-manager"
        },
        {
            url: "https://finance-buddy-hazel.vercel.app/",
            img: require("./images/et-pic3.png"),
            title: "Finance Buddy(Expense Tracking App)",
            description: `A Next.js expense tracking application that leverages its users to
                         keep a track of their monthly expenses and provides them with an
                         annual report. I have made use of Nextjs for developing the
                         application frontend and Next.js api for developing the backend. I
                         have made use of Prisma ORM for the easy management of data in the
                         application`,
            githubLink: "https://github.com/a-arham-x/nextjs-expense-tracker"
        },
        {
            url: "https://photo-editor-ashy.vercel.app/",
            img: require("./images/pea-pic2.png"),
            title: "Photo Editor Web App",
            description: `A Next.js photo editor application that comes with variety of
                         functionalities including image cropping, applying filters,
                         rotating and image resizing. I have used Next.js for developing
                         the application frontend an Next.js api for developing the
                         backend. I have configured Prisma ORM inn the application for the
                         management of all data and have made use of PostgreSQL database to
                         store images and user information.`,
            githubLink: "https://github.com/a-arham-x/photo-editor"
        }
    ]
    return (
        <>
            <section id="projects">
                <FadeIn>
                    <div className="section-head-container">
                        <h2 className="section-head">
                            Projects
                        </h2>
                    </div>
                </FadeIn>
                <div class="projects-container">
                    {projects.map((project, i) => {
                        return <FadeIn key={i} className="project">
                            <a
                                href={project.url}
                                target="_blank"
                            >
                                <img
                                    src={project.img}
                                    alt="Project Screenshot"
                                />
                            </a>
                            <h3>{project.title}</h3>
                            <p>
                                {project.description}
                            </p>
                            <div class="github-link">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                >
                                    <img src={require("./images/github-logo.png")} alt="" width="50" />
                                </a>
                            </div>
                        </FadeIn>
                    })}
                </div>
            </section >
        </>
    );
}

export default Projects;
