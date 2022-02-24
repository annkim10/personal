import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Splash from './components/splash/splash';
import Experience from './components/experience/experience';
import Develop from './components/experience/develop';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app-outer-div">
      <header className='navbar-outer-div'>
          <Navbar />
      </header>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/experience" component={Experience} />
          <Route path="/develop" component={Develop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> 
        <Footer /> 
    </div>
  );
}

export default App;
