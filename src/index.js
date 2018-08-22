import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import APP from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer.js';
import Dashboard from './Dashboard.js';
import Auth from './Auth.js';
const store = createStore(reducers, compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
console.log(store.getState());
ReactDOM.render((<Provider store={ store }>
                   <BrowserRouter>
                     <Switch>
                       <Route path="/login" exact component={ Auth }></Route>
                       <Route path="/dashboard" component={ Dashboard }></Route>
                       <Redirect to="/dashboard"></Redirect>
                     </Switch>
                   </BrowserRouter>
                 </Provider>), document.getElementById('root'))
registerServiceWorker();
