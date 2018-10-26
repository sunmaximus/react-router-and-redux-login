import React, { Component } from 'react';
import { Table, Container, Icon, Button } from 'semantic-ui-react';

import '../styles/home.scss'

class UserComponent extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    users: this.props.user.users,
  }

  addUser(text, keyCode) {
    this.setState(prevState => {
      return {
        users: text !== '' && keyCode === 'Enter' ? [{ name: text }, ...prevState.users] : prevState.users
      }});
  }

  deleteUser = (userName) => {
    this.setState(prevState => ({
      users: prevState.users.filter(removeUser => removeUser.name !== userName )
    }))
  }

  renderUsers = () => {
    const { edit, users } = this.state;
    return users.map((user => (
      <Table.Row key={`${user.name}${Math.random()}`}>
        <Table.Cell className={edit ? 'home__admin-edit-cell' : ''}>
          {user.name}
          {edit && 
          <Icon
            name='remove'
            size='large'
            className='home__edit-icon'
            onClick={() => this.deleteUser(user.name)}
          />}
        </Table.Cell>
      </Table.Row>
    )));
  }
  render() {
    const { firstName, lastName, edit, newUser } = this.state;
    console.log(22, newUser)
    return (
      <div className='home__container'>
        <h1>Admin: {`${firstName} ${lastName}`}</h1>

        <div className='home__edit-admin-container'>
          <h4>Edit:</h4> 
          {edit && <input
            // value={newUser}
            className='home__edit-admin-add-user'
            placeholder='add username and press enter'
            onKeyUp={(event) => this.addUser(event.target.value, event.key)}  
          /> }

          <Icon
            name='edit'
            size='large'
            className='home__edit-icon'
            onClick={() => this.setState(prevState => ({ edit: !prevState.edit }))}
          />
        </div>

        <Table className='home__table'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan='2'>users</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderUsers()}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default UserComponent;