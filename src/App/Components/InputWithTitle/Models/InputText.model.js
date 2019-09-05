import Input, { InputTypes } from './Input.model'

export default class InputText extends Input {
    constructor(title, identifier, inputType) {
        super(title, identifier, InputTypes.INPUT);
        this.inputType = inputType
    }
}