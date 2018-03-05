import React from 'react';

import classes from './TopSection.css';

const TopSection = (props) => {
    return (
        <div className={classes.TopSection}>
            <img src={['https://image.tmdb.org/t/p/original',props.backdrop_path].join('')} alt="" />
        </div>
    );
};

export default TopSection;