import React from 'react';
import Carousel from '../../hoc/Carousel/Carousel';
import Slider from 'react-slick';

import classes from './News.css';

const News = (props) => {
  const news = props.news.map((item,i) => {
    let type;
    let original_name;
    let name;

    const isTV = !!item.original_name;

    if(isTV) {
      type = "Seriale";
      original_name = item.original_name;
      name = item.name;
    } else {
      type = "W kinach";
      original_name = item.original_title;
      name = item.title;
    }


    return (
      <div key={i} className={classes.News} >
        <div className={classes.Content}>
            <h3>{type}</h3>
            <h2>{original_name}</h2>
            <h1>{name}</h1>
            <button className={classes.Button}>{isTV ? 'Strona serialu' : 'Strona filmu'}</button>
        </div>
        <img src={['https://image.tmdb.org/t/p/original',item.backdrop_path].join('')} alt="" />
      </div>
    )
  });

  //React slick playground

  // var settings = {
  //   dots: true,
  //   draggable: false,
  //   autoplay: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    // <Slider {...settings}>
    //   {news}
    // </Slider>
    <Carousel>
      {news}
    </Carousel>
  );
};

export default News;