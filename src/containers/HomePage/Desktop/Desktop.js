import React from 'react';
import Login from '../../Login/Login';

import classes from './Desktop.css';

const Desktop = (props) => {
    return (
        <div className={classes.Container}>
            <Login />
        </div>
    );
};

export default Desktop;