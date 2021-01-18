import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Entries from './Entries';
import NewEntry from './Form';
import Login from './Login';
import Home from './Home'; 
import Entry from './Entry'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/New">
            <NewEntry />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path = "/Entry">
            <Entry />
          </Route>
          <Route exact path ="/Edit">
            <NewEntry />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
