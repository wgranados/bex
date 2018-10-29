import React, { Component } from 'react';
import Select from 'react-select';
import styles from './styles.css';

class CreateListing extends Component {
    state = {
        selectedSchool: null,
        textbookTitle: null,
        authors: null,
        selectedCondition: null, 
        price: null,
        image: null,
        isbnNumber: null,
    }
    handleSelectedSchoolChange = (selectedSchool) => { this.setState({selectedSchool});}

    render() {
        const {
            selectedSchool,
            textbookTitle,
            authors,
            selectedCondition, 
            price,
            image,
            isbnNumber,
        } = this.props;
        const schoolOptions = [
            { value: "University of Toronto", label: "University of Toronto"},
            { value: "University of Waterloo", label: "University of Waterloo"},
        ];
        return (
            <div>
                <center>
                    <h1>Create Listing</h1>
                    <div>
                        <p>School:
                        <div className={styles.block2} style={{width: 200}}>
                            <Select
                                value={selectedSchool}
                                onChange={this.handleLanguageChange}
                                options={schoolOptions} />
                        </div>
                        </p>
                    </div>
                    <p>Textbook Title:<input></input> </p> 
                    <p>Authors: <input></input> </p>
                    <p>Price: <input></input> </p>
                    <p>ISBN Number: <input></input> </p>
                    <p>Image: <input></input> </p>
                    <button>Create Listing</button>
                </center>
            </div>
        );
    }
}

export default CreateListing;