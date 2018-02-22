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
            timeToScroll: 200,
            slidesInView: 3,
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

        const newPosition = Math.round(carouselViewport.offsetWidth / 3) * (nextProps.active-1);
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });
    }

    onResize = () => {
        const { carouselViewport } = this.refs;
        const { active } = this.props;
 
        carouselViewport.scrollLeft = Math.round(carouselViewport.offsetWidth / 3) * (active-1);
    }

    // handleLeftNav = (e) => {
    //     const { carouselViewport } = this.refs;
    //     const { timeToScroll } = this.state;

    //     const newPosition = carouselViewport.scrollLeft - Math.round(carouselViewport.offsetWidth / 3);

    //     this.setState({
    //         disabledScroll: true,
    //     });

    //     setTimeout(() => {
    //         this.setState({
    //             disabledScroll: false
    //         })
    //     }, timeToScroll);
        
    //     scrollTo({
    //         element: carouselViewport, 
    //         to: newPosition, 
    //         duration: timeToScroll, 
    //         scrollDirection: 'scrollLeft'
    //     });
    // }

    // handleRightNav = (e) => {
    //     const { carouselViewport } = this.refs;
    //     const { timeToScroll } = this.state;

    //     const newPosition = carouselViewport.scrollLeft + Math.round(carouselViewport.offsetWidth / 3);

    //     this.setState({
    //         disabledScroll: true,
    //     });

    //     setTimeout(() => {
    //         this.setState({
    //             disabledScroll: false
    //         })
    //     }, timeToScroll);
        
    //     scrollTo({
    //         element: carouselViewport, 
    //         to: newPosition, 
    //         duration: timeToScroll, 
    //         scrollDirection: 'scrollLeft'
    //     });
    // }

    renderSlides(data) {
        return data.map((item,i) => {
            if(Array.isArray(item)) return this.renderSlides(item);
            else
            return (<Slide key={i}
                item={item}
                width={100/this.state.slidesInView}
                index={i}
            />)
        })
    }

    render() {
        return (
            <div className={classes.CarouselContainer} >
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