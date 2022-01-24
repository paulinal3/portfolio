
export default function SkillRowOne(props) {
    return (
        <div
            class="column is-4 has-text-centered"
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="1500"

        >
            <i class={props.skill.icon} alt={props.skill.alt}></i>
            <hr />
            <h2 class="skillsInfo">
                {props.skill.heading}
                <br />
                • • •
                <br />
                {props.skill.description}
            </h2>
        </div>
    )
}
