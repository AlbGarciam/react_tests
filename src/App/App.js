import React, { Component } from 'react';
import Form from './Form/Form.component'
import './App.css';

function InputTextItems() {
  return [
    {title: 'Nombre', key: 'name', type: 'text', domType:'input'},
    {title: 'Edad', key: 'age', type: 'number', domType:'input'},
    {title: 'Género', key: 'gnr', domType:'selector', options:["Hombre", "Mujer"]}
  ]
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
