
export default function Project(props) {
    return (
        // <div class="card">
        //     <div class="card-image">
        //         <figure class="image is-2by1">
        //             <img src={props.project.imgUrl} alt={props.project.name} />
        //         </figure>
        //     </div>
        // </div>
        <div class="project-container img_wrap">
                <figure
                    class="image is-2by1 project-item"
                    style={{ backgroundImage: `url(${props.project.imgUrl})` }}
                >
                    <span class="img_description is-overlay">
                        <h1>{props.project.name}</h1>
                        <a href={props.project.deployedUrl} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                    </span>
                </figure>
        </div>
        // <div>
        //     <a href={props.project.deployedUrl}>
        //         <figure
        //             class="image is-4by3 project-item"
        //             // style={{ backgroundImage: "url('https://picsum.photos/320/180?image=0')" }}
        //         ><img src={props.project.imgUrl} alt={props.project.name} /></figure>
        //     </a>
        // </div>
    )
}
