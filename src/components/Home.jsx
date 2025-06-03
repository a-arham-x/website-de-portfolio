import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import ResumeDownloader from './ResumeDownloader';

function Home() {
    const fullText = "Hi, I'm Arham";
    const [text, setText] = useState('');
    const [isDeleting, setDeleting] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let timer;

        if (!isDeleting && text === fullText) {
            timer = setTimeout(() => setDeleting(true), 3000);
        } else if (isDeleting && text === '') {
            setDeleting(false);
        } else {
            timer = setTimeout(() => {
                const next = isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1);
                setText(next);
            }, 100);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    return (
        <FadeIn>
            <section id="home">
                <div className="top">
                    <div className="image-container">
                        <img
                            className="profile-pic"
                            src={require("./images/my_pic1.jpg")}
                            alt="A picture of me"
                        />
                    </div>
                    <div className="top-text">
                        <h1 className="typing">{text}</h1>
                        <p>
                            I'm a Full Stack Developer and develop websites, user interfaces and software applications
                        </p>
                        <ResumeDownloader />
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}

export default Home;
