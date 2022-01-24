
export default function About() {

    return (
        <div class="section-light about-me" id="about-me">
            <div class="container">
                <div class="column is-12 about-me">
                    <h1 class="title has-text-centered section-title">About Me</h1>
                </div>
                <div class="columns is-multiline aboutContainer">
                    <div
                        class="column is-6 has-vertically-aligned-content"
                        data-aos="fade-right"
                    >
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
                                <p class="heading">
                                    <strong>Email Me</strong>
                                </p>
                                <p class="subheading">
                                    paulinal3@outlook.com
                                </p>
                            </div>
                            <div class="column">
                                <p class="heading">
                                    <strong>Linkedin</strong>
                                </p>
                                <a href="https://www.linkedin.com/in/paulinal3/" target='_blank' rel='noopener noreferrer' class="subheading">linkedin.com/in/paulinal3/</a>
                            </div>
                            <div class="column">
                                <p class="heading">
                                    <strong>GitHub</strong>
                                </p>
                                <a href="https://github.com/paulinal3" target='_blank' rel='noopener noreferrer' class="subheading">github.com/paulinal3</a>
                            </div>
                        </div>
                        <div class="column is-10 has-text-centered is-offset-1">
                            <a href="https://drive.google.com/file/d/1SzVxfilGNCPw5DJ3Qr7qiDsh_AvRfXdw/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
                                <button class="button" id='resumeBtn'>
                                    Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="column is-6 right-image" id="profilePic" data-aos="fade-left">
                        <img
                            class="is-rounded"
                            src="https://i.postimg.cc/zfJFGHQx/IMG-8486-2.jpg"
                            alt="Paulilna Le"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
