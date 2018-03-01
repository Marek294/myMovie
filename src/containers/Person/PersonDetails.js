import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

import classes from './PersonDetails.css';

import { getPersonDetails } from '../../actions/Person';

class PersonDetails extends Component {
    state = {
        person: null
    }

    componentWillReceiveProps(nextProps) {
        window.location.reload();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPersonDetails(id)
            .then(person => this.setState({ person }))
    }

    render() {
        const { person } = this.state;
        return (
            person &&
                <div>
                    <div className={classes.DesktopOnly}>
                        <Desktop person={person} />
                    </div>
                    <div className={classes.MobileOnly}>
                        <Mobile person={person} />
                    </div>
                </div>
        );
    }
}

export default connect(null, { getPersonDetails })(PersonDetails);