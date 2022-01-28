import AboutHeader from './AboutHeader'
import AboutInfo from '../about/aboutinfo/AboutInfo'
import ProfilePic from './AboutPic'

export default function About() {
    return (
        <div class="section-light about-me" id="about-me">
            <div class="container">
                <AboutHeader />
                <div class="aboutContainer">
                    <AboutInfo />
                    <ProfilePic />
                </div>
            </div>
        </div>
    )
}
