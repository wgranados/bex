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
        const { className } = this.props;
        console.log(className);

        return (
            <div id="listing">
                <center>
                    <h1>{title}</h1>
                    <img src={tardosImage} height="400px" width="400px"/>
                    <p className={className} ><b>Price:</b> {price}</p>
                    <p className={className} ><b>Title:</b> {title}</p>
                    <p className={className} ><b>Author:</b> {author}</p>
                    <p className={className} ><b>Edition:</b> {edition}</p>
                    <p className={className} ><b>ISBN Number:</b> {isbnNumber}</p>
                    <p className={className} ><b>Condition:</b> Good</p>
                    <p className={className} ><b>Location:</b> {location}</p>
                    <p className={className} ><b>Seller:</b> <a href="">wgma</a> </p>
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