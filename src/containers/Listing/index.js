import React, { Component } from 'react';

class Listing extends Component {
    render() {
        console.log(this.props);

        return (
            <div id="listing">
                <center> <p>I am book</p></center>
            </div>
        );
    }
}

export default Listing;