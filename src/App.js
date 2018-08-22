import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd-mobile';
import './App.css';
class App extends Component {
    render() {
        const store = this.props.store;
        const num = store.getState();
        const addGun = this.props.addGun;
        const removeGun = this.props.removeGun;
        const addGunAsyn = this.props.addGunAsyn;
        return (
            <React.Fragment>
              <div>
                现在有
                { num }把机枪
              </div>
              <button onClick={ () => store.dispatch(addGun()) }>
                申请枪支
              </button>
              <button onClick={ () => {
                                    store.dispatch(removeGun())
                                } }>
                归还枪支
              </button>
              <button onClick={ () => {
                                    store.dispatch(addGunAsyn())
                                } }>
                拖两天再给
              </button>
            </React.Fragment>
        )
    }
}
export default App;