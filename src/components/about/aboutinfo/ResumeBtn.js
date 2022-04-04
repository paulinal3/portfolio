import Resume from '../../../Paulina-Le-Design-Resume.pdf'

export default function ResumeBtn() {
    return (
        <a href={Resume} target='_blank' rel='noopener noreferrer'>
            <button className="button" id='resume-btn'>
                Download Resume&emsp;<i className="fad fa-download fa-lg" alt="download icon"></i>
            </button>
        </a>
    )
}
