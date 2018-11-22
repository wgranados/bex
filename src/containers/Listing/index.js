import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import './styles.css';

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

        return (
            <div id="listing" className="wrapper">
                <center>
                    <h1>{title}</h1>
                    <div id="image" className="leftcolumn">
                        <img src={tardosImage} height="400px" width="400px"/>
                    </div>
                    <div id="information" className="rightcolumn">
                        <p align="left" className={className} ><b>Price:</b> {price}</p>
                        <p align="left" className={className} ><b>Title:</b> {title}</p>
                        <p align="left" className={className} ><b>Author:</b> {author}</p>
                        <p align="left" className={className} ><b>Edition:</b> {edition}</p>
                        <p align="left" className={className} ><b>ISBN Number:</b> {isbnNumber}</p>
                        <p align="left" className={className} ><b>Condition:</b> Good</p>
                        <p align="left" className={className} ><b>Location:</b> {location}</p>
                        <p align="left" className={className} ><b>Seller:</b> <a href="">wgma</a> </p>
                        <table>
                            <tbody>
                                <tr>
                                    <td> <button>Contact Seller by Email</button></td>
                                    <td> <button>Contact Seller by Messenger</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>

            </div>

        );
    }
}

export default Listing;