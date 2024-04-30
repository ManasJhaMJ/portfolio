function Project(props) {
    return (
        <div className="project-box" data-entrance="from-left">
            <img className="project-number" src={props.num} alt="project" />
            <img className="project-box-img" src={props.img} alt="project4" />
            <div className="project-text">
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <a href={props.href} target='_blank'>View Project 📕</a>
                <a href={props.href2} target='_blank'>Live Site 🚀</a>
            </div>
        </div>
    )
}

export default Project