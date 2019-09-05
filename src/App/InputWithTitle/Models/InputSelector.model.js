import Input, { InputTypes } from './Input.model'

export default class InputSelector extends Input {
    constructor(title, identifier, options) {
        super(title, identifier, InputTypes.SELECTOR);
        this.options = options
    }

    composeHTMLOptions() {
        return this.options.map((option) => option.formatHTML() );
    }
}