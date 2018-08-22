import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux.js';
import { Redirect } from 'react-router-dom';
// ({
//     isAuth: state.auth.isAuth
// })
@connect(state => state.auth,
    {
        login
    }
)
class Auth extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
              { this.props.isAuth ? <Redirect to="/dashbord"></Redirect> : null }
              <h2>你没有权限，需要登录才能查看</h2>
              <button onClick={ this.props.login }>
                登陆
              </button>
            </div>
        )
    }
}
export default Auth;