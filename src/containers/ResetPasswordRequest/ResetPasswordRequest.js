import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import validator from 'validator';
import Spinner from '../../components/Loader/Spinner';
import { resetPasswordRequest } from '../../actions/Auth';

import classes from './ResetPasswordRequest.css';

class ResetPasswordRequest extends Component {
    state = {
        data: {
            email: ''
        },
        status: '',
        errors: {},
        loading: false
    }

    onChange = (e) => {
        this.setState({
            data: {
                [e.target.name]: e.target.value,
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: '',
                global: ''
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;

        this.setState({
            loading: true
        })

        const errors = this.validateLogin(data);
        if(Object.keys(errors).length > 0) this.setState({ errors, loading: false });
        else {
            this.props.resetPasswordRequest(data)
                .then(data => {
                    const { status } = data;

                    this.setState({
                        status,
                        loading: false
                    })
                })
                .catch(err => {
                    const { errors } = err.response.data;
                    this.setState({
                        errors: {
                            global: errors.global,
                        },
                        loading: false
                    })
                })
        }
    }

    validateLogin = (data) => {
        const errors = {};

        if(!validator.isEmail(data.email)) errors.email = "Wprowadź email";

        return errors;
    }

    render() {
        const { data, errors, loading, status } = this.state;
        const { email } = data;

        return (
            <div className={classes.Container} >
                <div className={classes.ResetPasswordRequest} >
                    { status ? 
                        <React.Fragment>
                            <h2>{status}</h2>
                            <p className={classes.Instruction}>Postępuj zgodnie z instrukcją, która została wysłana na podany adres email w celu zresetowana hasła</p>
                        </React.Fragment> :
                        <form onSubmit={this.onSubmit} noValidate>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input className={classnames(errors.email && classes.Error)} type='email' name='email' id='email' value={email} onChange={this.onChange} />
                                <p className={classnames(errors.email ? classes.errorMessage : classes.noErrorMessage)}>{errors.email}</p>
                            </div>
                            <p className={classnames(errors.global ? [classes.errorMessage, classes.global].join(' ') : classes.noErrorMessage)}>{errors.global}</p>
                            { loading ? <Spinner size='30' /> : <button type='submit'>Wyślij</button> }
                        </form>
                    }
                </div>
            </div>
        );
    }
}

export default connect(null, { resetPasswordRequest })(ResetPasswordRequest);