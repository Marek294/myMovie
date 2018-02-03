import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactAux from '../../hoc/ReactAux';
import News from '../../components/News/News';
import TopRatedTv from '../../components/Tops/TopRatedTv/TopRatedTv';
import MostPopularTv from '../../components/Tops/MostPopularTv/MostPopularTv';
import TopRatedMovies from '../../components/Tops/TopRatedMovies/TopRatedMovies';
import MostPopularMovies from '../../components/Tops/MostPopularMovies/MostPopularMovies';
import Loader from '../../components/Loader/Loader';

import { getOnTheAir, getTopRatedTV, getMostPopularTV } from '../../actions/Tv';
import { getNowPlaying, getTopRatedMovies, getMostPopularMovies } from '../../actions/Movie';

class HomePage extends Component {
    state = {
        loading: true,
        news: [],
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

        const p1 = this.props.getOnTheAir();
        const p2 = this.props.getNowPlaying();

        const p3 = this.props.getTopRatedTV();
        const p4 = this.props.getMostPopularTV();

        const p5 = this.props.getTopRatedMovies();
        const p6 = this.props.getMostPopularMovies();

        Promise.all([p1, p2, p3, p4, p5, p6]).then(results => {
            let news = [];
            for(let i=0; i < results[0].length/5+1; i++) {
                if(results[0][i]) news.push(results[0][i]);
                if(results[1][i]) news.push(results[1][i]);
            }

            this.setState({
                news,
                loading: false,
                topRatedTV: results[2],
                mostPopularTv: results[3],
                topRatedMovies: results[4],
                mostPopularMovies: results[5]
            })
        })
      }

    render() {
        return (
            this.state.loading ? <Loader /> :
            <ReactAux>
                <News news={this.state.news}/>
                <TopRatedTv topRated={this.state.topRatedTV} />
                <MostPopularTv mostPopular={this.state.mostPopularTv} />
                <TopRatedMovies topRated={this.state.topRatedMovies} />
                <MostPopularMovies mostPopular={this.state.mostPopularMovies}/>
            </ReactAux>
        );
    }
}

export default connect(null, { getOnTheAir, getNowPlaying, getTopRatedTV, getMostPopularTV, getTopRatedMovies, getMostPopularMovies })(HomePage);