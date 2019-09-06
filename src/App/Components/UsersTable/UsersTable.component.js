import React, { Component } from 'react';
import UserContext from '../../Context/Users.context';

export default class UsersTable extends Component {
  render() {
    let body = this.context;
    console.log(body);
    let html = body.map((item) => item.formatHTML() );

    return (
      <div>
        <h2>Users</h2>
        <table style={{width: "100%"}}>
          <thead>
            <tr><th>Name</th><th>Age</th><th>Genre</th></tr>
          </thead>
          <tbody>{html}</tbody>
        </table>
      </div>
    )
  }
}

UsersTable.contextType = UserContext;