import React, { Component } from 'react';
import Carousel from '../../hoc/MobileCarousel/MobileCarousel';

import classes from './MobileHomeNavBar.css';

class MobileHomeNavBar extends Component {
    clickHandler(number) {
        console.log(number);
    }

    render() {
        return (
            <div className={classes.MobileNav}>
                <Carousel>
                    <div className={classes.Dummy}></div>
                    <div className={classes.Div} onClick={() => this.clickHandler(1)}>
                        <p>Popularne</p>
                        <p>seriale</p>
                    </div>
                    <div className={classes.Div} onClick={() => this.clickHandler(2)}>
                        <p>Najwyżej oceniane</p>
                        <p>seriale</p>
                    </div>
                    <div className={classes.Div} onClick={() => this.clickHandler(3)}>
                        <p>Popularne</p>
                        <p>filmy</p>
                    </div>
                    <div className={classes.Div} onClick={() => this.clickHandler(4)}>
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