import React from 'react';

import classes from './Slide.css';

const Slide = ({ item }) => {
    return (
        <div className={classes.Slide}>
            {item}
        </div>
    );
};

export default Slide;