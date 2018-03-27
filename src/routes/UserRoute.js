import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UserRoute = ({ isAuthenticated, isConfirmed, location, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => isAuthenticated ? !isConfirmed && location.pathname!=='/confirm' ? <Redirect to='/confirm' /> : <Component {...props} /> : <Redirect to="/" />} />
    );
};

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
        isConfirmed: !!state.user.confirmed
    }
};

export default connect(mapStateToProps)(UserRoute);