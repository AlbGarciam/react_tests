import React, { Component } from 'react';
import Form from './Form/Form.component'
import InputText from './InputWithTitle/Models/InputText.model'
import InputSelector from './InputWithTitle/Models/InputSelector.model'
import SelectOption from './InputWithTitle/Models/SelectOption.model'
import './App.css';

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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
    this.onFormSubmitted = this.onFormSubmitted.bind(this);
  }

  onFormSubmitted(_, data) {
    console.log("form submitted");
    console.log(data);
    // perform validation here
    this.setState({
      inputText: data
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form inputs={InputTextItems()} onFormSubmitted={this.onFormSubmitted}></Form>
        </header>
      </div>
    );
  }
}
