import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
      </Switch>
    </div>
  );
}

export default App;