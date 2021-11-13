import React, { Component } from 'react';
import './App.css';
import NewEntry from './Components/Form';
import Login from './Components/Login';
import Home from './Components/Home'; 
import Entry from './Components/Entry'; 
import TopBar from './Components/navigation'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
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

// class App extends Component {

//   render(){
//     return (
//       <div id="app">
//         <Router>
//           <Switch>
//             <Route exact path="/">
//               <TopBar />
//               <Login />
//             </Route>
//             <Route exact path="/New">
//               <TopBar />
//               <NewEntry />
//             </Route>
//             <Route exact path="/Home">
//               <TopBar />
//               <Home />
//             </Route>
//             <Route exact path = "/Entry">
//               <TopBar />
//               <Entry />
//             </Route>
//             <Route exact path ="/Edit">
//               <TopBar />
//               <NewEntry />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }

export default App;
