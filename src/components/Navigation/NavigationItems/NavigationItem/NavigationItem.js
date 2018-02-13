import React from 'react';

import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className={[classes.NavItem, props.active === props.name && classes.Active].join(' ')} onClick={props.click}>
            <a>{props.children}</a>
            <div className={classes.border}/>
        </li>
    );
};

export default NavigationItem;