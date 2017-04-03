import React, { Component } from 'react';
// import './App.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <h1>Welcome to Bored Games</h1>
        </div>
        <p className="App-intro">
          <h3>Please fill out the form to find the perfect game</h3>
        </p>
      </div>
    );
  }
}
