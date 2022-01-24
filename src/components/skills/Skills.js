import SkillsHeader from "./SkillsHeader";
import SkillsInfo from "../../data/SkillsInfo";
import SkillRowOne from "./SkillRowOne";
import SkillRowTwo from "./SkillRowTwo";

export default function Skills() {

    const rowOneSkills = SkillsInfo.row1.map(s => {
        return (
            <SkillRowOne skill={s} />
        )
    })

    const rowTwoSkills = SkillsInfo.row2.map(s => {
        return (
            <SkillRowTwo skill={s} />
        )
    })

    return (
        <div class="section-color skills" id="skills">
            <div class="container">
                <div class="columns is-multiline">
                    <SkillsHeader />
                    <div class="columns is-12">
                        {rowOneSkills}
                    </div>
                    <hr />
                    <div class="columns is-12">
                        {rowTwoSkills}
                    </div>
                </div>
            </div>
        </div>
    )
}
