import React, { Component } from 'react';
import ReactAux from '../../../hoc/ReactAux';
import { connect } from 'react-redux';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from '../SearchBar/SearchBar';
import NavUser from '../NavUser/NavUser';
import SideDrawer from '../SideDrawer/SideDrawer';
import { logout } from '../../../actions/Auth';

import classes from './NavigationBar.css';

class NavigationBar extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerOpenedHandler = () => {
        this.setState({
            showSideDrawer: true
        })
    }

    logout = () => {
        this.sideDrawerClosedHandler();
        this.props.logout();
    }

    render() {
        return (
            <div className={classes.NavBar}>
                {this.props.isAuthenticated && this.props.isConfirmed ? 
                    <ReactAux>
                        <div className={classes.DesktopOnly} >
                            <div className={classes.LeftSide}>
                                <Logo />
                                <NavigationItems />
                            </div>
                            <div className={classes.RightSide}>
                                <SearchBar />
                                <NavUser email={this.props.email} logout={this.logout} />
                            </div>
                        </div>
                        <div className={classes.MobileOnly} >
                            <button onClick={this.sideDrawerOpenedHandler}>
                                <i className="fas fa-bars"></i>
                            </button>
                            <SideDrawer 
                                open={this.state.showSideDrawer} 
                                closed={this.sideDrawerClosedHandler}
                                email={this.props.email}
                                logout={this.logout}
                            />
                            <Logo />
                        </div>
                    </ReactAux> :
                    <div className={classes.LogoOnMiddle}>
                        <Logo />
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
        isConfirmed: state.user.confirmed,
        email: state.user.email
    }
}

export default connect(mapStateToProps, { logout })(NavigationBar);