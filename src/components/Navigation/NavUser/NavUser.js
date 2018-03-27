import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../../Backdrop/Backdrop';

import user from '../../../assets/user.jpg';
import classes from './NavUser.css';


class NavUser extends Component {
    state={
        showMenu: false
    }

    onClick = (e) => {
        this.setState({
            showMenu: true
        })
    }

    closeMenu = () => {
        this.setState({
            showMenu: false
        })
    }

    render() {
        const { showMenu } = this.state;
        
        let menuStyle = {
            display: 'none'
        }

        if(showMenu) {     
            menuStyle = {
                display: 'initial',
                transform: 'translate(-100px,'+(this.refs.user.offsetHeight+10)+'px)',
                width: this.refs.user.offsetWidth+100
            }
        }

        return (
            <div className={classes.User}>
                <div ref='user' className={classes.Icon} onClick={this.onClick}>
                    <img src={user} alt=""/>
                    <i className="fas fa-caret-down"></i>
                </div>
                <div className={classes.Menu} style={menuStyle} >
                    <h1 className={classes.Email}>{this.props.email}</h1>
                    <Link to="/" className={classes.MenuLink} onClick={this.props.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true" />
                        <p className={classes.MenuText}>Wyloguj</p>
                    </Link> 
                </div>
                <Backdrop show={showMenu} clicked={this.closeMenu}/>
            </div>
        );
    }
}

export default NavUser;