import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import classes from './Logo.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <Link to="/" >
                <img src={logo} alt="" />
            </Link>
        </div>
    );
};

export default Logo;