function About() {
    return (
        <section id="about" className="box">
            <div className="about-title" data-entrance="from-bottom">
                <h1>About Me</h1>
                <p>My Introduction</p>
            </div>
            <div className="about-content">
                <div>
                    <img className="about-content-pic" src="https://www.manasjha.me/images/profile-pic.gif" alt="manas"
                        data-entrance="from-left" />
                </div>
                <div className="about-content-text">
                    <div className="about-boxes">
                        <div className="about-box" data-entrance="from-left">
                            <img src="https://www.manasjha.me/portfolio-basic/assets/images/projects.png" alt="projects" />
                            <h6>30+</h6>
                            <p>Projects worked</p>
                        </div>
                        <div className="about-box" data-entrance="from-left">
                            <img src="https://www.manasjha.me/portfolio-basic/assets/images/hackathon.png" alt="hackathon" />
                            <h6>2</h6>
                            <p>Hackathons Won</p>
                        </div>
                        <div className="about-box" data-entrance="from-left">
                            <img src="https://www.manasjha.me/portfolio-basic/assets/images/events.png" alt="events" />
                            <h6>10+</h6>
                            <p>Tech Events participated</p>
                        </div>
                    </div>
                    <div className="about-text" data-entrance="from-left">
                        <p>Hello, World! I&apos;m Manas, a developer with an interest in everything and a life-long
                            dedication to learning. Find me on VS Code, football turf or near a gaming desk.</p>
                    </div>
                    <button data-entrance="from-left"><a href="https://github.com/ManasJhaMJ" target='_blank' >Github 👾</a></button>
                </div>
            </div>
        </section>
    )
}

export default About