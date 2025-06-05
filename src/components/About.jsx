import { useState, useEffect } from "react";

const content = [
    "Got something wrong with your website? Or need a professional developer to digitize your business? Then worry not.",
    "I'm Arham, a Full Stack Developer passionate about building robust web systems and intuitive web designs using his craft.",
    "I have worked with multiple web development technologies including MERN Stack, Next.js, Django and Flask.",
    "Always curious, I continuously keep improving myself and expand my skill set. Need help with your website? You have me!",
];

function useContentCycler() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % content.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return index;
}

function About() {
    const contentIndex = useContentCycler();
    const [displayedIndex, setDisplayedIndex] = useState(contentIndex);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        if (contentIndex !== displayedIndex) {
            setTransitioning(true);
            const timeout = setTimeout(() => {
                setDisplayedIndex(contentIndex);
                setTransitioning(false);
            }, 500); // match with CSS duration
            return () => clearTimeout(timeout);
        }
    }, [contentIndex, displayedIndex]);

    return (
        <section>
            <div
                className={`overview-card-wrapper ${transitioning ? "slide-out" : "slide-in"
                    }`}
            >
                <div className="overview-card">
                    <p className="overview-text">{content[displayedIndex]}</p>
                </div>
            </div>
        </section>
    );
}

export default About;
