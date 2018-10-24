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
            <Link to={`/`}>Home</Link>
            <Link to={`/settings`}>Settings</Link>
        </Menu>
      );
  }
}

export default HamburgerMenu;