import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Notfound from "./components/Notfound";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <Router>
      <div className="">
        <div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route  path="*" component={Notfound}/>
              </Switch>
          </div>

      </div>
    </Router>
  );
}

export default App;
