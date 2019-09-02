import React, { Component } from 'react';

export default class SecondChildComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        value: ""
      };
  
      this.handleTyping = this.handleTyping.bind(this); // Bind the function as a memory reference
    }
  
    handleTyping(event) {
      console.log(this.props.name);
      this.props.onChange(event.target.value);
      this.setState({
        value: event.target.value
      });
    }
  
    render() {
      return (
        <div>
          {this.props.name}
        </div>
      )
    }
  }
  
  SecondChildComponent.defaultProps = {
    name: "Second Child default name"
  };