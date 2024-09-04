import './App.css';
import Contacts from './Components/Contacts';
import Home from './Pages/Home';
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
      <Contacts />
    </div>
  );
}
export default App;