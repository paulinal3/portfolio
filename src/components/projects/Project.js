
export default function Project({ project, projectToggle }) {
    const blurProject = (e) => {
        console.log(e)
        e.target.parentElement.firstChild.classList.add("blur-project")
    }

    const unBlurProject = (e) => {
        e.target.parentElement.firstChild.classList.remove("blur-project")
    }

    return (
        <div className="card-image column is-6 project-container img_wrap">
            <figure className="image is-5by3">
                <img className="projectImg project-item" src={project.imgUrl} id="project" />
                <span className="img_description is-overlay card-content" onMouseEnter={blurProject} onMouseLeave={unBlurProject}>
                    <h1 className="is-uppercase">{project.name}</h1>
                    <p>{project.date} - {project.stackName}</p>
                    <div className="project-links">
                        <a href={project.repo} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                        <a href={project.deployedUrl} target='_blank' rel='noopener noreferrer'>Deployed App</a>
                    </div>
                    <p onClick={() => projectToggle(project)} className="info-icon"><i className="fas fa-info-circle" alt="Click for More Info"></i></p>
                </span>
            </figure>
        </div>
    )
}
