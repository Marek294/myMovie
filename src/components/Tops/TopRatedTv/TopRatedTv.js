import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../../hoc/PosterCarousel/PosterCarousel';
import cutOverview from '../../../utils/cutOverview';

import classes from '../TopSection.css';

const TopRatedTv = (props) => {
  const topRated = props.topRated.map((item,i) => { 
    return (
        <Link key={i} to={"/tv/" + item.id} >
            <div key={i} className={classes.Item} >
                <div className={classes.Overlay}>
                    <div className={classes.Description}>
                        <h2>{item.name}</h2>
                        <h3>{item.original_name}</h3>
                        <p>{cutOverview(item.overview)}</p>
                    </div>
                </div>
                <img src={['https://image.tmdb.org/t/p/w200',item.poster_path].join('')} alt="" />
            </div>
        </Link>
    )
  });

return (
    <div className={classes.Container}>
        <h1>Najwyżej oceniane seriale</h1>
        <div className={classes.Posters}>
            <Carousel>
                {topRated}
            </Carousel>
        </div>
    </div>
);
};

export default TopRatedTv;