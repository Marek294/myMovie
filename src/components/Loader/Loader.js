import React from 'react';

import classes from './Loader.css';

const Loader = () => {
    return (
        <div className={classes.Loader}>
            <div className={classes.skCubeGrid}>
                <div className={[classes.skCube, classes.skCube1].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube2].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube3].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube4].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube5].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube6].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube7].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube8].join(' ')}></div>
                <div className={[classes.skCube, classes.skCube9].join(' ')}></div>
            </div>
        </div>
    );
};

export default Loader;