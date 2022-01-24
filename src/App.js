import './App.css'
import About from "./components/about/About";
import Footer from './components/Footer';
import Hero from './components/hero/Hero';
import SideHustle from './components/side hustle/SideHustle';
import Projects from "./components/projects/Projects";
import ScrollUpBtn from "./components/ScrollUpBtn";
import Skills from './components/skills/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    easing: "ease-out",
    duration: 800,
  });

  return (
    <div>
      <Hero />
      <ScrollUpBtn />
      <div class="main-content">
        <About />
        <Projects />
        <Skills />
        <SideHustle  />
      </div>
      <Footer />
    </div>
  );
}

export default App;
