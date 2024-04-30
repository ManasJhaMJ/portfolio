import Skill from './Skill'

function Skills() {
    return (
        <section id="skills" className="box">
            <div className="skills-title" data-entrance="from-bottom">
                <h1>My Skills</h1>
                <p>Things I know</p>
            </div>
            <div className="skills-content">
                <div className="skills-box" data-entrance="from-left">
                    <h4>Skills</h4>
                    <div className="skill-box">
                        <div className="skill-box-left">

                            <Skill skill="HTML" level="Advanced" />
                            <Skill skill="CSS" level="Advanced" />
                            <Skill skill="JavaScript" level="Intermediate" />

                        </div>
                        <div className="skill-box-right">
                            <Skill skill="React.js" level="Intermediate" />
                            <Skill skill="Node.js" level="Intermediate" />
                            <Skill skill="Wix" level="Intermediate" />
                        </div>
                    </div>
                </div>

                <div className="skills-box" data-entrance="from-left">
                    <h4>Skills</h4>
                    <div className="skill-box">
                        <div className="skill-box-left">

                            <Skill skill="Tailwind" level="Intermediate" />
                            <Skill skill="Express" level="Beginner" />
                            <Skill skill="MongoDB" level="Beginner" />
                        </div>
                        <div className="skill-box-right">
                            <Skill skill="Git/Github" level="Intermediate" />
                            <Skill skill="Figma" level="Advanced" />
                            <Skill skill="Wordpress" level="Intermediate" />
                        </div>
                    </div>
                </div>
                <div className="skills-box" data-entrance="from-left">
                    <h4>Skills</h4>
                    <div className="skill-box">
                        <div className="skill-box-left">

                            <Skill skill="Unity" level="Intermediate" />
                            <Skill skill="AR" level="Beginner" />
                            <Skill skill="Discord" level="Advanced" />
                        </div>
                        <div className="skill-box-right">
                            <Skill skill="C#" level="Basic" />
                            <Skill skill="Python" level="Beginner" />
                            <Skill skill="C/C++" level="Basic" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills