import React, { Component } from 'react';
import Carousel from '../../hoc/MobileCarousel/MobileCarousel';

import classes from './MobileHomeNavBar.css';

class MobileHomeNavBar extends Component {
    render() {
        return (
            <div className={classes.MobileNav}>
                <Carousel activeHandler={this.props.activeHandler} active={this.props.active} >
                    <div className={classes.Dummy}></div>
                    <div className={classes.Div}>
                        <p>Popularne</p>
                        <p>seriale</p>
                    </div>
                    <div className={classes.Div}>
                        <p>Najwyżej oceniane</p>
                        <p>seriale</p>
                    </div>
                    <div className={classes.Div}>
                        <p>Popularne</p>
                        <p>filmy</p>
                    </div>
                    <div className={classes.Div}>
                        <p>Najwyżej oceniane</p>
                        <p>filmy</p>
                    </div>
                    <div className={classes.Dummy}></div>
                </Carousel>
            </div>
        );
    }
}

export default MobileHomeNavBar;