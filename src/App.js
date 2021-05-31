import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/Notfound";


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
