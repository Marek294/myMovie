import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Similar.css';
import section from '../../../MobileSection.css';

const Similar = (props) => {
    const { tv } = props;

    const similar = tv.similar.results.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} className={section.Item} >
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow />
                <p>{item.name}</p>
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
            {similar.length > 0 ? similar : <h1>Brak pozycji</h1>}
        </div>
    );
};

export default Similar;