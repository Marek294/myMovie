import React from 'react';

import Image from '../../../../../hoc/Image/Image';
import ReactAux from '../../../../../hoc/ReactAux';
import noPoster from '../../../../../assets/no_poster.jpg';

import classes from './About.css';
import section from '../../../MobileSection.css';

const About = (props) => {
    const { movie } = props;

    return (
        <div className={[classes.About,section.Container].join(' ')}>
            <div>
                <Image src={['https://image.tmdb.org/t/p/w200/',movie.poster_path].join('')} default={noPoster} alt="" shadow />
                <div className={classes.Info}>
                    <div className={classes.VoteAverage}>
                        <h1>{movie.vote_average}</h1>
                        <i className="fas fa-star"></i>
                    </div>
                    <h2>{movie.original_title}</h2>
                    <h1 className={classes.title}>{movie.title}</h1>
                </div>
            </div>
            {movie.overview && 
                <ReactAux>
                    <h1>Opis filmu</h1>
                    <p>{movie.overview}</p> 
                </ReactAux>
            }
        </div>
    );
};

export default About;