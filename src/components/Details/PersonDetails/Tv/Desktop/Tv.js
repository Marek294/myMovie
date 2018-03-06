import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ReactAux from '../../../../../hoc/ReactAux';
import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Tv.css';

const Tv = (props) => {
    let tv_cast = _.uniqBy(props.tv_credits.cast, 'id')

    tv_cast = tv_cast.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} className={classes.Item}>
                <div className={classes.ImageContainer}>
                    <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                </div>
                <div className={classes.Overlay}>
                    <div className={classes.Description}>
                        <h2>{item.original_name}</h2>
                        <h1>{item.name}</h1>
                        {item.character && <p>jako {item.character}</p>}
                    </div>
                </div>
            </Link>
        )
    })

    let tv_crew = _.uniqBy(props.tv_credits.crew, 'id')

    tv_crew = tv_crew.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} className={classes.Item}>
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
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
            {tv_cast.length > 0 && 
                <ReactAux>
                    <h1>Aktor</h1>
                    <div className={classes.PersonContainer}>
                        {tv_cast}
                    </div>
                </ReactAux>
            }
            {tv_crew.length > 0 && 
                <ReactAux>
                    <h1>Załoga</h1>
                    <div className={classes.PersonContainer}>
                        {tv_crew}
                    </div>
                </ReactAux>
            }
        </div>
    );
};

export default Tv;