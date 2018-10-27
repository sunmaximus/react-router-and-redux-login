
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
      return axios.post('http://localhost:5000/api/login', data).then(res => {
        const token = res.data.token;
        console.log(res.data.token)
        localStorage.setItem('jwtToken', token);
        console.log(token);
        setAuthorizationToken(token);
        console.log(jwtDecode(token));
        dispatch(setCurrentUser(jwtDecode(token)));
    });    
  }

}