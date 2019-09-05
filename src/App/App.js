import React, { Component } from 'react';
import FormScene from './Scenes/Form.scene'
import HomeScene from './Scenes/Home.scene'
import { BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScene} />
          <Route exact path="/login" component={FormScene} />
          <Route path="/topics" component={FormScene} />
        </div>
      </Router>
    );
  }
}