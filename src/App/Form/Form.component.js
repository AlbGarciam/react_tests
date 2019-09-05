import React from 'react';
import InputWithTitle from '../InputWithTitle/InputWithTitle.component';

function InputList(props, callback) {
  const inputs = props.inputs;
  return inputs.map((input) => <InputWithTitle configModel={input} key={input.identifier} onInputChanged={callback}></InputWithTitle>)
}

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {}
    };

    this.onInputChanged = this.onInputChanged.bind(this);
    this.onFormSubmitted = this.onFormSubmitted.bind(this);
  }

  onFormSubmitted(event) {
    event.preventDefault();
    this.props.onFormSubmitted(this, this.state.value)
    return false;
  }

  onInputChanged(component, _, newValue) {
    var newState = this.state.value
    newState[component.props.id] = newValue
    this.setState({
      value: newState
    })
  }

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.onFormSubmitted}>
          {InputList(this.props, this.onInputChanged)}
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

Form.defaultProps = {
  inputs: [],
  onFormSumbitted: (component, data) => {},
};