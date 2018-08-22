import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import APP from './App.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux.js';
import { addGun, removeGun, addGunAsyn } from './index.redux.js';
const store = createStore(counter, applyMiddleware(thunk));
function render() {
    ReactDOM.render(<APP store={ store }
                      addGun={ addGun }
                      removeGun={ removeGun }
                      addGunAsyn={ addGunAsyn } />, document.getElementById('root'))
}
render();
store.subscribe(render);
registerServiceWorker();