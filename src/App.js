import './App.css';
import PageManager from './pages/pageManager';
import Error from './pages/error';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
    return ( 
      <Router>
        <div className="page">
          <Switch>
            <Route exact path="/" component={PageManager} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
