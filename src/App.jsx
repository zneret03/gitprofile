import React from 'react';
import Root from './Components/Root'
import MainInput from './page/MainInput';
import NoRouteMatch from './page/404';
//import UserProfile from './page/userProfile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {

  return (
        <Router>
          <Switch>
              <Route exact path="/user" component={Root}/> 
              <Route exact path="/Home" component={MainInput}/>
              <Route component={NoRouteMatch}/>
          </Switch>
        </Router>
  );
}

export default App;
