import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ReactAux from '../../hoc/ReactAux';
import HomeTop from '../../components/HomeTop/HomeTop';
import TopRatedTv from '../../components/Tops/TopRatedTv/TopRatedTv';
import MostPopularTv from '../../components/Tops/MostPopularTv/MostPopularTv';
import TopRatedMovies from '../../components/Tops/TopRatedMovies/TopRatedMovies';
import MostPopularMovies from '../../components/Tops/MostPopularMovies/MostPopularMovies';
import Loader from '../../components/Loader/Loader';
import MobileHomeNavBar from '../../components/MobileHomeNavBar/MobileHomeNavBar';

import { getTopRatedTV, getMostPopularTV } from '../../actions/Tv';
import { getUpcoming, getTopRatedMovies, getMostPopularMovies } from '../../actions/Movie';

class HomePage extends Component {
    state = {
        loading: true,
        nowPlaying: [],
        newsLoaded: 0,
        topRatedTV: [],
        mostPopularTv: [],
        topRatedMovies: [],
        mostPopularMovies: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        const p1 = this.props.getUpcoming(moment().subtract(1, 'months'));

        const p2 = this.props.getTopRatedTV();
        const p3 = this.props.getMostPopularTV();

        const p4 = this.props.getTopRatedMovies();
        const p5 = this.props.getMostPopularMovies();

        Promise.all([p1, p2, p3, p4, p5]).then(results => {
            this.setState({
                loading: false,
                Upcoming: results[0],
                topRatedTV: results[1],
                mostPopularTv: results[2],
                topRatedMovies: results[3],
                mostPopularMovies: results[4]
            })
        })
      }

    render() {
        return (
            this.state.loading ? <Loader /> :
            <ReactAux>
                <HomeTop Upcoming={this.state.Upcoming}/>
                <MobileHomeNavBar />
                <TopRatedTv topRated={this.state.topRatedTV} />
                <MostPopularTv mostPopular={this.state.mostPopularTv} />
                <TopRatedMovies topRated={this.state.topRatedMovies} />
                <MostPopularMovies mostPopular={this.state.mostPopularMovies}/>
            </ReactAux>
        );
    }
}

export default connect(null, { getUpcoming, getTopRatedTV, getMostPopularTV, getTopRatedMovies, getMostPopularMovies })(HomePage);