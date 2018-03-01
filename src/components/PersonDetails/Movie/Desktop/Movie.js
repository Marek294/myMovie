import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ReactAux from '../../../../hoc/ReactAux';
import Image from '../../../../hoc/Image';

import noPoster from '../../../../assets/no_poster.jpg';
import classes from './Movie.css';

const Movie = (props) => {
    let movie_cast = _.uniqBy(props.movie_credits.cast, 'id')

    movie_cast = movie_cast.map((item,i) => {
        return (
            <Link key={i} to={"/movie/" + item.id} >
                <div className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                    </div>
                    <div className={classes.Overlay}>
                        <div className={classes.Description}>
                            <h2>{item.original_title}</h2>
                            <h1>{item.title}</h1>
                            {item.character && <p>jako {item.character}</p>}
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    let movie_crew = _.uniqBy(props.movie_credits.crew, 'id')

    movie_crew = movie_crew.map((item,i) => {
        return (
            <Link key={i} to={"/movie/" + item.id} >
                <div className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                    </div>
                    <div className={classes.Overlay}>
                        <div className={classes.Description}>
                            <h2>{item.original_name}</h2>
                            <h1>{item.name}</h1>
                            <p>{item.job}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
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
        </div>
    );
};

export default Movie;