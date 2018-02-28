import React, { Component } from 'react';

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
            valid ? <img src={this.props.src} alt={this.props.alt} onError={this.onError} /> :
            <img src={this.props.default} alt={this.props.alt} onError={this.onError} /> 
        );
    }
}

export default Image;