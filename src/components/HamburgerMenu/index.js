import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles.css'


class HamburgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
      return (
        <Menu>
            <Link to={process.env.PUBLIC_URL + `/`}>Home</Link>
            <Link to={process.env.PUBLIC_URL + `/createlisting`}>Create Listing</Link>
            <Link to={process.env.PUBLIC_URL + `/settings`}>Settings</Link>
        </Menu>
      );
  }
}

export default HamburgerMenu;