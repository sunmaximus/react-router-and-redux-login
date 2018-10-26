import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'; 

import { fetchedUser } from '../module/login';

const mapStateToProps = ({ auth }) => {
  return { auth };
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrievedUSer: (user) => dispatch(fetchedUser(user))
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);