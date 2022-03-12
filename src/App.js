import './App.css';
import { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Splash from './components/splash/splash';
import Experience from './components/experience/experience';
import About from './components/about/about';
import Contact from './components/contact/contact';
import NavBar from './components/navbar/nav-bar';

function App() {

  // useEffect(() => window.scroll(0,0))

  return (
    <div className="app-outer-div">
        {/* <Navbar /> */}
        <NavBar />
        <Splash />
        <Experience />
        <About />
        <Contact />
    </div>
  );
}

export default App;
