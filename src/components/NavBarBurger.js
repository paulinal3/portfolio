
export default function NavBarBurger() {
    return (
        <nav class="navbar is-transparent is-hidden-desktop">
            {/* <!-- Begin Burger Menu --> */}
            <div class="navbar-brand">
                <div class="navbar-burger burger" data-target="mobile-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <!-- End Burger Menu --> */}
            <div id="mobile-nav" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="navbar-item" href="#home">
                            Home
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-item" href="#about-me">
                            About Me
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-item" href="#services">
                            Services
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-item" href="#skills">
                            Skills
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-item" href="#my-work">
                            My Work
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-item" href="#contact">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
