import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Forms from './components/Forms.js'
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
ReactDOM.render(
  <Forms />,
  document.getElementById('form')
);
