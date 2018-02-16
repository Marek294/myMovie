import React, { Component } from 'react';
import Carousel from '../../hoc/MobileCarousel/MobileCarousel';

import classes from './MobileSectionNavBar.css';

class MobileSectionNavBar extends Component {
    render() {
        const data = this.props.children.map((item,i) => {
            return (
                <div key={i} className={classes.Div}>
                    {item}
                </div>
            )
        })

        return (
            <div className={classes.MobileNav}>
                <Carousel activeHandler={this.props.activeHandler} active={this.props.active} >
                    <div className={classes.Dummy}></div>
                    {data}
                    <div className={classes.Dummy}></div>
                </Carousel>
            </div>
        );
    }
}

export default MobileSectionNavBar;