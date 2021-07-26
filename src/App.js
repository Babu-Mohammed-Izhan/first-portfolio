import Contact from './components/Contact';
import Frontpage from './components/Frontpage';
import Navigation from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills'
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Frontpage />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
