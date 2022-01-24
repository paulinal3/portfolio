import Cocomelon from '../../imgs/cocomelon.MP4'
import SideHustleHeader from './SideHustleHeader'

export default function SideHustle() {
    return (
        <div class="section-dark projects" id="side-hustle">
            <div class="container">
                <div
                    class="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <SideHustleHeader />
                    <div class="column is-4">
                        <video
                            class="vid"
                            src={Cocomelon}
                            controls="controls"
                        />
                    </div>
                    <div class="column is-4">
                        <figure
                            class="image is-4by5 project-item"
                            style={{ backgroundImage: "url('https://i.postimg.cc/WpM2rqFT/halloween-side-hustle.jpg')" }}
                        ></figure>
                    </div>
                    <div class="column is-4">
                        <figure
                            class="image is-4by5 project-item"
                            style={{ backgroundImage: "url('https://i.postimg.cc/fLDsL7Bb/IMG-0555-2.jpg')", 'background-position': 'top' }}
                        ></figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
