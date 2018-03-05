import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Recommendation.css';
import section from '../../../MobileSection.css';

const Recommendation = (props) => {
    const { tv } = props;

    const recommendations = tv.recommendations.results.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} className={section.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow />
                <p>{item.name}</p>
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
            {recommendations.length > 0 ? recommendations : <h1>Brak pozycji</h1> }
        </div>
    );
};

export default Recommendation;