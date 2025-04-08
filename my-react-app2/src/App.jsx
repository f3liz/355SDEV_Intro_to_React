import './App.css'
import AboutMe from "./components/AboutMe.jsx";
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <h1>Profile</h1>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App