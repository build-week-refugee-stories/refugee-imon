import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import authenticate from './components/Authenticate/Authenticate'

const Authenticate = authenticate(Login)(Home)

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} /> */}
        <Authenticate />
      </div>
    );
  }
}

export default App;
