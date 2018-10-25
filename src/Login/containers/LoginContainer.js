import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'; 

const mapStateToProps = ({ auth }) => {
  return { auth };
}


export default connect(mapStateToProps)(LoginComponent);