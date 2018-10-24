import React, { Component } from 'react';

import CustomLandingSearch from '../../components/CustomLandingSearch'; 

class Landing extends Component  {
    onSubmit = () => {

    }
    render() {

        return (
            <div>
                <center>
                    <p>Find a textbook</p>
                    <CustomLandingSearch 
                    />
                </center>
            </div>
        )
    }
}

export default Landing;