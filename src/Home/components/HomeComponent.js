import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

import '../styles/home.scss'
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    birthDay: this.props.user.birthDay,
    descriptions: this.props.user.descriptions,
  }

  render() {
    const { firstName, lastName, birthDay, descriptions } = this.state; 

    return (
      <div className='home__container'>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
            <Card.Meta>
              <span className='date'>{birthDay}</span>
            </Card.Meta>
            <Card.Description>{descriptions}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Edit</Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default HomeComponent;