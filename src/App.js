import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';

import HomePage from './containers/HomePage/HomePage';
import Browse from './containers/Browse/Browse';
import MovieDetails from './containers/Movie/MovieDetails/MovieDetails';
import TvDetails from './containers/Tv/TvDetails/TvDetails';
import PersonDetails from './containers/Person/PersonDetails';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail';

import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';

import './colors.css';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <GuestRoute path="/" exact component={HomePage} />
            <UserRoute path="/confirm" exact component={ConfirmEmail} />
            <UserRoute path="/browse" exact component={Browse} />
            <UserRoute path="/movie/:id" exact component={MovieDetails} />
            <UserRoute path="/tv/:id" exact component={TvDetails} />
            <UserRoute path="/person/:id" exact component={PersonDetails} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
