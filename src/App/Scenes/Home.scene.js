import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link className="App-link" to="/login">Login</Link>
                </header>
            </div>
        );
    }
}