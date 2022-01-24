
export default function Project(props) {
    return (
        <div class="card-image column is-6 project-container img_wrap">
            <figure class="image is-2by1">
                <img class="projectImg project-item" src={props.project.imgUrl} />
                <span class="img_description is-overlay card-content">
                    <h1 class="is-uppercase">{props.project.name}</h1>
                    <p>{props.project.date} - {props.project.stackName}</p>
                    <a href={props.project.repo} target='_blank' rel='noopener noreferrer'>GitHub Repository</a> | <a href="{props.project.deployedUrl}" target='_blank' rel='noopener noreferrer'>Deployed App</a>
                    <p><i class="fas fa-info-circle" alt="Click for More Info"></i></p>
                </span>
            </figure>
        </div>
    )
}
