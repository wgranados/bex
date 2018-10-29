import React, { Component } from 'react';
import Select from 'react-select';

class Settings extends Component  {
    state = {
        selectedLanguage: null,
        selectedFont: null,
        selectedFontSize: null,
        selectedBackgroundColour: null
    }
    // onChange handlers for various selects
    handleLanguageChange = (selectedLanguage) => { this.setState({selectedLanguage});}
    handleFontChange = (selectedFont) => { this.setState({selectedFont});}
    handleFontSizeChange = (selectedFontSize) => { this.setState({selectedFontSize});}
    handleBackgroundColourChange = (selectedBackgroundColor) => { this.setState({selectedBackgroundColor});}

    render() {
        const {
            selectedLanguage,
            selectedFont,
            selectedFontSize,
            selectedBackgroundColour,
        } = this.state;
        const languageOptions = [
            { value: "english", label: "English - EN"},
            { value: "spanish", label: "Spanish - ES"},
            { value: "french", label: "French - FE"},
        ];
        const fontOptions = [
            { value: "Times New Roman", label: "Times New Roman"},
            { value: "Arial", label: "Arial"},
            { value: "Arial Black", label: "Arial Black"},
            { value: "Comic Sans", label: "Comic Sans"},
            { value: "Wingdings", label: "Wingdings"},
        ];
        const fontSizeOptions = [
            { value: "12", label: "12pt"},
            { value: "13", label: "13pt"},
            { value: "14", label: "14pt"},
            { value: "15", label: "15pt"},
        ];
        const backgroundColorOptions = [
            { value: "blue", label: "Blue"},
            { value: "white", label: "White"},
        ];
        return (
            <div>
                <center>
                    <h1>Settings</h1>
                    <div id="accessibility">
                    <p>Language</p>
                    <div style={{width: 200}}>
                        <Select
                            value={selectedLanguage}
                            onChange={this.handleLanguageChange}
                            options={languageOptions} />
                    </div>
                    <p>Font</p>
                    <div style={{width: 200}}>
                        <Select
                            value={selectedFont}
                            onChange={this.handleFontChange}
                            options={fontOptions} />
                    </div>
                    <p>Font Size</p>
                    <div style={{width: 200}}>
                        <Select
                            value={selectedFontSize}
                            onChange={this.handleFontSizeChange}
                            options={fontSizeOptions} />
                    </div>
                    <p>Background Colour</p>
                    <div style={{width: 200}}>
                        <Select
                            value={selectedBackgroundColour}
                            onChange={this.handleBackgroundColourChange}
                            options={backgroundColorOptions} />
                    </div>



                    </div>
                    <div id="login">
                        <h3>Login</h3>
                        <p>Email: <input></input></p>
                        <p>Password: <input></input> </p>
                        <button>reset password</button>
                        <button>link facebook</button>
                    </div>
                </center>

            </div>
        )
    }
}

export default Settings;