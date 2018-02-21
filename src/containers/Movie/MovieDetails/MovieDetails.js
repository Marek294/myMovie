import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

import classes from './MovieDetails.css';

import { getMovieDetails } from '../../../actions/Movie';

class MovieDetails extends Component {
    state = {
        movie: null
    }

    componentWillReceiveProps(nextProps) {
        window.location.reload();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getMovieDetails(id)
            .then(movie => this.setState({ movie }))
    }

    render() {
        const { movie } = this.state;
        return (
            movie &&
                <div>
                    <div className={classes.DesktopOnly}>
                        <Desktop movie={movie} />
                    </div>
                    {/* <div className={classes.MobileOnly}>
                        <Mobile movie={movie} />
                    </div> */}
                </div>
        );
    }
}

export default connect(null, { getMovieDetails })(MovieDetails);