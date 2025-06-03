import FadeIn from "./FadeIn"

function ResumeDownloader() {
    return (
        <FadeIn className="resume-container">
            <a className="get-resume" href={require("../Arham Resume.pdf")} download="Arham Resume">
                Download Resume
            </a>
        </FadeIn>
    )
}

export default ResumeDownloader
