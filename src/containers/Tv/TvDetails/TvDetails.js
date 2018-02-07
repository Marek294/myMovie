import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopSection from '../../../components/TvDetails/TopSection';
import RightSide from '../../../components/TvDetails/RightSide';

import classes from './TvDetails.css';

import { getTvDetails } from '../../../actions/Tv';

class MovieDetails extends Component {
    state = {
        tv: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getTvDetails(id)
            .then(tv => this.setState({ tv }))
    }

    render() {
        const { tv } = this.state;

        return (
            tv &&
                <div>
                    <TopSection 
                        backdrop_path={tv.backdrop_path}
                        poster_path={tv.poster_path}
                        vote_average={tv.vote_average}
                        original_name={tv.original_name}
                        name={tv.name}
                        overview={tv.overview}
                    />
                    <div className={classes.MainSection}>
                        <div className={classes.LeftSide}>
                            <div className={classes.Nav}></div>
                            <div className={classes.Body}></div>
                        </div>
                        <RightSide 
                            origin_country={tv.origin_country} 
                            networks={tv.networks}
                            first_air_date={tv.first_air_date}
                            last_air_date={tv.last_air_date}
                            genres={tv.genres}
                            episode_run_time={tv.episode_run_time}
                            homepage={tv.homepage}
                            keywords={tv.keywords}
                        />
                    </div>
                </div>
        );
    }
}

export default connect(null, { getTvDetails })(MovieDetails);