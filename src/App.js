import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { Button } from 'antd-mobile';
import './App.css';
// 新建store
// 通过Reducer简历
// 根据老的state和action，生成新的state
// reducer
function counter(state = 0, action) {
    switch (action.type) {
    case '加机关枪':
        return state + 1;
    case '减机关枪':
        return state - 1;
    default:
        return 10;
    }
}
// 1.新建store
const store = createStore(counter);
const init = store.getState();
console.log('init', init);
function listener() {
    const current = store.getState();
    console.log(`现在有${current}只机关枪`);
}
store.subscribe(listener);
store.dispatch({
    type: '加机关枪'
});
// console.log(store.getState());
store.dispatch({
    type: '加机关枪'
});
// console.log(store.getState());
store.dispatch({
    type: '减机关枪'
});
// console.log(store.getState());
class App extends Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <Button type="primary">
                好好学习，天天向上
              </Button>
              <p>
                向往美好的生活，却不肯努力，怎么可能实现呢？
              </p>
              <p>
                别人不能替代你努力
              </p>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
        );
    }
}

export default App;
