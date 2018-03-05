import React from 'react';

import Image from '../../../../../hoc/Image/Image';
import ReactAux from '../../../../../hoc/ReactAux';
import noPoster from '../../../../../assets/no_poster.jpg';

import classes from './About.css';
import section from '../../../MobileSection.css';

const About = (props) => {
    const { tv } = props;

    return (
        <div className={[classes.About,section.Container].join(' ')}>
            <div>
                <Image src={['https://image.tmdb.org/t/p/w200/',tv.poster_path].join('')} default={noPoster} alt="" shadow />
                <div className={classes.Info}>
                    <div className={classes.VoteAverage}>
                        <h1>{tv.vote_average}</h1>
                        <i className="fas fa-star"></i>
                    </div>
                    <h2>{tv.original_name}</h2>
                    <h1 className={classes.title}>{tv.name}</h1>
                </div>
            </div>
            {tv.overview && 
                <ReactAux>
                    <h1>Opis serialu</h1>
                    <p>{tv.overview}</p> 
                </ReactAux>
            }
        </div>
    );
};

export default About;