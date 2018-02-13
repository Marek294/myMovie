import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from '../SearchBar/SearchBar';
import NavUser from '../NavUser/NavUser';

import classes from './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.DesktopOnly} >
                <div className={classes.LeftSide}>
                    <Logo />
                    <NavigationItems />
                </div>
                <div className={classes.RightSide}>
                    <SearchBar />
                    <NavUser />
                </div>
            </div>
            <div className={classes.MobileOnly} >
                <button onClick={props.opened}>
                    <i className="fas fa-bars"></i>
                </button>
                <Logo />
            </div>
        </div>
    );
};

export default NavigationBar;