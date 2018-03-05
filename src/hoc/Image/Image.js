import React, { Component } from 'react';

import classes from './Image.css';

class Image extends Component {
    state = {
        valid: true
    }

    onError = () => {
        this.setState({
            valid: false
        })
    }

    render() {
        const { valid } = this.state;
        
        return (
            valid ? <img className={this.props.shadow && classes.Shadow} src={this.props.src} alt={this.props.alt} onError={this.onError} /> :
            <img className={this.props.shadow && classes.Shadow} src={this.props.default} alt={this.props.alt} onError={this.onError} /> 
        );
    }
}

export default Image;