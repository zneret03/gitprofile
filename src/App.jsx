import React from 'react';
import gitProfile from './page/github'
import MainInput from './page/MainInput';
import UserProfile from './page/userProfile'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
      <Router>
        <>
          <Route path="/profile" component={MainInput}/>
          <Route path="/user" component={gitProfile}/> 
          <Route path="/userProfile" component={UserProfile}/> 
        </>
      </Router>
  );
}

export default App;
