import { connect } from 'react-redux'
import HomeComponent from '../components/HomeComponent';

const mapDistpatchToProps = ({ user }) => ({ user });

export default connect(mapDistpatchToProps)(HomeComponent);
