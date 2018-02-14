import React, { Component } from 'react';
import Slide from './Slide';

import classes from './MobileCarousel.css';
import scrollTo from '../../utils/scrollToAnimate';

class MobileCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTouchX: null,
            moveTouchX: null,
            timeToScroll: 300,
            slidesInView: 3,
            disabledScroll: false,
            active: 1
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
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
        const { startTouchX, moveTouchX, disabledScroll } = this.state;

        if( startTouchX - moveTouchX > 80 && !disabledScroll) this.handleRightNav();
        if( startTouchX - moveTouchX < -80 && !disabledScroll) this.handleLeftNav();
    }

    onResize = () => {
        const { carouselViewport } = this.refs;
        const { active } = this.state;
 
        console.log(active);
        carouselViewport.scrollLeft = Math.round(carouselViewport.offsetWidth / 3) * (active-1);
    }

    handleLeftNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;
        let { active } = this.state;

        const newPosition = carouselViewport.scrollLeft - Math.round(carouselViewport.offsetWidth / 3);

        if(newPosition >= 0-10) active--;

        this.setState({
            disabledScroll: true,
            active
        });

        setTimeout(() => {
            this.setState({
                disabledScroll: false
            })
        }, timeToScroll);
        
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });
    }

    handleRightNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;
        let { active } = this.state;

        const newPosition = carouselViewport.scrollLeft + Math.round(carouselViewport.offsetWidth / 3);
        
        if(newPosition <= carouselViewport.scrollLeftMax+10) active++;

        this.setState({
            disabledScroll: true,
            active
        });

        setTimeout(() => {
            this.setState({
                disabledScroll: false
            })
        }, timeToScroll);
        
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });
    }

    renderSlides(data) {
        return data.map((item,i) => 
            <Slide key={i}
                item={item}
                width={100/this.state.slidesInView}
                index={i}
            />
        )
    }

    render() {
        return (
            <div className={classes.CarouselContainer} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchMove={this.touchMove} >
                <div className={classes.CarouselViewport} ref="carouselViewport">
                    {this.renderSlides(this.props.children)}
                </div>
                <div className={classes.Border} >
                    <div style={{ width: [100/this.state.slidesInView,'%'].join('')}} className={classes.ActiveBorder} />
                </div>
            </div>
        );
    }
}

export default MobileCarousel;