import React from 'react';

import classes from './Slide.css';

const Slide = ({ item, widthOfSlide }) => {
    return (
        <div className={classes.Slide} style={{width: widthOfSlide}}>
            {item}
        </div>
    );
};

export default Slide;