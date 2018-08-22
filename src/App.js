import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { addGUN, removeGUN } from './index.redux.js';
import { Button } from 'antd-mobile';
import './App.css';
class App extends Component {
    render() {
        const store = this.props.store;
        const num = store.getState();
        return (
            <React.Fragment>
              <div>
                现在有
                { num }把机枪
              </div>
              <button onClick={ () => store.dispatch(addGUN()) }>
                申请枪支
              </button>
              <button onClick={ () => {
                                    store.dispatch(removeGUN())
                                } }>
                归还枪支
              </button>
            </React.Fragment>
        )
    }
}
export default App;