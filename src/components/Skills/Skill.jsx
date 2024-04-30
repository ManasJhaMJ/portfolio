function Skill(props) {
    return (
        <div className="skill">
            <img src="https://www.manasjha.me/portfolio-basic/assets/images/tick.png" alt="tick" />
            <div>
                <h5>{props.skill}</h5>
                <p>{props.level}</p>
            </div>
        </div>
    )
}


export default Skill