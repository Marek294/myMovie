import React from 'react';

import classes from './Spinner.css';

const Spinner = (props) => {
    const styles = {
        width: [props.size,'px'].join(''),
        height: [props.size,'px'].join(''),
    }
    return (
        <div className={classes.loader} style={styles}> </div>
    );
};

export default Spinner;