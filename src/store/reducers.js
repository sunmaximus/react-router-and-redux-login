import { combineReducers } from 'redux'
import fakeAuth from '../auth/fakeAuth';

import loginReducer from '../Login/module/login';

const rootReducer = combineReducers({
  auth: () => fakeAuth,
  user: loginReducer
});
  
export default rootReducer;