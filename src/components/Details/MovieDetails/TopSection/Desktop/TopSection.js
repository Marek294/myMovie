import React from 'react';

import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './TopSection.css';

const TopSection = (props) => {
    return (
        <div className={classes.TopSection}>
            <div className={classes.Background}>
                <img src={['https://image.tmdb.org/t/p/original',props.backdrop_path].join('')} alt="" />
                <div className={classes.Overlay}/>
            </div>
            <div className={classes.Details}>
                <Image src={['https://image.tmdb.org/t/p/original/',props.poster_path].join('')} default={noPoster} alt="" shadow/>
                <div className={classes.Info}>
                    <div className={classes.VoteAverage}>
                        <h1>{props.vote_average}</h1>
                        <i className="fas fa-star"></i>
                    </div>
                    <h2>{props.original_title}</h2>
                    <h1>{props.title}</h1>
                    <p>{props.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default TopSection;