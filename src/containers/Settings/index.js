import React, { Component } from 'react';
import Select from 'react-select';

class Settings extends Component  {
    state = {
        selectedLanguage: null,
        selectedFont: null,
        selectedFontSize: null,
        selectedBackgroundColour: null,
        selectedTextColour: null
    }
    // onChange handlers for various selects
    handleLanguageChange = (selectedLanguage) => { 
        this.setState({...this.state, selectedLanguage: selectedLanguage});
    }
    handleFontChange = (selectedFont, onFontChange) => { 
        this.setState({...this.state, selectedFont: selectedFont});
        onFontChange(selectedFont);
    }
    handleFontSizeChange = (selectedFontSize) => { 
        this.setState({selectedFontSize});
    }
    handleBackgroundColourChange = (selectedBackgroundColour) => { 
        this.setState({...this.state, selectedBackgroundColour});
    }
    handleTextColourChange = (selectedTextColour) => { 
        this.setState({...this.state, selectedTextColour});
    }
    render() {
        const {
            selectedLanguage,
            selectedFont,
            selectedBackgroundColour,
            selectedTextColour,
        } = this.state;
        const { onFontChange } = this.props;
        const languageOptions = [
            { value: "english", label: "English - EN"},
            { value: "spanish", label: "Spanish - ES"},
            { value: "french", label: "French - FE"},
        ];
        const fontOptions = [
            { value: "tnr12pt", label: "Times New Roman - 12pt"},
            { value: "tnr13pt", label: "Times New Roman - 13pt"},
            { value: "tnr14pt", label: "Times New Roman - 14pt"},
            { value: "tnr15pt", label: "Times New Roman - 15pt"},
        ];
        const backgroundColorOptions = [
            { value: "blue", label: "Blue"},
            { value: "white", label: "White"},
            { value: "pink", label: "Pink"},
            { value: "black", label: "Black"},
        ];
        const textColorOptions = [
            { value: "black", label: "Black"},
            { value: "yellow", label: "Yellow"},
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
                                onChange={(e) => this.handleFontChange(e, onFontChange)}
                                options={fontOptions} />
                        </div>
                        <p>Background Colour</p>
                        <div style={{width: 200}}>
                            <Select
                                value={selectedBackgroundColour}
                                onChange={this.handleBackgroundColourChange}
                                options={backgroundColorOptions} />
                        </div>
                        <p>Text Colour</p>
                        <div style={{width: 200}}>
                            <Select
                                value={selectedTextColour}
                                onChange={this.handleTextColourChange}
                                options={textColorOptions} />
                        </div>
                        <br/>
                        <button>Submit Changes</button>
                    </div>
                </center>

            </div>
        )
    }
}

export default Settings;