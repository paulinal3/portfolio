
export default function Skill(props) {
    return (
        <div
            className="column is-4 has-text-centered"
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="1500"

        >
            <i className={props.skill.icon} alt={props.skill.alt}></i>
            <hr />
            <h2 className="skillsInfo">
                {props.skill.heading}
                <br />
                • • •
                <br />
                {props.skill.description}
            </h2>
        </div>
    )
}
