import ProjectsHeader from './ProjectsHeader'
import ProjectInfo from '../../data/ProjectInfo'
import Project from './Project'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

export default function Projects() {
    const [showProjectModal, setShowProjectModal] = useState(false)
    const [projectInfo, setProjectInfo] = useState({})

    const projects = document.querySelectorAll(".project-card")
    console.log("projects", projects)

    const projectToggle = (e, project) => {
        setShowProjectModal(!showProjectModal)
        setProjectInfo(project)
        // console.log(e)

        e.target.parentElement.firstChild.classList.remove("blur-project")
    }

    const allProjects = ProjectInfo.projects.map(p => {
        return (
            <Project key={p.name} project={p} projectToggle={projectToggle} />
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
                    {
                        showProjectModal ?
                            <ProjectModal projectToggle={projectToggle} projectInfo={projectInfo} />
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
