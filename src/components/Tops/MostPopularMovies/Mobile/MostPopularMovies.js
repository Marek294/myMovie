import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../../../hoc/Image/Image';
import noPoster from '../../../../assets/no_poster.jpg';
import classes from '../../MobileSection.css';

const MostPopularMovies = (props) => {
  const mostPopular = props.mostPopularMovies.map((item,i) => { 
    return (
      <Link key={i} to={"/movie/" + item.id} className={classes.Item} >
          <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow />
          <p>{item.title}</p>
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