import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Recommendation.css';

const Recommendation = (props) => {
    const recommendations = props.recommendations.results.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} >
                <div className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                    </div>
                    <div className={classes.Overlay}>
                        <div className={classes.Description}>
                            <p>{item.name}</p>
                        </div>
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