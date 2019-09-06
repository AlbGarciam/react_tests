import React, { Component } from 'react';
import Form from '../../Components/Form/Form.component'
import InputText from '../../Components/InputWithTitle/Models/InputText.model'
import InputSelector from '../../Components/InputWithTitle/Models/InputSelector.model'
import SelectOption from '../../Components/InputWithTitle/Models/SelectOption.model'
import UsersTable from '../../Components/UsersTable/UsersTable.component';
import UserContext from '../../Context/Users.context'
import User from './Models/User.model'

import '../../App.css';

function InputTextItems() {
    const options = [
        new SelectOption("male", "Hombre", "Hombre"),
        new SelectOption("female", "Mujer", "Mujer")
    ];

    return [
        new InputText('Nombre', 'name', 'text'),
        new InputText('Edad', 'age', 'number'),
        new InputSelector('Género', 'gender', options)
    ];
}

export default class FormScene extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
        this.onBackClicked = this.onBackClicked.bind(this);
    }

    onFormSubmitted(_, data) {
        if (!this.validateData(data)) { return }
        var newState = this.state.users;
        const newData = new User(data.name, data.age, data.gender);
        newState.push(newData);
        this.setState({
            users: newState
        });
    }

    validateData(data) {
        if (!data.name || !data.age) {
            alert("Fill data please!");
            return false;
        }

        if (data.name.length < 4) {
            alert("Name should be more than 3 chars long");
            return false;
        }

        if (data.age < 18) {
            alert("User must be over 18 years old");
            return false;
        }

        if (data.gender == null) {
            alert("Gender is null");
            return false;
        }

        alert(`Name is ${data.name}, age is ${data.age} and gender is ${data.gender}`);
        return true;
    }

    onBackClicked(event) {
        event.preventDefault();
        this.props.history.goBack()
    }

    render() {
        console.log(this.state.users);
        return (
            <div className="App">
                <header className="App-header">
                    <UserContext.Provider value={this.state.users}>
                        <Form inputs={InputTextItems()} onFormSubmitted={this.onFormSubmitted}></Form>
                        <button onClick={this.onBackClicked}>Back</button>
                        <UsersTable/>
                    </UserContext.Provider>
                </header>
            </div>
        );
    }
}