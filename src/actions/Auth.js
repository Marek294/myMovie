import api from '../api';
import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_CONFIRM_EMAIL } from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const userConfirmEmail = () => ({
    type: USER_CONFIRM_EMAIL
})

export const login = (data) => dispatch => {
    return api.User.login(data).then(user => {
        localStorage.myMovieJWT = user.token;
        setAuthorizationToken(user)
        return dispatch(userLoggedIn(user));
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem('myMovieJWT');
    setAuthorizationToken();
    return dispatch(userLoggedOut());
}

export const sendConfirmationEmail = () => () => api.User.sendConfirmationEmail();

export const confirmEmail = (confirmationToken) => dispatch => {
    return api.User.confirmEmail(confirmationToken)
        .then(data => {
            dispatch(userConfirmEmail());
            return data;
        })
}

export const resetPasswordRequest = (data) => () => api.User.resetPasswordRequest(data);

export const resetPassword = (data) => () => api.User.resetPassword(data);