import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import validator from 'validator';
import Spinner from '../../components/Loader/Spinner';

import { login } from '../../actions/Auth';

import classes from './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {},
        loading: false
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

        this.setState({
            loading: true
        })

        const errors = this.validateLogin(this.state);
        if(Object.keys(errors).length > 0) this.setState({ errors, loading: false });
        else {
            this.props.login(this.state)
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
        if(validator.isEmpty(data.password)) errors.password = "Podaj hasło";

        return errors;
    }

    render() {
        const { email, password, errors, loading } = this.state;

        return (
            <div className={classes.Login} >
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
                    <p className={classnames(errors.global ? [classes.errorMessage, classes.global].join(' ') : classes.noErrorMessage)}>{errors.global}</p>
                    { loading ? <Spinner size='30' /> : <button type='submit'>Zaloguj</button> }
                </form>
                <div className={classes.forgotAndSignup}>
                    <Link to="/forgotPassword">Zapomniane hasło</Link>
                    <a onClick={this.props.showSignup} >Rejestracja</a>
                </div>
            </div>
        );
    }
}

export default connect(null, { login })(Login);