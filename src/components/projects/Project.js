
export default function Project(props) {
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
                <img className="projectImg project-item" src={props.project.imgUrl} id="project" />
                <span className="img_description is-overlay card-content" onMouseEnter={blurProject} onMouseLeave={unBlurProject}>
                    <h1 className="is-uppercase">{props.project.name}</h1>
                    <p>{props.project.date} - {props.project.stackName}</p>
                    <div className="project-links">
                        <a href={props.project.repo} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                        <a href={props.project.deployedUrl} target='_blank' rel='noopener noreferrer'>Deployed App</a>
                    </div>
                    <p className="info-icon"><i className="fas fa-info-circle" alt="Click for More Info"></i></p>
                </span>
            </figure>
        </div>
    )
}
