import Contact from './components/Contact';
import Frontpage from './components/Frontpage';
import Navigation from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Frontpage />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
