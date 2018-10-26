import React, { Component } from 'react';
import { Button, Form, Radio } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

import '../style/login.scss';

class LoginComponent extends Component {
  state = { redirectToReferrer: false };
  login = () => {
    this.props.auth.authenticate(() => {
      this.setState((prevState) => ({
        redirectToReferrer: true,
        authSuccess: prevState.purposelyFail ? false : !prevState.authSuccess }));
    });
  };

  forceAuthFail = () => this.setState((prevState) => ({ purposelyFail: !prevState.purposelyFail }))

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer, authSuccess } = this.state;
    if (redirectToReferrer && authSuccess) return <Redirect to={from} />;

    return (
      <div className='login__container'>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        
        <h1>login form</h1>
        <div className='login__card'>
          <Form className='login__form'>
            <Form.Field>
              <label>username</label>
              <input placeholder='username *' />
            </Form.Field>
            <Form.Field>
              <label>password</label>
              <input placeholder='password *' />
            </Form.Field>
            <Button type='submit' onClick={this.login} className='login__button'>Login</Button>
            {!authSuccess && authSuccess !== undefined && <div className='login__error'>login fail</div>}
          </Form>
        </div>

        <h4>toggle to force authenticate fail</h4>
        <Radio slider onClick={() => this.forceAuthFail()}/>
      </div>
    );
  }
}

export default LoginComponent;