import React, { Component } from 'react';
// import logo from '../logo.svg';
// import ChildComponent from './ChildComponent/ChildComponent'
import Form from './Form/Form.component'
import './App.css';

function InputTextItems() {
  return [
    {title: 'Nombre', key: 'name', type: 'text', domType:'input'},
    {title: 'Edad', key: 'age', type: 'number', domType:'input'},
    {title: 'Edad', key: 'gnr', type: 'number', domType:'selector', options:["Hombre", "Mujer"]}
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
    this.setState({
      inputText: data
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form inputs={InputTextItems()} onFormSubmitted={this.onFormSubmitted}></Form>

          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        </header>
      </div>
    );
  }
}
