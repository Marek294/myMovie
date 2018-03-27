import React from 'react';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';

import classes from './Desktop.css';

const Desktop = (props) => {
    return (
        <div className={classes.Container}>
            {props.isLogin ? <Login showSignup={props.showSignup} /> : <Signup showLogin={props.showLogin} />}
        </div>
    );
};

export default Desktop;