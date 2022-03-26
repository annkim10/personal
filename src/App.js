import './App.css';
import { useState, useEffect } from 'react';
import Splash from './components/splash/splash';
import Experience from './components/experience/experience';
import About from './components/about/about';
import Contact from './components/contact/contact';
import NavBar from './components/navbar/nav-bar';

function App() {

  const [mobile, setMobile] = useState(false)

  const [visible, setVisible] = useState(false)

  const showMobileMenu = () => {
      if (window.innerWidth <= 960) {
          setMobile(true)
      } else {
          setMobile(false)
      }
  }

  useEffect(() => {
      showMobileMenu()
      setVisible(true)
      window.addEventListener('resize', showMobileMenu);
      // return window.removeEventListener('resize', showMobileMenu)     
  }, [])

//   var currentScroll = window.scrollY

//   console.log("currentscroll", currentScroll)

  useEffect(() => console.log("currentscroll", window.scrollY))

  return (
    <div className="app-outer-div">
        <NavBar visible={visible} mobile={mobile} />
        <Splash visible={visible} mobile={mobile} />
        <Experience mobile={mobile}/>
        <About />
        <Contact />
    </div>
  );
}

export default App;
