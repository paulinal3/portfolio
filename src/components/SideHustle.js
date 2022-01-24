import Cocomelon from '../imgs/cocomelon.mp4'

export default function Hobbies() {
    return (
        <div class="section-dark projects" id="side-hustle">
            <div class="container">
                <div
                    class="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <div class="column is-12">
                        <h1 class="title has-text-centered section-title">Side Hustle</h1>
                    </div>
                    <div class="column is-4">
                        <video 
                            src={Cocomelon} 
                            controls="controls" 
                            autoplay="true" 
                        />
                    </div>
                    <div class="column is-4">
                        <a href="facebook.com">
                            <figure
                                class="image is-4by5 project-item"
                                style={{ backgroundImage: "url('https://i.postimg.cc/WpM2rqFT/halloween-side-hustle.jpg')" }}
                            ></figure>
                        </a>
                    </div>
                    <div class="column is-4">
                        <a href="facebook.com">
                            <figure
                                class="image is-4by5 project-item"
                                style={{ backgroundImage: "url('https://i.postimg.cc/fLDsL7Bb/IMG-0555-2.jpg')", 'background-position': 'top' }}
                            ></figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
