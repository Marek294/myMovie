import React from 'react';
import ReactAux from '../../../hoc/ReactAux';
import { connect } from 'react-redux';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from '../SearchBar/SearchBar';
import NavUser from '../NavUser/NavUser';

import classes from './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className={classes.NavBar}>
            {props.isAuthenticated ? 
                <ReactAux>
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
                </ReactAux> :
                <div className={classes.LogoOnMiddle}>
                    <Logo />
                </div>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, null)(NavigationBar);