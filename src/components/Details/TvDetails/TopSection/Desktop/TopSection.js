import React from 'react';

import classes from './TopSection.css';

const TopSection = (props) => {
    return (
        <div className={classes.TopSection}>
            <div className={classes.Background}>
                <img src={['https://image.tmdb.org/t/p/original',props.backdrop_path].join('')} alt="" />
                <div className={classes.Overlay}/>
            </div>
            <div className={classes.Details}>
                <img src={['https://image.tmdb.org/t/p/original',props.poster_path].join('')} alt="" />
                <div className={classes.Info}>
                    <div className={classes.VoteAverage}>
                        <h1>{props.vote_average}</h1>
                        <i className="fas fa-star"></i>
                    </div>
                    <h2>{props.original_name}</h2>
                    <h1>{props.name}</h1>
                    <p>{props.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default TopSection;