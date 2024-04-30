function exp(props) {
    return (
        <div className="experience" data-entrance="from-left">
            <img src={props.src} alt="company" />
            <h2 className="work-title">{props.title}</h2>
            <h4 className="work-position">{props.position}</h4>
            <h5 className="work-duration">{props.date}</h5>
            <hr />
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default exp