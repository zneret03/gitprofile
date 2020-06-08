import React from 'react';
import gitProfile from './page/github'
import MainInput from './page/MainInput';
import NoRouteMatch from './page/404';
import Chart from './page/Chart'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {

  return (
        <Router>
          <Switch>
              <Route exact path="/user" component={gitProfile}/> 
              <Route exact path="/" component={MainInput}/>
              <Route exact path="/Chart" component={Chart} /> 
              <Route component={NoRouteMatch}/>
          </Switch>
        </Router>
  );
}

export default App;
