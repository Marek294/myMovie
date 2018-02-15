import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../../MobileSection.css';

const MostPopularMovies = (props) => {
  const mostPopular = props.mostPopularMovies.map((item,i) => { 
    return (
      <Link key={i} to={"/movie/" + item.id} >
        <div className={classes.Item} >
          <img src={['https://image.tmdb.org/t/p/w200',item.poster_path].join('')} alt="" />
          <div className={classes.Description}>
              <p>{item.title}</p>
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

export default MostPopularMovies;