import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import News from './containers/News/News';
import TopRatedTv from './containers/TopRatedTv/TopRatedTv';

class App extends Component {
  render() {
    return (
        <Layout>
          <News />
          <TopRatedTv />
        </Layout>
    );
  }
}

export default App;
