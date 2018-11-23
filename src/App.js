import React, { Component } from 'react';

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import styles from './App.module.css';
import 'carbon-components/scss/globals/scss/styles.scss';

import HamburgerMenu from './components/HamburgerMenu';

import Landing from './containers/Landing';
import Results from './containers/Results';
import Settings from './containers/Settings';
import Listing from './containers/Listing';
import Login from './containers/Login';
import CreateListing from './containers/CreateListing';



class App extends Component {
  state = {
    font: null,
  }

  onFontChange = (changes) => {
    this.setState({font: changes.value });
  }
  render() {
    const determineClass = (fontValue) => {
      switch(fontValue) {
        case 'tnr12pt': return styles.timesNewRoman12pt;
        case 'tnr13pt': return styles.timesNewRoman13pt
        case 'tnr14pt': return styles.timesNewRoman14pt;
        case 'tnr15pt': return styles.timesNewRoman15pt;
        default:  return null;
      }
    };
    const listingClassName = determineClass(this.state.font);
    return (
      <Router>
        <div id="App" className="container-fluid">
           <div>
            <HamburgerMenu />
          </div>
          <div className="content-wrapper padding" >
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Landing} />
            <Route path={process.env.PUBLIC_URL + "/results"} component={Results} />
            <Route path={process.env.PUBLIC_URL + "/settings"} 
              render={(props) => <Settings {...props} onFontChange={this.onFontChange}/> } />
            <Route path={process.env.PUBLIC_URL + "/listing"} 
              render={(props) => <Listing {...props} className={listingClassName} />} 
              />
            <Route path={process.env.PUBLIC_URL + "/createlisting"} component={CreateListing} />
            <Route path={process.env.PUBLIC_URL + "/login"} component={Login} />
            {this.props.children}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
