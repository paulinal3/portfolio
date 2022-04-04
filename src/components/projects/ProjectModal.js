
export default function ProjectModal({ projectToggle, projectInfo }) {
    return (
        <main className="project-modal-container">
            <header>
                <h1>{projectInfo.name}</h1>
                <h5>{projectInfo.date}</h5>
            </header>
            <p>{projectInfo.description}</p>
            <h5>Built with: {projectInfo.techStack}</h5>
            <div className="project-links">
                <a href={projectInfo.repo} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                <a href={projectInfo.deployedUrl} target='_blank' rel='noopener noreferrer'>Deployed App</a>
            </div>
            <button className="close-btn" onClick={projectToggle}>Close</button>
        </main>
    )
}
