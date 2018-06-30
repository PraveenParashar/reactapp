import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Contact from './Components/Contact';
import Data from './Components/Data';
import randomusers from './Components/randomusers';




class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <h2>Welcome to React Router Tutorial</h2>
         <ul className="header">
            <li><Link to={'/Home'}>Home</Link></li>
            <li><Link to={'/Contact'}>Contect</Link></li>
            <li><Link to={'/Data'}>Data from API</Link></li>
            <li><Link to={'/randomusers'}>RandomUsers API</Link></li>
         </ul>
         <hr />
         
         <Switch>
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Contact' component={Contact} />
            <Route exect path='/Data' component={Data}/>
            <Route exect path='/randomusers' component={randomusers}/> 
         </Switch>
        
      </div>
     
   </Router>
    );
  }
}

export default App;
