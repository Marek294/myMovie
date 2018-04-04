import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_CONFIRM_EMAIL } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        case USER_CONFIRM_EMAIL:
            return {
                ...state,
                confirmed: true
            }
        default:
            return state;
    }
};