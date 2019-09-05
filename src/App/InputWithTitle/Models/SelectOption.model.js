import React  from 'react';

export default class SelectOption {
    constructor(id, value, displayValue) {
        this.id = id;
        this.value = value;
        this.displayValue = displayValue;
    }

    formatHTML() {
        return <option key={this.id} value={this.value}>{this.displayValue}</option>
    }
}