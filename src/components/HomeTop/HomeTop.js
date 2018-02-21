import React, { Component } from 'react';

import classes from './HomeTop.css';

class HomeTop extends Component {
    render() {
        const { Upcoming } = this.props;
        const item = Upcoming[0];

        console.log(item);
        return (
            <div className={classes.HomeTop}>
                <div className={classes.Content}>
                    <h3>{item.original_title}</h3>
                    <h2>{item.title}</h2>
                    <h1>Już w kinach!</h1>
                </div>
                <img src={['https://image.tmdb.org/t/p/original/',item.backdrop_path].join('')} alt="" />
            </div>
        );
    }
}

export default HomeTop;