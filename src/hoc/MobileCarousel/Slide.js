import React, { Component } from 'react';

import classes from './Slide.css';

class Slide extends Component {
    state = {
        width: null
    }

    componentDidMount() {
        this.setState({
            width: this.props.width,
        })
    }

    render() {
        const { item } = this.props;
        const { width } = this.state;

        return (
            <div className={classes.Slide} 
                style={{ width: [width,'%'].join('')}} 
                ref="slider">
                {item}
            </div>
        );
    }
}

export default Slide;
