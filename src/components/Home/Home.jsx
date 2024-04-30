function Home() {
    return (
        <section id="home">
            <div className="socials-top">
                <a href="https://github.com/ManasJhaMJ" target='_blank'><img src="https://www.manasjha.me/portfolio-basic/assets/images/socials/github.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/notmanasjha/" target='_blank'><img src="https://www.manasjha.me/portfolio-basic/assets/images/socials/linkedin.png" alt="linkedin" /></a>
                <a href="https://twitter.com/ManasJhaMJ" target='_blank'><img src="https://www.manasjha.me/portfolio-basic/assets/images/socials/twitter.png" alt="twitter" /></a>
                <a href="#contact"><img className="more" src="https://www.manasjha.me/portfolio-basic/assets/images/socials/more.png" alt="See More" /></a>
            </div>
            <div className="home-text" data-entrance="from-left">
                <div className="home-text-title">
                    <h1>Manas Jha</h1>
                    <img src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/waving-hand_1f44b.gif"
                        alt="hello" />
                </div>
                <div className="home-text-subtitle">
                    <h3>FullStack Software Developer</h3>
                </div>
                <p>I enjoy creating things that live on the internet
                    and turning problems into beautiful solutions.</p>
                <button><a href="https://manasjhamj.github.io/MJResume.pdf" target='_blank'>Resume 📝</a></button>
            </div>
            <div className="home-pic">
                <img src="https://www.manasjha.me/portfolio-basic/assets/images/pic1.jpeg" alt="Manas" data-entrance="from-bottom" />
            </div>
        </section>
    )
}

export default Home