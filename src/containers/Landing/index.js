import React, { Component } from 'react';

import CustomLandingSearch from '../../components/CustomLandingSearch'; 

class Landing extends Component  {
    onSubmit = () => {

    }
    render() {

        return (
            <div>
                <center>
                    <h1>Find a textbook</h1>
                    <CustomLandingSearch 
                    />
                </center>
            </div>
        )
    }
}

export default Landing;