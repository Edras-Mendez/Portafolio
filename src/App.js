import './App.css';
import Menu from './components/menu.jsx';
import AboutMe from './components/aboutMe';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
