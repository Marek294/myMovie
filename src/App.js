import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import News from './containers/News/News';
import TopRatedTv from './containers/Tops/TopRatedTv/TopRatedTv';
import MostPopularTv from './containers/Tops/MostPopularTv/MostPopularTv';
import TopRatedMovies from './containers/Tops/TopRatedMovies/TopRatedMovies';
import MostPopularMovies from './containers/Tops/MostPopularMovies/MostPopularMovies';

class App extends Component {
  render() {
    return (
        <Layout>
          <News />
          <TopRatedTv />
          <MostPopularTv />
          <TopRatedMovies />
          <MostPopularMovies />
        </Layout>
    );
  }
}

export default App;
