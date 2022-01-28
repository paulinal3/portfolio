import Resume from '../../../Paulina-Le-Design-Resume.pdf'

export default function ResumeBtn() {
    return (
        <a href={Resume} target='_blank' rel='noopener noreferrer'>
            <button class="button" id='resumeBtn'>
                Download Resume&emsp;<i class="fad fa-download fa-lg" alt="download icon"></i>
            </button>
        </a>
    )
}
