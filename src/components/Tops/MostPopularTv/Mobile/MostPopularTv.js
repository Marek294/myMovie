import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../../MobileSection.css';

const MostPopularTv = (props) => {
    const mostPopular = props.mostPopularTv.map((item,i) => { 
      return (
        <Link key={i} to={"/tv/" + item.id} >
            <div className={classes.Item} >
            <img src={['https://image.tmdb.org/t/p/w200',item.poster_path].join('')} alt="" />
            <div className={classes.Description}>
                <p>{item.name}</p>
            </div>
            </div>
        </Link>
      )
    });

    return (
        <div className={classes.Container}>
            {mostPopular}
        </div>
    );
};

export default MostPopularTv;