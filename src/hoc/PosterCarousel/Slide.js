import React, { Component } from 'react';

import classes from './Slide.css';

class Slide extends Component {
    state = {
        width: null
    }

    componentDidMount() {
        this.setState({
            width: this.props.width
        })
    }

    onMouseEnterHandler = (e) => {
        let { width } = this.state;

        const addPercentage = 10;
        this.props.moveAnotherSlides(this.props.index, this.refs.slider.offsetWidth);

        width += addPercentage;

        this.setState({
            width
        })
    }

    onMouseLeaveHandler = () => {
        let { width } = this.state;

        const addPercentage = 10;
        this.props.moveAnotherSlides(null, null);

        width -= addPercentage;

        this.setState({
            width
        })
    }

    transformCalculation = (index, hoverIndex, widthOfSlide, lastIndexOfCarousel) => {
        let calc = 0;
        if( hoverIndex === lastIndexOfCarousel ) calc = widthOfSlide*1.8-widthOfSlide;
        if( hoverIndex === null) return null;

        if( index < hoverIndex ) return 'translateX(-'+calc+'px)';
        if( index === hoverIndex ) return 'translateX(-'+calc+'px)';
    }

    render() {
        const { item } = this.props;
        const { width } = this.state;

        const { index, hoverIndex, widthOfSlide, lastIndexOfCarousel } = this.props;
        const transform = this.transformCalculation(index, hoverIndex, widthOfSlide, lastIndexOfCarousel)

        return (
            <div className={classes.Slide} 
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler} 
                style={{ width: [width,'%'].join(''), transform: transform }} 
                ref="slider">
                {item}
            </div>
        );
    }
}

export default Slide;
