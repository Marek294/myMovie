import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, sendConfirmationEmail } from '../../actions/Auth';

import classes from './ConfirmEmail.css';

class ConfirmEmail extends Component {
    state = {
        status: '',
        errors: {}
    }

    logout = () => {
        this.props.logout();
    }

    sendConfirmationEmail = () => {
        this.props.sendConfirmationEmail().then(data => {
            this.setState({
                status: data.status,
                errors: {}
            })
        })
        .catch(err => {
            const { errors } = err.response.data;

            this.setState({
                status: '',
                errors
            })
        })
    }

    render() {
        const { status, errors } = this.state;
        return (
            <div className={classes.Container} >
                <div className={classes.ConfirmEmail}>
                    <h1>Konto nie jest aktywne. Zatwierdź email, który wysłaliśmy na twoją skrzynkę pocztową.</h1>
                    <div className={classes.Buttons}>
                        <button onClick={this.sendConfirmationEmail}>Wyślij email potwierdzający</button>
                        <button onClick={this.logout}>Wyloguj</button>
                    </div>
                    {status && <p>{status}</p>}
                    {errors.global && <p>{errors.global}</p>}
                </div>
            </div>
        );
    }
}

export default connect(null,{ logout, sendConfirmationEmail })(ConfirmEmail);