import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import validator from 'validator';
import Spinner from '../../components/Loader/Spinner';

import { resetPassword } from '../../actions/Auth';
import classes from './ResetPassword.css';

class ResetPassword extends Component {
    state = {
        data: {
            password: '',
            confirmPassword: ''
        },
        status: '',
        errors: {},
        loading: false
    }

    onChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
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
        const { token } = this.props.match.params;

        data.token = token;

        this.setState({
            loading: true
        })

        const errors = this.validateLogin(data);
        if(Object.keys(errors).length > 0) this.setState({ errors, loading: false });
        else {
            this.props.resetPassword(data)
                .then(data => {
                    const { status } = data;

                    this.setState({
                        status,
                        loading: false
                    })
                })
                .catch(err => {
                    const { errors } = err.response.data;
                    const errorsResponse = {};

                    if(errors.password) errorsResponse.password = errors.password.msg;
                    if(errors.confirmPassword) errorsResponse.confirmPassword = errors.confirmPassword.msg;
                    if(errors.global) errorsResponse.global = errors.global;

                    this.setState({
                        errors: errorsResponse,
                        loading: false
                    })
                })
        }
    }

    validateLogin = (data) => {
        const errors = {};

        if(data.password.length < 5) errors.password = "Hasło musi się składać z conajmniej 5 znaków";
        if(validator.isEmpty(data.password)) errors.password = "Podaj hasło";
        if(data.password !== data.confirmPassword) errors.confirmPassword = "Hasła muszą sie powtarzać"

        return errors;
    }

    render() {
        const { data, errors, loading, status } = this.state;
        const { password, confirmPassword } = data;

        return (
            <div className={classes.Container} >
                <div className={classes.ResetPassword} >
                    { status ? 
                        <React.Fragment>
                            <h2>{status}</h2>
                            <p className={classes.Instruction}>Teraz możesz się zalogować korzystając z nowego hasła.</p>
                            <div className={classes.Buttons}>
                                <Link to='/'>Strona logowania</Link>
                            </div>
                        </React.Fragment> :
                        <form onSubmit={this.onSubmit} noValidate>
                            <div>
                                <label htmlFor='password'>Hasło</label>
                                <input className={classnames(errors.password && classes.Error)} type='password' name='password' id='password' value={password} onChange={this.onChange}/>
                                <p className={classnames(errors.password ? classes.errorMessage : classes.noErrorMessage)}>{errors.password}</p>
                            </div>
                            <div>
                                <label htmlFor='confirmPassword'>Potwierdź hasło</label>
                                <input className={classnames(errors.confirmPassword && classes.Error)} type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={this.onChange}/>
                                <p className={classnames(errors.confirmPassword ? classes.errorMessage : classes.noErrorMessage)}>{errors.confirmPassword}</p>
                            </div>
                            <p className={classnames(errors.global ? [classes.errorMessage, classes.global].join(' ') : classes.noErrorMessage)}>{errors.global}</p>
                            { loading ? <Spinner size='30' /> : <button type='submit'>Zmień hasło</button> }
                        </form>
                    }
                </div>
            </div>
        );
    }
}

export default connect(null, { resetPassword })(ResetPassword);