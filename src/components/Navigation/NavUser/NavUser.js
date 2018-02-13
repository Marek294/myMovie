import React from 'react';

import user from '../../../assets/user.jpg';
import classes from './NavUser.css';

const NavUser = (props) => {
    return (
        <div className={classes.User}>
            <img src={user} alt=""/>
            <i className="fas fa-caret-down"></i>
        </div>
    );
};

export default NavUser;