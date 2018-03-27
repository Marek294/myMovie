import { userLoggedIn } from './Auth';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import api from '../api';

export const signup = (data) => dispatch => {
    return api.User.signup(data).then(user => {
                localStorage.myMovieJWT = user.token;
                setAuthorizationToken(user.token);
                return dispatch(userLoggedIn(user));
            });
}