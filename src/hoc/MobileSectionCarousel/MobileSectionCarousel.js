import React, { Component } from 'react';
import Slide from './Slide';

import classes from './MobileSectionCarousel.css';
import scrollTo from '../../utils/scrollToAnimate';

class MobileSectionCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTouchX: null,
            moveTouchX: null,
            timeToScroll: 200,
            disabledScroll: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    componentWillReceiveProps(nextProps) {
        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;

        if(nextProps.active === this.props.active) {
            carouselViewport.scrollLeft = 0;
        } else {
            const newPosition = Math.round(carouselViewport.offsetWidth) * (nextProps.active-1);

            scrollTo({
                element: carouselViewport, 
                to: newPosition, 
                duration: timeToScroll, 
                scrollDirection: 'scrollLeft'
            });
        }
    }
    
    touchStart = (e) => {
        this.setState({
            startTouchX: e.touches[0].screenX
        })
    }

    touchMove = (e) => {
        this.setState({
            moveTouchX: e.touches[0].screenX
        })
    }

    touchEnd = (e) => {
        const { startTouchX, moveTouchX, disabledScroll } = this.state;
        if( startTouchX > 0 && moveTouchX > 0) {
            if( startTouchX - moveTouchX > 80 && !disabledScroll) {
                this.handleRightNav();
                this.setState({
                    startTouchX: 0,
                    moveTouchX: 0
                })
            }
            if( startTouchX - moveTouchX < -80 && !disabledScroll) {
                this.handleLeftNav();
                this.setState({
                    startTouchX: 0,
                    moveTouchX: 0
                })
            }
        }
    }

    onResize = () => {
        const { carouselViewport } = this.refs;
        const { active } = this.props;
 
        carouselViewport.scrollLeft = Math.round(carouselViewport.offsetWidth) * (active-1);
    }

    handleLeftNav = (e) => {
        this.props.leftHandler();
    }

    handleRightNav = (e) => {
        this.props.rightHandler();
    }

    renderSlides(data) {
        return data.map((item,i) => 
            <Slide key={i}
                item={item}
            />
        )
    }

    render() {
        return (
            <div className={classes.CarouselContainer} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchMove={this.touchMove} >
                <div className={classes.CarouselViewport} ref="carouselViewport">
                    {this.renderSlides(this.props.children)}
                </div>
            </div>
        );
    }
}

export default MobileSectionCarousel;