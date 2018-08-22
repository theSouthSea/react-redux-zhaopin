import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import APP from './App.js';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<APP></APP>, document.getElementById('root'))
registerServiceWorker();