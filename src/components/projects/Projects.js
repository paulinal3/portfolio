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
                    <div class="column is-6 img_wrap">
                        <a href="facebook.com">
                            <figure
                                class="image is-2by1 project-item"
                                style={{ backgroundImage: "url('https://picsum.photos/320/180?image=0')" }}
                            >
                                <h1 class="img_description">Netflixify</h1>
                            </figure>

                        </a>
                    </div>
                    <div class="column is-6">
                        <a href="https://heavy-things-tracker.herokuapp.com/">
                            <figure
                                class="image is-2by1 project-item"
                                style={{ backgroundImage: "url('https://i.postimg.cc/Gtn3P72c/Heavy-Things-Tracker.png')" }}
                            ></figure>
                        </a>
                    </div>
                    <div class="column is-6">
                        <a href="https://devxchange.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
                            <figure
                                class="image is-2by1 project-item"
                                style={{ backgroundImage: "url('https://i.postimg.cc/htPwYLQc/Dev-Xchange.png')" }}
                            ></figure>
                        </a>
                    </div>
                    <div class="column is-6">
                        <a href="facebook.com">
                            <figure
                                class="image is-2by1 project-item"
                                style={{ backgroundImage: "url('https://picsum.photos/320/180?image=0')" }}
                            ></figure>
                        </a>
                    </div>
                </div>
            </div>
            <ol class="is-flex-wrap-wrap" id='projectsList'>
                {allProjects}
            </ol>
        </div>
    )
}
