import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Loader/Spinner';

import { confirmEmail } from '../../actions/Auth';

import classes from './Confirmation.css';

class Confirmation extends Component {
    state = {
        loading: true,
        errors: {},
        status: ''
    }

    componentDidMount() {
        const { confirmationToken } = this.props.match.params;

        this.props.confirmEmail(confirmationToken)
            .then(data => {
                const { status } = data;

                this.setState({
                    status,
                    loading: false,
                    errors: {}
                })
            })
            .catch(err => {
                const { errors } = err.response.data;

                this.setState({ errors, loading: false, status: '' });
            })
    }

    render() {
        const { loading, errors, status } = this.state;

        return (
            <div className={classes.Container}>
                <div className={classes.Confirmation}>
                    { loading ? 
                        <React.Fragment>
                            <Spinner size='100' />
                            <h1>Trwa weryfikacja...</h1>
                        </React.Fragment> : 
                        <React.Fragment>
                            <h1>{status && status}</h1>
                            <h1>{errors.confirmationToken && errors.confirmationToken.msg}</h1> 
                            <h1>{errors.global && errors.global}</h1>
                            <div className={classes.Buttons}>
                                <Link to='/'>Strona logowania</Link>
                            </div>
                        </React.Fragment>}
                </div>
            </div>
        );
    }
}

export default connect(null, { confirmEmail })(Confirmation);