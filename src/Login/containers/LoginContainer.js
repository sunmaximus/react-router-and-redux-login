import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'; 

import { fetchedUser } from '../module/login';
import { login } from '../../auth/authActions';


const mapStateToProps = ({ auth }) => {
  return { auth };
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrievedUSer: (user) => dispatch(fetchedUser(user)),
    login: (data) => dispatch(login(data))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);