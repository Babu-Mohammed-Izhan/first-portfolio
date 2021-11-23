import AOS from "aos";
import Contact from "./components/Contact";
import Frontpage from "./components/Frontpage";
import Navigation from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import "aos/dist/aos.css";
import About from "./components/About";

function App() {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom",
  });
  return (
    <div className="App">
      <Navigation />
      <Frontpage />
      <Projects data-aos="fade-up" />
      <About data-aos="fade-up" />
      <Skills data-aos="fade-up" />
      <Contact />
    </div>
  );
}

export default App;
