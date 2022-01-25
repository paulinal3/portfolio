import HeroMenu from "./HeroMenu";
import NavBarBurger from "./NavBarBurger";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div class="header-wrapper" id="home">
      <section class="hero is-large">
        <NavBarBurger />
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="subtitle">Hello, I'm</h1>
            <h2 id="title">Paulina</h2>
            <div >
              <h1 class="subtitle profession" id="professionContainer">A
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
