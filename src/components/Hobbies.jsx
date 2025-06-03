import FadeIn from "./FadeIn";

const hobbies = [
    {
        title: "Reading",
        img: require("./images/reading.jpg"),
        desc: `Reading is one of my favourite things to do. When I say reading, I do not just mean book reading or magazines, I also love reading different articles on the internet such as those on Medium. I always make sure not to miss any chance of gaining useful knowledge through reading.`,
    },
    {
        title: "Watching Shows & Movies",
        img: require("./images/movies.png"),
        desc: `In my free time, I often watch different movies and shows. While I have explored different genres, I love science fiction the most. My favourite films are Interstellar and The Dark Knight. I also enjoy science and math videos by channels like Veritasium and 3Blue1Brown.`,
    },
    {
        title: "Coding for Fun",
        img: require("./images/programming.jpg"),
        desc: `I code for academics and portfolio projects, but I also code for fun. I pick random challenges or ideas and build small apps or scripts. This helps sharpen my logic, develop skills, and keep my mind engaged.`,
    },
];

function Hobbies() {
    return (
        <section id="hobbies" className="hobbies-section">
            <FadeIn>
                <h2 className="section-head">My Hobbies</h2>
            </FadeIn>
            <div className="hobbies-grid">
                {hobbies.map((hobby, i) => (
                    <FadeIn key={i} delay={i * 200}>
                        <div className="hobby-card">
                            <div className="hobby-image-wrapper">
                                <img src={hobby.img} alt={hobby.title} />
                            </div>
                            <div className="hobby-content">
                                <h3>{hobby.title}</h3>
                                <p>{hobby.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

export default Hobbies;
