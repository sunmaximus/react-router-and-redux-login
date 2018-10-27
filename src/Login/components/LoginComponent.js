import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

import '../style/login.scss';

class LoginComponent extends Component {
  state = { redirectToReferrer: false, username: '', password: '' };
  login = () => {
    const { username, password } = this.state;
    this.props.login({ username, password }, () => this.setState({ redirectToReferrer: true }));
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer, username, password } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className='login__container'>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        
        <h1>login form</h1>
        <div className='login__card'>
          <Form className='login__form'>
            <Form.Field>
              <label>username</label>
              <input
                value={username}
                placeholder='username *'
                onChange={(event) => this.setState({ username: event.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>password</label>
              <input
                value={password}
                type="password"
                placeholder='password *'
                onChange={(event) => this.setState({ password: event.target.value })}
              />
            </Form.Field>
            <Button type='submit' onClick={this.login} className='login__button'>Login</Button>
            {/* {!authSuccess && authSuccess !== undefined && <div className='login__error'>login fail</div>} */}
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;