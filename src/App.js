import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Splash from './components/splash/splash';
import Develop from './components/experience/develop';
import About from './components/about/about'

function App() {
  return (
    <div className="app-outer-div">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/experience" component={Develop} />
          <Route path="/about" component={About} />
        </Switch>  
      </Router> 
    </div>
  );
}

export default App;
