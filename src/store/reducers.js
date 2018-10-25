import { combineReducers } from 'redux'
import fakeAuth from '../auth/fakeAuth';

const rootReducer = combineReducers({
  auth: () => fakeAuth,
  test: () => 'hello',
});
  
export default rootReducer;