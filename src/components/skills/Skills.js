import SkillsHeader from "./SkillsHeader";
import SkillsInfo from "../../data/SkillsInfo";
import Skill from "./Skill";

export default function Skills() {

    const rowOneSkills = SkillsInfo.row1.map(s => {
        return (
            <Skill key={s.alt} skill={s} />
        )
    })

    const rowTwoSkills = SkillsInfo.row2.map(s => {
        return (
            <Skill key={s.alt} skill={s} />
        )
    })

    return (
        <div className="section-color skills" id="skills">
            <div className="container">
                <div className="columns is-multiline">
                    <SkillsHeader />
                    <div className="columns is-12">
                        {rowOneSkills}
                    </div>
                    <hr />
                    <div className="columns is-12">
                        {rowTwoSkills}
                    </div>
                </div>
            </div>
        </div>
    )
}
