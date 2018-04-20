import React, { Component } from 'react';
import {createStore} from "redux";
import { connect} from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cal from './Cal.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Home from './Home.js'
import Demo from './Demo.js'
class App extends Component {
  render() {
    return (
      <div>      
        <Router>
          <div>
            <Route path="/" component={Demo} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={ Login} />
            <Route path="/Cal" component={Cal} />
            <Route exact path="/"  component={Home}/>   
          </div>    
        </Router>
      </div>
    );
  }
}
export default App;
