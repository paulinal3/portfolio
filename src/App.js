import './App.css'
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ScrollUpBtn from "./components/ScrollUpBtn";

function App() {
  return (
    <div>
      <Hero />
      <ScrollUpBtn />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
