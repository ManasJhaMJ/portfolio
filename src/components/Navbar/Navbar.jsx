import { useState } from "react"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav>
                <div className="name">
                    <p><a href="#">Manas J.</a></p>
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <nav id="nav-small">
                <div className="name">
                    <p>Manas J.</p>
                </div>

                <div id="mySidepanel" className="sidepanel" style={{ height: isOpen ? '50vw' : '0' }} >
                    <div className="panel-links">
                        <a href="#home"><img src="https://www.manasjha.me/portfolio-basic/assets/images/navbar/home.png" alt="home" /><br />Home</a>
                        <a href="#about"><img src="https://www.manasjha.me/portfolio-basic/assets/images/navbar/user.png" alt="home" /><br />About</a>
                        <a href="#skills"><img src="https://www.manasjha.me/portfolio-basic/assets/images/navbar/skills.png" alt="home" /><br />Skills</a>
                        <a href="#projects"><img src="https://www.manasjha.me/portfolio-basic/assets/images/navbar/projects.png" alt="home" /><br />Projects</a>
                        <a href="#experience"><img src="https://www.manasjha.me/portfolio-basic/assets/images/navbar/work.png" alt="home" /><br />Experience</a>
                        <a href="#contact"><img src="https://www.manasjha.me/portfolio-basic/assets/images/navbar/contact.png" alt="home" /><br />Contact</a>
                    </div>
                    <a className="closebtn" onClick={closeNav} >&times;</a>
                </div>

                <button className="openbtn" onClick={openNav} ><img src="https://www.manasjha.me/portfolio-basic/assets/images/list.png" alt="dropdown" /></button>
            </nav>
        </>
    )
}

export default Navbar