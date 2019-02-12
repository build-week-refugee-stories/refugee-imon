import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Stories from './components/Stories/Stories';
import SubmitStory from './components/Stories/SubmitStory';
import RecentStories from './components/Stories/RecentStories'

import authenticate from './components/Authenticate/Authenticate'

const Authenticate = authenticate(Login)(RecentStories)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Authenticate} />
        <Route path='/stories' component={Stories} />
        <Route path='/submit-story' component={SubmitStory} />
      </div>
    );
  }
}

export default App;
