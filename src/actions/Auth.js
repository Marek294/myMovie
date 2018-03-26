import api from '../api';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = (data) => dispatch => {
    return api.User.login(data).then(user => {
        localStorage.myMovieJWT = user.token;
        setAuthorizationToken(user)
        return dispatch(userLoggedIn(user));
    })
}