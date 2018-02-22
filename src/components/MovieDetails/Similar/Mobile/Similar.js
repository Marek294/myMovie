import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Image';

import noPoster from '../../../../assets/no_poster.jpg';
import classes from './Similar.css';

const Similar = (props) => {
    const { movie } = props;

    const similar = movie.similar.results.map((item,i) => {
        return (
            <Link key={i} to={"/movie/" + item.id} >
                <div className={classes.Item}>
                    <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                    <div className={classes.Description}>
                        <p>{item.title}</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
            {similar}
        </div>
    );
};

export default Similar;