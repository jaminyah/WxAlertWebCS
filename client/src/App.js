import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Solve from './Components/Solve/Solve';
import WxIcons from './Components/Weather/WxIcons';
import Alert from './Components/Alert/AlertIcons';
import Caution from './Components/Caution/CautionIcons';
import Legal from './Components/Legal/Legal';
import Contact from './Components/Comments/Comments';
import NotFound from './Components/NotFound/NotFound';
import NavMenu from './Components/NavMenu/NavMenu';

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/solve'>
            <Solve />
          </Route>
          <Route path='/wxicons'>
            <WxIcons />
          </Route>
          <Route path='/alert'>
            <Alert />
          </Route>
          <Route path='/caution'>
            <Caution />
          </Route>
          <Route path='/legal'>
            <Legal />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
