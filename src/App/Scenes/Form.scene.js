import React, { Component } from 'react';
import Form from '../Components/Form/Form.component'
import InputText from '../Components/InputWithTitle/Models/InputText.model'
import InputSelector from '../Components/InputWithTitle/Models/InputSelector.model'
import SelectOption from '../Components/InputWithTitle/Models/SelectOption.model'

import '../App.css';

function InputTextItems() {
    const options = [
        new SelectOption("male", "Hombre", "Hombre"),
        new SelectOption("female", "Mujer", "Mujer")
    ];

    return [
        new InputText('Nombre', 'name', 'text'),
        new InputText('Edad', 'age', 'number'),
        new InputSelector('Género', 'gender', options)
    ];
}

export default class FormScene extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ""
        };
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
        this.onLinkClicked = this.onLinkClicked.bind(this);
    }

    onFormSubmitted(_, data) {
        this.setState({
            inputText: data
        });
    }

    onLinkClicked(event) {
        event.preventDefault();
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Form inputs={InputTextItems()} onFormSubmitted={this.onFormSubmitted}></Form>
                    <a onClick={this.onLinkClicked}>Back</a>
                </header>
            </div>
        );
    }
}