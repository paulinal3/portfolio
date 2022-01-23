import ProjectInfo from '../../data/ProjectInfo'
import Project from './Project'

export default function Projects() {
    const allProjects = ProjectInfo.projects.map(p => {
        return (
            <Project project={p} />
        )
    })

    return (
        <div class="section-dark projects is-flex-wrap-wrap" id="projects">
            <div class="container">
                <div
                    class="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <div class="column is-12">
                        <h1 class="title has-text-centered section-title">Projects</h1>
                    </div>

                    <div class="card-image column is-6 project-container img_wrap">
                        <figure
                            class="image is-2by1"
                        // style={{ backgroundImage: "url('https://i.postimg.cc/d3zvnhCT/Netflixify.png')" }}
                        > <img class="projectImg project-item" src="https://i.postimg.cc/d3zvnhCT/Netflixify.png" />
                            <span class="img_description is-overlay card-content">
                                <h1>Netflixify</h1>
                                <p>Jan 2022 - MERN Stack</p>
                                <a href="https://netflixify.herokuapp.com/" target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                            </span>
                        </figure>
                    </div>
                    {/* 
                    <div class="column is-6 project-container">
                        <div class="card-image img_wrap">
                            <figure class="image is2by1 project-item">
                                <img src="https://i.postimg.cc/d3zvnhCT/Netflixify.png" />
                            </figure>
                        </div>
                        <div class="card-content is-overlay img_description">
                            <h1>Netflixify</h1>
                        </div> 
                    </div>  */}

                    <div class="card-image column is-6 project-container img_wrap">
                        <figure class="image is-2by1">
                            <img class="projectImg project-item" src="https://i.postimg.cc/htPwYLQc/Dev-Xchange.png" />
                            <span class="img_description is-overlay card-content">
                                <h1>DevXchange</h1>
                                <p>Dec 2022 - MERN Stack</p>
                                <a href="https://devxchange.herokuapp.com/" target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                            </span>
                        </figure>
                    </div>

                    <div class="card-image column is-6 project-container img_wrap">
                        <figure class="image is-2by1">
                            <img class="projectImg project-item" src="https://i.postimg.cc/Gtn3P72c/Heavy-Things-Tracker.png" />
                            <span class="img_description is-overlay card-content">
                                <h1>Heavy Things Tracker</h1>
                                <p>Nov 2022 - PEN Stack</p>
                                <a href="https://heavy-things-tracker.herokuapp.com/" target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                            </span>
                        </figure>
                    </div>

                    <div class="card-image column is-6 project-container img_wrap">
                        <figure class="image is-2by1">
                            <img class="projectImg project-item" src="https://i.postimg.cc/BQY6GSK8/Save-Manny.png" />
                            <span class="img_description is-overlay card-content">
                                <h1>Save Manny!</h1>
                                <p>Oct 2022 - Vanilla JS</p>
                                <a href="https://wonderful-einstein-784d70.netlify.app/" target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                            </span>
                        </figure>
                    </div>

                </div>
            </div>
            {/* <ol id='projectsList'>
                {allProjects}
            </ol> */}
        </div>
    )
}
