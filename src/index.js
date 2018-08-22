import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import APP from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux.js';
const store = createStore(counter, compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(<Provider store={ store }>
                  <APP />
                </Provider>, document.getElementById('root'))
registerServiceWorker();