import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';

import HomePage from './containers/HomePage/HomePage';
import MovieDetails from './containers/Movie/MovieDetails/MovieDetails';
import TvDetails from './containers/Tv/TvDetails/TvDetails';
import PersonDetails from './containers/Person/PersonDetails';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movie/:id" exact component={MovieDetails} />
            <Route path="/tv/:id" exact component={TvDetails} />
            <Route path="/person/:id" exact component={PersonDetails} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
