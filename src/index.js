import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { userLoggedIn } from './actions/Auth';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.myMovieJWT) {
    setAuthorizationToken(localStorage.myMovieJWT);
    const payload = jwtDecode(localStorage.myMovieJWT);
    const user = {
        email: payload.email,
        confirmed: payload.confirmed,
        avatar: payload.avatar,
        token: localStorage.myMovieJWT };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </Provider>, document.getElementById('root'));
registerServiceWorker();
