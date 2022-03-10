import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Splash from './components/splash/splash';
import Experience from './components/experience/experience';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {

  useEffect(() => window.scroll(0,0))

  return (
    <div className="app-outer-div">
        <Navbar />
        <Splash />
        <Experience />
        <About />
        <Contact />
        {/* <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/experience" component={Experience} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>  */}
     
    </div>
  );
}

export default App;
