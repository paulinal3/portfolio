import HeroMenu from "./HeroMenu";
import NavBarBurger from "./NavBarBurger";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-large">
        <NavBarBurger />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="subtitle">Hello, I'm</h1>
            <h2>Paulina</h2>
            <div >
              <h1 className="subtitle profession" id="profession-container">A
                <Typewriter
                  options={{
                    strings: ['Software Engineer', 'Full-Stack Developer', 'Bootcamp Grad', 'Hokie', 'Self-Taught Baker', 'Fitness Trainer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
        <HeroMenu />
      </section>
    </div>
  )
}
