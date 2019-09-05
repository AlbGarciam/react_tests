
export let InputTypes = {
    SELECTOR: 'selector',
    INPUT: 'input'
}

export default class Input {
    constructor(title, identifier, domType) {
        this.title = title;
        this.identifier = identifier;
        this.domType = domType;
    }
}
