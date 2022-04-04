import Cocomelon from '../../imgs/cocomelon.MP4'
import SideHustleHeader from './SideHustleHeader'

export default function SideHustle() {
    return (
        <div className="section-dark projects" id="side-hustle">
            <div className="container">
                <div
                    className="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <SideHustleHeader />
                    <div className="column is-4">
                        <video
                            className="vid"
                            src={Cocomelon}
                            controls="controls"
                        />
                    </div>
                    <div className="column is-4">
                        <figure
                            className="image is-4by5 project-item"
                            style={{ backgroundImage: "url('https://i.postimg.cc/WpM2rqFT/halloween-side-hustle.jpg')" }}
                        ></figure>
                    </div>
                    <div className="column is-4">
                        <figure
                            className="image is-4by5 project-item"
                            style={{ backgroundImage: "url('https://i.postimg.cc/fLDsL7Bb/IMG-0555-2.jpg')", 'background-position': 'top' }}
                        ></figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
