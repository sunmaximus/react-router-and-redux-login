export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const FETCHED_USER = 'FETCHED_USER';

export const login = (userInfo) => {
  return {
    type: LOGIN,
    userInfo
  }
};

export const fetchedUser = (user) => {
  return {
    type: FETCHED_USER,
    user
  }
};

const loginReducer = (state={}, action) => {
  switch(action.type) {
    case FETCHED_USER:
      return { ...state, ...action.user }
    default:
      return state;
  }
}

export default loginReducer;