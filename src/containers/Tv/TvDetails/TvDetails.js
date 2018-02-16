import React, { Component } from 'react';
import { connect } from 'react-redux';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

import classes from './TvDetails.css';

import { getTvDetails } from '../../../actions/Tv';

class MovieDetails extends Component {
    state = {
        tv: null
    }

    componentWillReceiveProps(nextProps) {
        window.location.reload();
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
                    <div className={classes.DesktopOnly}>
                        <Desktop tv={tv} />
                    </div>
                    <div className={classes.MobileOnly}>
                        <Mobile tv={tv} />
                    </div>
                </div>
        );
    }
}

export default connect(null, { getTvDetails })(MovieDetails);