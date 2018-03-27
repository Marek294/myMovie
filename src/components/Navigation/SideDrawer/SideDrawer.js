import React from 'react';
import NavUser from '../NavUser/NavUser';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux';

import classes from './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <ReactAux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.User}>
                    <NavUser />
                    <p>{props.email}</p>
                </div>
                <div className={classes.border} />
                <div className={classes.NavigationItems} >
                    <NavigationItems sideDrawer logout={props.logout} />
                </div>
            </div>
        </ReactAux>
    );
};

export default SideDrawer;