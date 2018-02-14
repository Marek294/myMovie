import React, { Component } from 'react';

import classes from './HomeTop.css';

class HomeTop extends Component {
    render() {
        const { Upcoming } = this.props;
        const item = Upcoming[0];
        return (
            <div className={classes.HomeTop}>
                <img src={['https://image.tmdb.org/t/p/original/',item.backdrop_path].join('')} alt="" />
            </div>
        );
    }
}

export default HomeTop;