
export default function HeroMenu() {
    return (
        <div className="hero-foot ">
            <div className="hero-foot--wrapper">
                <div className="columns">
                    <div className="column is-12 hero-menu-desktop has-text-centered">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about-me">About</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#side-hustle">Side Hustle</a>
                            </li>
                            {/* <li>
                                <a href="#contact">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
