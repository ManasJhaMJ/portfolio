import Project from "./Project"
import dopegang from '../../assets/dopegang.webp'
import bestupay from '../../assets/BestUPay.webp'
import enstruments from '../../assets/enstruments.webp'
import eco from '../../assets/eco.webp'
import windowsXP from '../../assets/windowsXP.webp'
import justiceGPT from '../../assets/justiceGPT.webp'

function Projects() {
    return (
        <section id="projects" className="box">
            <div className="projects-title" data-entrance="from-bottom">
                <h1>Projects</h1>
                <p>Things I can flex</p>
            </div>
            <div className="projects-content">
                <Project
                    num="https://www.manasjha.me/portfolio-basic/assets/images/numbers/number-1.png"
                    img={dopegang}
                    name="Dopegang"
                    desc="A React Based Ecommerce Application"
                    href="https://github.com/ManasJhaMJ/e-commerce-site"
                    href2="https://e-commerce-site-neon.vercel.app/"
                />
                <Project
                    num="https://www.manasjha.me/portfolio-basic/assets/images/numbers/number-2.png"
                    img={enstruments}
                    name="Enstruments"
                    desc="Online Instruments playing Application."
                    href="https://github.com/ManasJhaMJ/instruments"
                    href2="https://manasjhamj.github.io/instruments"
                />
                <Project
                    num="https://www.manasjha.me/portfolio-basic/assets/images/numbers/number-3.png"
                    img={justiceGPT}
                    name="JusticeGPT"
                    desc="AI powered Legal Assistant."
                    href="https://github.com/ManasJhaMJ/codesangam"
                    href2="https://codesangam.vercel.app/"
                />
                <Project
                    num="https://www.manasjha.me/portfolio-basic/assets/images/numbers/number-4.png"
                    img={windowsXP}
                    name="Windows XP"
                    desc="Frontend replication of Windows XP."
                    href="https://github.com/ManasJhaMJ/windowsxp-react"
                    href2="https://windows69.vercel.app/"
                />
                <Project
                    num="https://www.manasjha.me/portfolio-basic/assets/images/numbers/number-5.png"
                    img={eco}
                    name="Isomer"
                    desc="Startups to Investor Connector."
                    href="https://github.com/tabishnaqvi1311/isomer"
                    href2="https://eco-website-one.vercel.app/"
                />
                <Project
                    num="https://www.manasjha.me/portfolio-basic/assets/images/numbers/number-6.png"
                    img={bestupay}
                    name="BestUPay"
                    desc="Website for a freelancing agency."
                    href="https://github.com/ManasJhaMJ/bestupayv2"
                    href2="https://bestupay.com/"
                />
            </div>
        </section>
    )
}

export default Projects