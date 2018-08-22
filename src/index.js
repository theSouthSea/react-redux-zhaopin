import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import APP from './App.js';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux.js';
const store = createStore(counter);
function render() {
    ReactDOM.render(<APP store={ store } />, document.getElementById('root'))
}
render();
store.subscribe(render);
registerServiceWorker();