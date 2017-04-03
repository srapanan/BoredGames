import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <div id='Forms'>
        <form method="get">
          <h4>Number of players: <input type="number"></input></h4>
          <h4>Tryhard Rating: <input type='number' min='0' max='12'></input></h4>
          <h4>Game Type: <input type='text'></input></h4>
          <h4>Estimated Game Length: <input type='time'></input></h4>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
