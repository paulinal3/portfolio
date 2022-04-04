import AboutHeader from './AboutHeader'
import AboutInfo from '../about/aboutinfo/AboutInfo'
import ProfilePic from './AboutPic'

export default function About() {
    return (
        <div className="section-light about-me" id="about-me">
            <div className="container">
                <AboutHeader />
                <div className="about-container">
                    <AboutInfo />
                    <ProfilePic />
                </div>
            </div>
        </div>
    )
}
