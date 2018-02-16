import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Image';

import noPoster from '../../../../assets/no_poster.jpg';
import classes from './Recommendation.css';

const Recommendation = (props) => {
    const { tv } = props;

    const recommendations = tv.recommendations.results.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} >
                <div className={classes.Item}>
                    <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                    <div className={classes.Description}>
                        <p>{item.name}</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
            {recommendations}
        </div>
    );
};

export default Recommendation;