import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}
export default App;