
export default function NavBarBurger() {
    return (
        <nav className="navbar is-transparent is-hidden-desktop">
            {/* <!-- Begin Burger Menu --> */}
            <div className="navbar-brand">
                <div className="navbar-burger burger" data-target="mobile-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <!-- End Burger Menu --> */}
            <div id="mobile-nav" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a className="navbar-item" href="#home">
                            Home
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#about-me">
                            About Me
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#services">
                            Services
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#skills">
                            Skills
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#my-work">
                            My Work
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#contact">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
