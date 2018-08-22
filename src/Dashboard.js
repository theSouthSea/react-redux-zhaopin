import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from './Auth.redux'
import App from './App.js';
function Erying() {
    return <h1>二营</h1>
}
function Qibinglian() {
    return <h1>骑兵连</h1>
}
class Test extends Component {
    render() {
        return <h2>测试组件{ this.props.match.params.location }</h2>
    }
}
@connect(state => state.auth,
    {
        logout
    })
class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log(this.props);
        const url = this.props.match.url;
        const loginPage = <Redirect to="/login"></Redirect>
        const dashboard = (
        <div>
          <div>
            独立团
          </div>
          { this.props.isAuth ? <button onClick={ this.props.logout }>
                                  注销
                                </button> : null }
          <ul>
            <li>
              <Link to={ `${url}/` }>
                一营
              </Link>
            </li>
            <li>
              <Link to={ `${url}/erying` }>
                二营
              </Link>
            </li>
            <li>
              <Link to={ `${url}/qibinglian` }>
                骑兵连
              </Link>
            </li>
          </ul>
          <Route path={ `${url}/` } exact component={ App }></Route>
          <Route path={ `${url}/erying` } component={ Erying }></Route>
          <Route path={ `${url}/qibinglian` } component={ Qibinglian }></Route>
        </div>
        )
        return this.props.isAuth ? dashboard : loginPage;
    }
}
export default Dashboard;