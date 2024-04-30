import Exp from "./exp"

function Experience() {
    return (
        <section id="experience">
            <div className="experience-title" data-entrance="from-bottom">
                <h1>Experience</h1>
                <p>Things I&apos;ve done</p>
            </div>
            <div className="experience-container" data-tilt data-entrance="from-left">
                <Exp
                    src="https://www.manasjha.me/portfolio-basic/assets/images/company1.png"
                    title="BestUPay"
                    position="Frontend Developer Intern"
                    date="Nov 2023 - Feb 2024"
                    desc="Worked on different frontend projects for clients according to their need and added my creativity.
                Improved the frontend of BestUPay's website. Created UI designs for websites using Figma and Canva."
                />

                <Exp
                    src="https://www.manasjha.me/portfolio-basic/assets/images/company2.png"
                    title="Shashtra"
                    position="Frontend Developer Intern"
                    date="Feb 2024 - Present"
                    desc="Started with building a modern UI design for their company website. Then worked on building
                the website with basic tech stack of HTML, CSS, and Javascript. Further Used animations to improve
                the UX and engagement."
                />

                <Exp
                    src="https://www.manasjha.me/portfolio-basic/assets/images/company3.png"
                    title="MRSDC"
                    position="Student web head"
                    date="Sep 2023 - Present"
                    desc="Managed Tech events and hackathons from initial planning to execution. Worked on building the
                websites required for the club and the events/hackathons."
                />
            </div>
        </section>

    )
}

export default Experience