import { useState } from "react";
import FadeIn from "./FadeIn";
import { useSwipeable } from "react-swipeable";

function About() {
    const content = [
        "Got something wrong with your website? Or need a professional developer to digitize your business? Worry not, You are at the right place.",
        "I'm Arham, a Full Stack Developer who is passionate about building robust web systems and intuitive web designs.",
        "Over the years, I have worked with multiple web development technologies including MERN Stack, Next.js, Django and Flask.",
        "Always curious, I continuously keep improving  myself and expand my skill set. Need help with your website? You have me!",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionState, setTransitionState] = useState(false);

    const handleNext = () => {
        setTransitionState(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % content.length);
            setTransitionState(false);
        }, 300);
    };

    const handlePrev = () => {
        setTransitionState(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
            setTransitionState(false);
        }, 300);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <section {...swipeHandlers} className="carousel-container">
            <FadeIn>
                <h2 className="section-head">Overview</h2>

                <div className={`carousel-content ${transitionState ? "fade" : ""}`}>
                    <button
                        className="chevron left"
                        onClick={handlePrev}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <p className="carousel-text">{content[currentIndex]}</p>
                    <button
                        className="chevron right"
                        onClick={handleNext}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            </FadeIn>
            <div className="carousel-dots">
                {content.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${currentIndex === idx ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
            {/* <Education /> */}
            {/* <Experience /> */}
        </section>
    );
}

export default About;
