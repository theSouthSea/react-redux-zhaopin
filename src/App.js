import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsyn } from './index.redux.js';
import logo from './logo.svg';
import { Button } from 'antd-mobile';
import './App.css';
// const mapStatetoProps = (state) => {
//     return {
//         num: state
//     };
// }
// const actionCreators = {
//     addGun,
//     removeGun,
//     addGunAsyn
// };
// App = connect(mapStatetoProps, actionCreators)(App);
// @connect(mapStatetoProps, actionCreators)
@connect(
    // 你要什么属性放到props里面
    state => ({
        num: state.counter
    }),
    // 你要什么方法放到props里面，它会自动dispatch
    {
        addGun,
        removeGun,
        addGunAsyn
    })
class App extends Component {
    render() {
        const num = this.props.num;
        const addGun = this.props.addGun;
        const removeGun = this.props.removeGun;
        const addGunAsyn = this.props.addGunAsyn;
        return (
            <React.Fragment>
              <div>
                现在有
                { num }把机枪
              </div>
              <button onClick={ addGun }>
                申请枪支
              </button>
              <button onClick={ removeGun }>
                归还枪支
              </button>
              <button onClick={ addGunAsyn }>
                拖两天再给
              </button>
            </React.Fragment>
        )
    }
}
export default App;