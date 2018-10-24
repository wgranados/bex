import React, { Component } from 'react';

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import './App.css';
import HamburgerMenu from './components/HamburgerMenu';

import Landing from './containers/Landing';
import Results from './containers/Results';
import Settings from './containers/Settings';
import Listing from './containers/Listing';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App" className="container-fluid">
          <HamburgerMenu />
          <div className="content-wrapper" >
            <Route exact path="/" component={Landing} />
            <Route path="/settings" component={Settings} />
            <Route path="/results" component={Results} />
            <Route path="/listing" component={Listing} />
            {this.props.children}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
