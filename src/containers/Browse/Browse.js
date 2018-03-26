import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ReactAux from '../../hoc/ReactAux';
// import HomeTop from '../../components/HomeTop/HomeTop';
// import TopRatedTv from '../../components/Tops/TopRatedTv/TopRatedTv';
// import MostPopularTv from '../../components/Tops/MostPopularTv/MostPopularTv';
// import TopRatedMovies from '../../components/Tops/TopRatedMovies/TopRatedMovies';
// import MostPopularMovies from '../../components/Tops/MostPopularMovies/MostPopularMovies';
import Loader from '../../components/Loader/Loader';
// import MobileHomeNavBar from '../../components/MobileHomeNavBar/MobileHomeNavBar';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

import { getTopRatedTV, getMostPopularTV } from '../../actions/Tv';
import { getUpcoming, getTopRatedMovies, getMostPopularMovies } from '../../actions/Movie';

import classes from './Browse.css';

class Browse extends Component {
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
                <div className={classes.DesktopOnly} >
                    <Desktop 
                        Upcoming={this.state.Upcoming}
                        topRatedTv={this.state.topRatedTV}
                        topRatedMovies={this.state.topRatedMovies}
                        mostPopularMovies={this.state.mostPopularMovies}
                        mostPopularTv={this.state.mostPopularTv}
                    />
                </div>
                <div className={classes.MobileOnly}>
                    <Mobile 
                        Upcoming={this.state.Upcoming}
                        topRatedTv={this.state.topRatedTV}
                        topRatedMovies={this.state.topRatedMovies}
                        mostPopularMovies={this.state.mostPopularMovies}
                        mostPopularTv={this.state.mostPopularTv}
                    />
                </div>
            </ReactAux>
        );
    }
}

export default connect(null, { getUpcoming, getTopRatedTV, getMostPopularTV, getTopRatedMovies, getMostPopularMovies })(Browse);