import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import News from './containers/News/News';

class App extends Component {
  render() {
    return (
        <Layout>
          <News />
        </Layout>
    );
  }
}

export default App;
