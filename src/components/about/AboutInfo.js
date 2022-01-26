import Resume from '../../Paulina-Le-Design-Resume.pdf'

export default function AboutInfo() {
    return (
        <div class="column is-6 has-vertically-aligned-content" data-aos="fade-right">
            <p class="is-larger" id="name">
                Paulina Le
            </p>
            <br />
            <p class="bodyText">
                I am a full stack software developer who strives to provide efficient and functional products. I am passionate about using technology to create a healthy space for users. My previous experience as a personal trainer has given me a creative outlook on how to approach different challenges and the patience to find effective solutions.
            </p>
            <br />
            <div class="is-divider"></div>
            <div class="columns about-links">
                <div class="column">
                    <p class="contactHeader">
                        Email Me
                    </p>
                    <p class="subheading">
                        paulinal3@outlook.com
                    </p>
                </div>
                <div class="column">
                    <p class="contactHeader">
                        Linkedin
                    </p>
                    <a href="https://www.linkedin.com/in/paulinal3/" target='_blank' rel='noopener noreferrer' class="subheading">linkedin.com/in/paulinal3</a>
                </div>
                <div class="column">
                    <p class="contactHeader">
                        GitHub
                    </p>
                    <a href="https://github.com/paulinal3" target='_blank' rel='noopener noreferrer' class="subheading">github.com/paulinal3</a>
                </div>
            </div>
            <div class="column is-10 has-text-centered is-offset-1">
                <a href={Resume} target='_blank' rel='noopener noreferrer'>
                    <button class="button" id='resumeBtn'>
                        Download Resume&emsp;<i class="fad fa-download fa-lg" alt="download icon"></i>
                    </button>
                </a>
            </div>
        </div>
    )
}
