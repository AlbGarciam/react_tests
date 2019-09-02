import React, { Component } from 'react';
import logo from '../logo.svg';
import ChildComponent from './ChildComponent/ChildComponent'
import SecondChildComponent from './SecondChildComponent/SecondChildComponent'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
    this.handleTyping = this.handleTyping.bind(this);
  }

  handleTyping(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <input type="text" value={this.state.inputText} onChange={this.handleTyping}></input>
          <ChildComponent name={this.state.inputText}>
            <SecondChildComponent name={this.state.inputText}></SecondChildComponent> 
          </ChildComponent>
        </header>
      </div>
    );
  }
}
