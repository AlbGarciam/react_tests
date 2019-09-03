import React from 'react';

export default class InputWithTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.onInputChanged(this, this.state.inputValue, event.target.value);
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        var options = [];
        if (this.props.options) {
            options = this.props.options.map((option) => {
            const optionName = `${this.props.title}_option_${option}`
            return <option key={optionName} value={option}>{option}</option>
        });
        }
        return (
            <div>
                {this.props.title}
                {this.props.domType !== 'selector' && <input type={this.props.type} value={this.state.inputValue} onChange={this.handleInputChange}></input>}
                {this.props.domType === 'selector' && <select value={this.state.inputValue} onChange={this.handleInputChange}>{options}</select>}
            </div>
        );
    }
}

InputWithTitle.defaultProps = {
    title: "Default title",
    onInputChanged: (component, oldValue, newValue) => {},
    id: "",
    type: "text",
    domType: "input",
    options: []
  };