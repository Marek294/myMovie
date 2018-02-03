import React from 'react';
import Carousel from '../../../hoc/PosterCarousel/PosterCarousel';
import cutOverview from '../../../utils/cutOverview';

import classes from '../TopSection.css';

const TopRatedMovies = (props) => {
  const topRated = props.topRated.map((item,i) => { 
    return (
      <div key={i} className={classes.Item} >
        <div className={classes.Overlay}>
            <div className={classes.Description}>
                <h2>{item.title}</h2>
                <h3>{item.original_title}</h3>
                <p>{cutOverview(item.overview)}</p>
            </div>
        </div>
        <img src={['https://image.tmdb.org/t/p/original',item.poster_path].join('')} alt="" />
      </div>
    )
  });

  return (
    <div className={classes.Container}>
        <h1>Najwyżej oceniane filmy</h1>
        <div className={classes.Posters}>
            <Carousel>
                {topRated}
            </Carousel>
        </div>
    </div>
  );
};

export default TopRatedMovies;