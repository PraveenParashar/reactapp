import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,Router
  } from "react-router-dom";
  import Home from "./Components/Home";
  import Contact from "./Components/Contact";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple ReactJS SPA</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
       
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>


          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/Contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>

      
    );
  }
}
 
export default Main;