import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Stories from './components/Stories/Stories';
import IndividualStoryPage from './components/Stories/IndividualStory';
import SubmitStory from './components/Stories/SubmitStory';
import RecentStories from './components/Stories/RecentStories'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/recent-stories' component={RecentStories} />
        <Route exact path='/stories' component={Stories} />
        <Route path='/stories/:id' component={IndividualStoryPage} />
        <Route path='/submit-story' component={SubmitStory} />
      </div>
    );
  }
}

export default App;
