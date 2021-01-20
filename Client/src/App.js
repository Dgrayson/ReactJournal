import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Entries from './Entries';
import NewEntry from './Form';
import Login from './Login';
import Home from './Home'; 
import Entry from './Entry'; 
import TopBar from './navigation'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';


class App extends Component {

  render(){
    return (
      <div id="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <TopBar />
              <Login />
            </Route>
            <Route exact path="/New">
              <TopBar />
              <NewEntry />
            </Route>
            <Route exact path="/Home">
              <TopBar />
              <Home />
            </Route>
            <Route exact path = "/Entry">
              <TopBar />
              <Entry />
            </Route>
            <Route exact path ="/Edit">
              <TopBar />
              <NewEntry />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
