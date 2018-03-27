import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import validator from 'validator';

import { signup } from '../../actions/User';

import classes from './Signup.css';

class Signup extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: {
                ...this.state.errors,
                [e.target.name]: '',
                global: ''
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const errors = this.validateLogin(this.state);
        if(Object.keys(errors).length > 0) this.setState({ errors });
        else {
            this.props.signup(this.state)
                .catch(err => {
                    const { errors } = err.response.data;
                    this.setState({
                        errors: {
                            global: errors.global
                        }
                    })
                })
        }
    }

    validateLogin = (data) => {
        const errors = {};

        if(!validator.isEmail(data.email)) errors.email = "Wprowadź email";
        if(validator.isEmpty(data.password)) errors.password = "Podaj hasło";
        if(data.password !== data.confirmPassword) errors.confirmPassword = "Hasła muszą sie powtarzać"

        return errors;
    }

    render() {
        const { email, password, confirmPassword, errors } = this.state;

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
                    <button type='submit'>Rejestracja</button>
                </form>
                <div className={classes.login}>
                    <a onClick={this.props.showLogin} >Logowanie</a>
                </div>
            </div>
        );
    }
}

export default connect(null, { signup })(Signup);