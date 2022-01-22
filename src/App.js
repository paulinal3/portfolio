import './App.css'
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ScrollUpBtn from "./components/ScrollUpBtn";

function App() {
  return (
    <div>
      {/* <div class="preloader-wrapper">
        <div class="preloader">
          <img src="img/preloader.gif" alt="" />
        </div>
      </div> */}
      <Hero />
      <ScrollUpBtn />
      <div class="main-content">
        <About />
        <Resume />
        <Projects />
      </div>
    </div>
  );
}

export default App;
