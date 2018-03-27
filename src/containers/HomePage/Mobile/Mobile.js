import React, { Component } from 'react';
import Login from '../../Login/Login';

import classes from './Mobile.css';

class Mobile extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <Login />
            </div>
        );
    }
}

export default Mobile;