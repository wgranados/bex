import React, { Component } from 'react';
import styles from './styles.css';
import {TextInput, Form, FormGroup, FileUploader, Button, Select, SelectItem, RadioButton, RadioButtonGroup, NumberInput, Checkbox, TextArea} from 'carbon-components-react';
import 'carbon-components/scss/globals/scss/styles.scss';


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
        const textbookTitleText = {
            className: 'some-class',
            id: 'test1',
            labelText: 'Textbook Title',
            placeholder: 'Textbook title',
        };
        const authorName = {
            className: 'some-class',
            id: 'test2',
            labelText: 'Authors',
            placeholder: 'Authors',
        };
        
        const priceText = {
            className: 'some-class',
            id: 'test3',
            labelText: 'Price',
            placeholder: 'Price',
        };

        const classText = {
            className: 'some-class',
            id: 'test4',
            labelText: 'Course code which required textbook',
            placeholder: 'Course code',
        };


        const fieldsetFileUploaderProps = {
            className: 'some-class',
            legendText: 'Image Uploader',
        };
        const fieldsetFileUploaderProps2 = {
        className: 'some-class',
        legendText: 'Create Listing',
        };

        const fieldsetFileUploaderProps3 = {
            className: 'some-class',
            legendText: 'Contact and meetup',
        };

        const fileUploaderEvents = {
            buttonLabel: 'Add images',
            className: 'some-class',
        };
        const isbnNumberText = {
            className: 'some-class',
            id: 'test5',
            labelText: 'ISBN Number',
            placeholder: 'ISBN Number',
        };

        const selectProps = {
            className: 'some-class',
        };

        const fieldsetRadioProps = {
            className: 'some-class',
            legendText: 'Textbook Condition',
        };

        const fieldsetRadioProps2 = {
            className: 'some-class',
            legendText: 'Price negotiable?',
        };

        const radioProps = {
            className: 'some-class',
        };


        const numberInputProps = {
            className: 'some-class',
            id: 'number-input-1',
            label: 'Edition number',
            min: 0,
            max: 100,
            value: 1,
            step: 1,
        };

        const checkboxEvent1 = {
            className: 'some-class',
            labelText: 'Phone',
        };

        const checkboxEvent2 = {
            className: 'some-class',
            labelText: 'Email',
        };

        const checkboxEvent3 = {
            className: 'some-class',
            labelText: 'Facebook',
        };
          

        const fieldsetCheckboxProps = () => ({
            className: 'some-class',
            legendText: ('Text in <legend> (legendText)', 'Show contact Information')
        });

        const textareaProps = {
            labelText: 'Additional Notes for buyer',
            className: 'some-class',
            placeholder: 'Additional Information',
            id: 'test5',
            cols: 50,
            rows: 4,
        };
        return (
            <div className="container">
                <Form>
                    <center>
                        <FormGroup {...fieldsetFileUploaderProps2}>

                        <Select {...selectProps} id="select-1" defaultValue="placeholder-item">
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text="Choose a school"
                            />
                            <SelectItem value="University of Toronto" text="University of Toronto" />
                            <SelectItem value="University of Waterloo" text="University of Waterloo" />

                        </Select>
                        
                        <TextInput {...textbookTitleText} />
                        <TextInput {...authorName} />

                        <NumberInput {...numberInputProps} />

                        <TextInput {...classText} />
                        <TextInput {...priceText} />
                        <FormGroup {...fieldsetRadioProps2}>
                            <RadioButtonGroup
                                name="radio-button-group"
                                defaultSelected="default-selected"
                            >
                                <RadioButton
                                value="standard1"
                                id="radio-1"
                                labelText="Yes"
                                {...radioProps}
                                />
                                <RadioButton
                                value="standard2"
                                labelText="No"
                                id="radio-2"
                                {...radioProps}
                                />
                            </RadioButtonGroup>
                        </FormGroup>
                        
                        <TextInput {...isbnNumberText} />

                        </FormGroup>


                        <FormGroup {...fieldsetRadioProps}>
                            <RadioButtonGroup
                                name="radio-button-group"
                                defaultSelected="default-selected"
                            >
                                <RadioButton
                                value="standard1"
                                id="radio-1"
                                labelText="Excellent"
                                {...radioProps}
                                />
                                <RadioButton
                                value="standard2"
                                labelText="Great"
                                id="radio-2"
                                {...radioProps}
                                />
                                <RadioButton
                                value="standard3"
                                labelText="Good"
                                id="radio-3"
                                {...radioProps}
                                />
                                <RadioButton
                                value="standard4"
                                labelText="Usable"
                                id="radio-4"
                                {...radioProps}
                                />
                                <RadioButton
                                value="standard5"
                                labelText="Poor"
                                id="radio-5"
                                {...radioProps}
                                />
                            </RadioButtonGroup>
                        </FormGroup>


                        <FormGroup {...fieldsetFileUploaderProps}>
                            <FileUploader
                            {...fileUploaderEvents}
                            id="file-1"
                            labelDescription="Upload images of your textbook. Cover of textbook is highly recommended"
                            />
                        </FormGroup>
                    
                        <FormGroup {...fieldsetFileUploaderProps3}>

                            <FormGroup {...fieldsetCheckboxProps()}>
                                <Checkbox {...checkboxEvent1} id="checkbox-0" />
                                <Checkbox {...checkboxEvent2} id="checkbox-1" />
                                <Checkbox {...checkboxEvent3} id="checkbox-2" />
                            </FormGroup>
                        </FormGroup>


                        <TextArea {...textareaProps} />



                        <Button>Create Listing</Button>
                    </center>
                </Form>
            </div>
        );
    }
}

export default CreateListing;