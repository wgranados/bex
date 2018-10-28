import React, { Component } from 'react';

const tardosImage = require('./tardos.jpg');

class Listing extends Component {
    render() {
        const {
            id,
            title,
            author,
            edition,
            isbnNumber,
            price,
            location,
        } = this.props.location.state;
        return (
            <div id="listing">
                <center>
                    <h1>{title}</h1>
                    <img src={tardosImage} height="400px" width="400px"/>
                    <p><b>Price:</b> {price}</p>
                    <p><b>Title:</b> {title}</p>
                    <p><b>Author:</b> {author}</p>
                    <p><b>Edition:</b> {edition}</p>
                    <p><b>ISBN Number:</b> {isbnNumber}</p>
                    <p><b>Condition:</b> Good</p>
                    <p><b>Location:</b> {location}</p>
                    <p><b>Seller:</b> <a href="">wgma</a> </p>
                    <table>
                        <tbody>
                            <tr>
                                <td> <button>Contact Seller by Email</button></td>
                                <td> <button>Contact Seller by Messenger</button></td>
                            </tr>
                        </tbody>
                    </table>
                </center>

            </div>

        );
    }
}

export default Listing;