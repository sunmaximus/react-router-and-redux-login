import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';

import '../styles/home.scss'
// authenticationLevel
class HomeComponent extends Component {
  render() {
    if (this.props.user.authenticationLevel === 'user') {
      return <UserComponent user={this.props.user} />
    }

    return <AdminComponent user={this.props.user} />
  }
}

export default HomeComponent;