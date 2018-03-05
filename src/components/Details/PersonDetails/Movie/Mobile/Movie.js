import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ReactAux from '../../../../../hoc/ReactAux';
import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Movie.css';
import section from '../../../MobileSection.css';

const Movie = (props) => {
    let movie_cast = _.uniqBy(props.movie_credits.cast, 'id')

    movie_cast = movie_cast.map((item,i) => {
        return (
            <Link key={i} to={"/movie/" + item.id} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow />
                <p>{item.title}</p>
                {item.character && <p className={classes.Character}>jako {item.character}</p>}
            </Link>
        )
    })

    let movie_crew = _.uniqBy(props.movie_credits.crew, 'id')

    movie_crew = movie_crew.map((item,i) => {
        return (
            <Link key={i} to={"/movie/" + item.id} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow />
                <p>{item.title}</p>
                <p>{item.job}</p>
            </Link>
        )
    })

    return (
        <div className={[classes.Movie,section.Container].join(' ')}>
            {movie_cast.length > 0 && 
                <ReactAux>
                    <h1>Aktor</h1>
                    <div className={classes.PersonContainer}>
                        {movie_cast}
                    </div>
                </ReactAux>
            }
            {movie_crew.length > 0 && 
                <ReactAux>
                    <h1>Załoga</h1>
                    <div className={classes.PersonContainer}>
                        {movie_crew}
                    </div>
                </ReactAux>
            }
            {movie_cast.length > 0 || movie_crew.length > 0 ? null : <h1>Brak pozycji</h1>}
        </div>
    );
};

export default Movie;