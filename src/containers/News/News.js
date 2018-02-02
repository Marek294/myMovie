import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from '../../hoc/Carousel/Carousel';
import { getNews } from '../../actions/Tv';

import classes from './News.css';

class News extends Component {
    state = {
        news: []
    }

    componentDidMount() {
      this.props.getNews()
        .then(results => {
          this.setState({
            news: results
          })
        })
    }

    render() {
        const news = this.state.news.map((item,i) => {
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

        return (
          <Carousel>
            {news}
          </Carousel>
        );
    }
}

export default connect(null, { getNews })(News);