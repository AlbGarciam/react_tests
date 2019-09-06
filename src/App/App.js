import React, { Component } from 'react';
import FormScene from './Scenes/Form/Form.scene'
import HomeScene from './Scenes/Home.scene'
import LoginScene from './Scenes/Login.scene'
import { BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScene} />
          <Route exact path="/login" component={LoginScene} />
          <Route path="/form" component={FormScene} />
        </div>
      </Router>
    );
  }
}