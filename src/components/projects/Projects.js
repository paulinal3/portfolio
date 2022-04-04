import ProjectsHeader from './ProjectsHeader'
import ProjectInfo from '../../data/ProjectInfo'
import Project from './Project'

export default function Projects() {
    
    const allProjects = ProjectInfo.projects.map(p => {
        return (
            <Project key={p.name} project={p} />
        )
    })

    return (
        <div className="section-dark projects is-flex-wrap-wrap" id="projects">
            <div className="container">
                <div
                    className="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                >
                    <ProjectsHeader />
                    {allProjects}
                </div>
            </div>
        </div>
    )
}
