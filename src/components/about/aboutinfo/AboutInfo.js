import ContactInfo from "./ContactInfo";
import ResumeBtn from "./ResumeBtn";

export default function AboutInfo() {
    return (
        <div class="column is-6 has-vertically-aligned-content about-info-container" data-aos="fade-right">
            <p class="is-larger" id="name">
                Paulina Le
            </p>
            <br />
            <p class="body-text">
                I am a full stack software developer who strives to provide efficient and functional products. I am passionate about using technology to create a healthy space for users. My previous experience as a personal trainer has given me a creative outlook on how to approach different challenges and the patience to find effective solutions.
            </p>
            <br />
            <div class="is-divider"></div>
            <ContactInfo />
            <div class="column is-10 has-text-centered is-offset-1">
                <ResumeBtn />
            </div>
        </div>
    )
}
