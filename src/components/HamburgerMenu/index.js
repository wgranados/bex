import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';

import './styles.css'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';



class HamburgerMenu extends React.Component {
  state = {
    value: '',
    redirect: false,
  }

  onSelect = (selected) => {
    this.setState({...this.state, value: selected, redirect: true});
  }


  render () {
    if(this.state.redirect) {
          this.setState({...this.state, redirect: false});
          return <Redirect to={{
              pathname: process.env.PUBLIC_URL + "/" + this.state.value,
              state: {search: this.state.value} }} />
    }
      return (
        <SideNav
    onSelect={this.onSelect}

>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="createlisting">
            <NavIcon>
                <i className="fa fa-fw fa-plus" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Create Listing 
            </NavText>
        </NavItem>
        <NavItem eventKey="settings">
            <NavIcon>
                <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Settings
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
      );
  }
}

export default HamburgerMenu;