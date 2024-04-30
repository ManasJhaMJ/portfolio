import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="box">
            <div className="contact-title" data-entrance="from-bottom">
                <h1>Connect With Me</h1>
                <p>Let&apos;s talk!</p>
            </div>
            <div className="contact-list">
                <div className="contact-container">
                    <div className="contact-box-container">
                        <div className="contact-box" data-entrance="from-left">
                            <a target='_blank' href="mailto:jhamanas939@gmail.com">
                                <span>Gmail</span>
                                <span><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/gmail.png" alt="" /></span>
                                <p>jhamanas939<br />@gmail.com</p>
                            </a>
                        </div>
                        <br />
                        <div className="contact-box" data-entrance="from-left">
                            <a target='_blank' href="https://twitter.com/ManasJhaMJ">
                                <span>Twitter</span>
                                <span><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/twitter-2.png" alt="" /></span>
                                <p>@ManasJhaMJ</p>
                            </a>
                        </div>
                        <br />
                        <div className="contact-box" data-entrance="from-left">
                            <a target='_blank' href="https://discord.com/users/916896085212033024">
                                <span>Discord</span>
                                <span><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/discord.png" alt="" /></span>
                                <p>MJ10</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="socials" data-entrance="from-left">
                        <h3>Other Socials</h3>
                        <a target='_blank' href="https://github.com/ManasJhaMJ"><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/github-2.png" alt="" /></a>
                        <a target='_blank' href="https://www.linkedin.com/in/notmanasjha/"><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/linkedin-2.png" alt="" /></a>
                        <a target='_blank' href="https://www.instagram.com/notmanasjha/"><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/instagram.png" alt="" /></a>
                        <a target='_blank' href="https://manas-mj.itch.io/"><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/itch.png" alt="" /></a>
                        <a target='_blank' href="https://www.youtube.com/@manasmj/"><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/youtube.png" alt="" /></a>
                        <a target='_blank' href="https://www.behance.net/notmanasjha"><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/socials/behance.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact