import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieDetails } from '../../../actions/Movie';

class MovieDetails extends Component {
    state = {
        movie: null
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
                    <img src={['https://image.tmdb.org/t/p/original',movie.backdrop_path].join('')} alt="" />
                </div>
        );
    }
}

export default connect(null, { getMovieDetails })(MovieDetails);