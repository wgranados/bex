import React, { Component } from 'react';
import Select from 'react-select';
import { Button, DropdownV2, TextInput} from 'carbon-components-react';
import './styles.css'

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
        return (
            <div>
                <center>
                    <h1>Settings</h1>
                    <div id="accessibility">
                        <p>Language</p>
                        <div style={{width: 300}}>
                            <DropdownV2
                            label="Language"
                            ariaLabel="Dropdown"
                            items={[
                                { id: "english", text: "English - EN"},
                                { id: "spanish", text: "Spanish - ES"},
                                { id: "french", text: "French - FE"},
                            ]}
                            itemToString={item => (item ? item.text : '')}
                            onChange={this.handleLanguageChange}
                            />
                        </div>

                        <p>Font</p>
                        <div style={{width: 300}}>
                            <DropdownV2
                            label="Font"
                            ariaLabel="Dropdown"
                            items={[
                                { id: "Times New Roman", text: "Times New Roman"},
                                { id: "Arial", text: "Arial"},
                                { id: "Arial Black", text: "Arial Black"},
                                { id: "Comic Sans", text: "Comic Sans"},
                                { id: "Wingdings", text: "Wingdings"},
                            ]}
                            itemToString={item => (item ? item.text : '')}
                            onChange={this.handleFontChange}
                            />
                        </div>

                        <p>Font Size</p>
                        <div style={{width: 300}}>
                            <DropdownV2
                            label="Font Size"
                            ariaLabel="Dropdown"
                            items={[
                                { id: "12", text: "12pt"},
                                { id: "13", text: "13pt"},
                                { id: "14", text: "14pt"},
                                { id: "15", text: "15pt"},
                            ]}
                            itemToString={item => (item ? item.text : '')}
                            onChange={this.handleFontSizeChange}
                            />
                        </div>

                        <p>Background Colour</p>
                        <div style={{width: 300}}>
                            <DropdownV2
                            label="Background Colour"
                            ariaLabel="Dropdown"
                            items={[
                                { id: "blue", text: "Blue"},
                                { id: "white", text: "White"},
                            ]}
                            itemToString={item => (item ? item.text : '')}
                            onChange={this.handleBackgroundColourChange}
                            />
                        </div>
                    </div>

                        <h3>Login</h3>
                        <div id="login">
                        <TextInput
                            className="text-input"
                            id="test2"
                            labelText="Email"
                            type=""
                            placeholder="Email"
                            hideLabel={true}
                            invalidText="A valid value is required"
                        />
                        <TextInput
                            className="text-input"
                            id="test2"
                            labelText="Password"
                            type=""
                            placeholder="Password"
                            hideLabel={true}
                            invalidText="A valid value is required"
                        />
                        <Button className="test">reset password</Button>
                        <Button className="test">link facebook</Button>
                    </div>
                </center>

            </div>
        )
    }
}

export default Settings;