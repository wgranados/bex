import React, { Component } from 'react';

class Listing extends Component {
    render() {
        const { 
            bookName, 
            bookPicture,
            bookStuff,
        } = this.props;

        return (
            <div id="listing">
                <img src={bookPicture}/>
                <p>{bookName}</p>
                <p></p>


            </div>
        );
    }
}

export default Listing;