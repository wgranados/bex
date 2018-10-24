
import React, { Component } from 'react';

import { Search } from 'carbon-components-react';
import { Redirect } from 'react-router';


class CustomLandingSearch extends Component  {
    state = {
        value: '',
        redirect: false,
    }
    onChange = (event) => {
        this.setState({ ...this.state, value: event.target.value})
    };
    onKeyPress = (event) => {
        if (event.key == 'Enter') {
            console.log(this.state.value);
            this.setState({...this.state, redirect: true})
        }
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: "/results",
                search: "?utm="+this.state.value,
                state: {search: this.state.value} }} />
        }
        return (
            <div id='custom-search'>
                <Search 
                    value={this.state.value}
                    small={false}
                    light={true}
                    type="submit"
                    name=""
                    value={this.state.value}
                    placeHolderText="Search"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id="search-1"
                    type="text" />
            </div>
        )
    }
}

export default CustomLandingSearch;