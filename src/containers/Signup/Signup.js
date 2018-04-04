import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import validator from 'validator';
import Spinner from '../../components/Loader/Spinner';

import { signup } from '../../actions/User';

import classes from './Signup.css';

class Signup extends Component {
    state = {
        data: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
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
        });

        const errors = this.validateLogin(data);
        if(Object.keys(errors).length > 0) this.setState({ errors, loading: false });
        else {
            this.props.signup(data)
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

        if(!validator.isEmail(data.email)) errors.email = "Wprowadź email";
        if(data.password.length < 5) errors.password = "Hasło musi się składać z conajmniej 5 znaków";
        if(validator.isEmpty(data.password)) errors.password = "Podaj hasło";
        if(data.password !== data.confirmPassword) errors.confirmPassword = "Hasła muszą sie powtarzać"

        return errors;
    }

    render() {
        const { data, errors, loading } = this.state;
        const { email, password, confirmPassword } = data;

        return (
            <div className={classes.Signup} >
                <form onSubmit={this.onSubmit} noValidate>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input className={classnames(errors.email && classes.Error)} type='email' name='email' id='email' value={email} onChange={this.onChange} />
                        <p className={classnames(errors.email ? classes.errorMessage : classes.noErrorMessage)}>{errors.email}</p>
                    </div>
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
                    { loading ? <Spinner size='30' /> : <button type='submit'>Rejestracja</button> }
                </form>
                <div className={classes.login}>
                    <a onClick={this.props.showLogin} >Logowanie</a>
                </div>
            </div>
        );
    }
}

export default connect(null, { signup })(Signup);