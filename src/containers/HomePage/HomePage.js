import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <ReactAux>
                    <div className={classes.DesktopOnly} >
                        <Desktop />
                    </div>
                    <div className={classes.MobileOnly}>
                        <Mobile />
                    </div>
                </ReactAux>
            </div>
        );
    }
}

export default HomePage;