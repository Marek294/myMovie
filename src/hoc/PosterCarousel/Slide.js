import React, { Component } from 'react';

import classes from './Slide.css';

class Slide extends Component {
    state = {
        width: null,
        height: null
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        const height = document.body.clientWidth*0.9*(this.props.width/100)*(3/2);

        this.setState({
            width: this.props.width,
            height
        })
    }

    onResize = () => {
        const height = document.body.clientWidth*0.9*(this.props.width/100)*(3/2);

        this.setState({
            height
        });
    }

    onMouseEnterHandler = (e) => {
        let { width, height } = this.state;

        const addPercentage = 5;
        this.props.moveAnotherSlides(this.props.index, this.refs.slider.offsetWidth);

        width += addPercentage;
        height = document.body.clientWidth*0.9*(width/100)*(3/2);
        

        this.setState({
            width,
            height
        })
    }

    onMouseLeaveHandler = () => {
        let { width, height } = this.state;

        const addPercentage = 5;
        this.props.moveAnotherSlides(null, null);

        width -= addPercentage;
        height = document.body.clientWidth*0.9*(width/100)*(3/2);

        this.setState({
            width,
            height
        })
    }

    transformCalculation = (index, hoverIndex, widthOfSlide, lastIndexOfCarousel) => {
        let calc = 0;
        if( hoverIndex === lastIndexOfCarousel ) calc = widthOfSlide*1.4-widthOfSlide;
        if( hoverIndex === null) return null;

        if( index <= hoverIndex ) return 'translateX(-'+calc+'px)';
    }

    render() {
        const { item } = this.props;
        const { width, height } = this.state;


        const { index, hoverIndex, widthOfSlide, lastIndexOfCarousel } = this.props;
        const transform = this.transformCalculation(index, hoverIndex, widthOfSlide, lastIndexOfCarousel)

        return (
            <div className={classes.Slide} 
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler} 
                style={{ width: [width,'%'].join(''), height: [height,'px'].join(''), transform }} 
                ref="slider">
                {item}
            </div>
        );
    }
}

export default Slide;
