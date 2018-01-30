import React, { Component } from 'react';
import Slide from './Slide';

import classes from './Carousel.css';
import scrollTo from './scrollToAnimate';
import Timer from './timer';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTouchX: null,
            moveTouchX: null,
            timer: null,
            timeToScroll: 800,
            numOfSlidesToScroll: 1,
            numOfSlides: 0,
            currentSlide: 0,
            disabledButtons: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);

        this.setState({
            timer: new Timer(this.handleRightNav, 5000),
            numOfSlides: this.props.children.length
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
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
        const { startTouchX, moveTouchX, disabledButtons } = this.state;

        if( startTouchX - moveTouchX > 80 && !disabledButtons) this.handleRightNav();
        if( startTouchX - moveTouchX < -80 && !disabledButtons) this.handleLeftNav();
    }

    onResize = () => {
        const { carouselViewport } = this.refs;
        const { currentSlide } = this.state;

        carouselViewport.scrollLeft = carouselViewport.offsetWidth * currentSlide;
    }

    handleLeftNav = (e) => {

        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;
        const newPosition = carouselViewport.scrollLeft - carouselViewport.offsetWidth;

        let { timer } = this.state;
        timer.reset(5000);

        this.setState({
            disabledButtons: true,
            timer
        });

        setTimeout(() => {
            this.setState({
                disabledButtons: false
            })
        }, timeToScroll);
        
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });

        let { currentSlide } = this.state;
        if(currentSlide > 0) {
            currentSlide--;
            
            this.setState({
                currentSlide
            })
        }
    }

    handleRightNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;
        const newPosition = carouselViewport.scrollLeft + carouselViewport.offsetWidth;

        let { timer } = this.state;
        timer.reset(5000);

        this.setState({
            disabledButtons: true,
            timer
        });

        setTimeout(() => {
            this.setState({
                disabledButtons: false
            })
        }, timeToScroll);
        
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });

        let { currentSlide } = this.state;
        const { numOfSlides } = this.state;
        if(currentSlide < numOfSlides-1) {
            currentSlide++;

            this.setState({
                currentSlide
            })
        }
    }

    renderSlides(data) {
        return data.map((item,i) => 
            <Slide key={i}
                item={item}
            />
        )
    }

    render() {
        const { disabledButtons } = this.state;
        return (
            <div className={classes.CarouselContainer} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchMove={this.touchMove} >
                <button onClick={this.handleLeftNav} className={[classes.CarouselNav, classes.CarouselLeftNav].join(' ')} disabled={disabledButtons}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                <div className={classes.CarouselViewport} ref="carouselViewport">
                    {this.renderSlides(this.props.children)}
                </div>
                <button onClick={this.handleRightNav} className={[classes.CarouselNav, classes.CarouselRightNav].join(' ')} disabled={disabledButtons}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </div>
        );
    }
}

export default Carousel;