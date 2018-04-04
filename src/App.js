import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';

import HomePage from './containers/HomePage/HomePage';
import Browse from './containers/Browse/Browse';
import MovieDetails from './containers/Movie/MovieDetails/MovieDetails';
import TvDetails from './containers/Tv/TvDetails/TvDetails';
import PersonDetails from './containers/Person/PersonDetails';
import ConfirmEmailMessage from './containers/ConfirmEmailMessage/ConfirmEmailMessage';
import Confirmation from './containers/Confirmation/Confirmation';
import ResetPasswordRequest from './containers/ResetPasswordRequest/ResetPasswordRequest';
import ResetPassword from './containers/ResetPassword/ResetPassword';

import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';

import './colors.css';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <GuestRoute path="/" exact component={HomePage} />
            <Route path="/confirmation/:confirmationToken" exact component={Confirmation} />
            <GuestRoute path="/forgotPassword" exact component={ResetPasswordRequest} />
            <GuestRoute path="/resetPassword/:token" exact component={ResetPassword} />
            <UserRoute path="/confirm" exact component={ConfirmEmailMessage} />
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
