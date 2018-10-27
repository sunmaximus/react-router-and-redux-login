import { combineReducers } from 'redux'
import fakeAuth from '../auth/fakeAuth';

import loginReducer from '../Login/module/login';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: () => fakeAuth,
  user: loginReducer,
  authorize: authReducer,
});
  
export default rootReducer;