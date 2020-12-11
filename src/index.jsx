// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/application.scss';

import gon from 'gon';

import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const container = document.querySelector('#chat');
ReactDOM.render(<App />, container);

console.log('gon', gon);
