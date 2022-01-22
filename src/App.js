import './App.css'
import About from "./components/about/About";
import Footer from './components/Footer';
import Hero from './components/hero/Hero';
import Hobbies from './components/Hobbies';
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ScrollUpBtn from "./components/ScrollUpBtn";
import Skills from './components/Skills';
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
        {/* <Resume /> */}
        <Projects />
        <Skills />
        <Hobbies  />
      </div>
      <Footer />
    </div>
  );
}

export default App;
