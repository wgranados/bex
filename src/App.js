import React, { Component } from 'react';

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import './App.css';
import 'carbon-components/scss/globals/scss/styles.scss';

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
           <div>
            <HamburgerMenu />
          </div>
          <div className="content-wrapper padding" >
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
