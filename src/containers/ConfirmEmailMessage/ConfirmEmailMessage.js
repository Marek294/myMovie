import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, sendConfirmationEmail } from '../../actions/Auth';
import Spinner from '../../components/Loader/Spinner';

import classes from './ConfirmEmailMessage.css';

class ConfirmEmail extends Component {
    state = {
        status: '',
        errors: {},
        loading: false
    }

    logout = () => {
        this.props.logout();
    }

    sendConfirmationEmail = () => {
        this.setState({
            loading: true
        })

        this.props.sendConfirmationEmail().then(data => {
            this.setState({
                status: data.status,
                errors: {},
                loading: false
            })
        })
        .catch(err => {
            const { errors } = err.response.data;
            console.log(err);

            this.setState({
                status: '',
                errors,
                loading: false
            })
        })
    }

    render() {
        const { status, errors, loading } = this.state;
        return (
            <div className={classes.Container} >
                <div className={classes.ConfirmEmail}>
                    <h1>Konto nie jest aktywne. Zatwierdź email, który wysłaliśmy na twoją skrzynkę pocztową.</h1>
                    <div className={classes.Buttons}>
                        <button onClick={this.sendConfirmationEmail}>Wyślij email potwierdzający</button>
                        <button onClick={this.logout}>Wyloguj</button>
                    </div>
                    <div className={classes.ErrorAndLoaderContainer} > 
                        {loading ? <Spinner size='30' /> :
                            status ? <p>{status}</p> :
                            errors.global && <p>{errors.global}</p> }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null,{ logout, sendConfirmationEmail })(ConfirmEmail);