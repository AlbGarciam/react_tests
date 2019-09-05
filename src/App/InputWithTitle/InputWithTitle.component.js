import React from 'react';
import { InputTypes } from './Models/Input.model'

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
        console.log(this.props.configModel);
        return (
            <div>
                {this.props.configModel.title}
                {this.props.configModel.domType !== InputTypes.SELECTOR && <input type={this.props.configModel.type} value={this.state.inputValue} onChange={this.handleInputChange}></input>}
                {this.props.configModel.domType === InputTypes.SELECTOR && <select value={this.state.inputValue} onChange={this.handleInputChange}>{this.props.configModel.composeHTMLOptions()}</select>}
            </div>
        );
    }
}

InputWithTitle.defaultProps = {
    configModel: {},
    onInputChanged: (component, oldValue, newValue) => {},
};