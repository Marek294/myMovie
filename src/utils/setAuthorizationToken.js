import axios from 'axios';

export default function(user) {
    if(user) {
        axios.defaults.headers.common['AuthorizationToken'] = `Bearer ${user.token}`;
    } else delete axios.defaults.headers.common['AuthorizationToken'];
}