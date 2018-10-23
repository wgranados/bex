import React, { Component } from 'react';

import HamurgerMenu from "./components/HamburgerMenu"
import logo from './logo.svg';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import './App.css';
import HamburgerMenu from './components/HamburgerMenu';

import Landing from './containers/Landing';
import Results from './containers/Results';
import Settings from './containers/Settings';

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
            {this.props.children}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
