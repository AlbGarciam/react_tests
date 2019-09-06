import React, { Component } from 'react';
import Form from '../Components/Form/Form.component';
import InputText from '../Components/InputWithTitle/Models/InputText.model';

import '../App.css';

function InputTextItems() {
    return [
        new InputText('Usuario', 'name', 'text'),
        new InputText('Constraseña', 'age', 'number'),
    ];
}

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ""
        };
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
    }

    onFormSubmitted() {
        this.props.history.push('/form');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Form inputs={InputTextItems()} onFormSubmitted={this.onFormSubmitted}></Form>
                    <button onClick={this.onLinkClicked}>Navigate</button>
                </header>
            </div>
        );
    }
}