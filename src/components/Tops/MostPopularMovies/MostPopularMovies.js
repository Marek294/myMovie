import React from 'react';
import Carousel from '../../../hoc/PosterCarousel/PosterCarousel';
import cutOverview from '../../../utils/cutOverview';

import classes from '../TopSection.css';

const MostPopularMovies = (props) => {
  const mostPopular = props.mostPopular.map((item,i) => { 
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
        <h1>Najbardziej popularne filmy</h1>
        <div className={classes.Posters}>
            <Carousel>
                {mostPopular}
            </Carousel>
        </div>
    </div>
  );
};

export default MostPopularMovies;