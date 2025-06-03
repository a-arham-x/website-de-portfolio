import React from "react";
import FadeIn from "./FadeIn";

function Footer() {
    return (
        <>
            <FadeIn>
                <footer>
                    <a
                        href="https://www.linkedin.com/in/abdul-arham-252303247/"
                        target="_blank"
                    >
                        <img
                            src={require("./images/linkedin-blue-logo-icon.png")}
                            alt="linkedin logo"
                        />
                    </a>
                    <a href="https://github.com/a-arham-x" target="_blank">
                        <img src={require("./images/github-logo.png")} alt="github logo" />
                    </a>
                    <a href="https://wa.me/+923175271509" target="_blank">
                        <img src={require("./images/whatsapp.png")} alt="whatsapp logo" />
                    </a>
                    <a href="mailto:abdul.arham9123@gmail.com" target="_blank">
                        <img src={require("./images/gmail.png")} alt="gmail logo" />
                    </a>
                </footer>
            </FadeIn>
        </>
    );
}

export default Footer;
