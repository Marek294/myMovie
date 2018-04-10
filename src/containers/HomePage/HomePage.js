import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

import classes from './HomePage.css';

class HomePage extends Component {
    state = {
        isLogin: true
    }

    showSignup = () => {
        this.setState({
            isLogin: false
        })
    }

    showLogin = () => {
        this.setState({
            isLogin: true
        })
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div>
                <ReactAux>
                    <div className={classes.DesktopOnly} >
                        <Desktop isLogin={isLogin} showSignup={this.showSignup} showLogin={this.showLogin} />
                    </div>
                    <div className={classes.MobileOnly}>
                        <Mobile isLogin={isLogin} showSignup={this.showSignup} showLogin={this.showLogin} />
                    </div>
                </ReactAux>
            </div>
        );
    }
}

export default HomePage;