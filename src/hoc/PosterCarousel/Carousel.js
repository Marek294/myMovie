import React, { Component } from 'react';
import Slide from './Slide';

import classes from './Carousel.css';
import scrollTo from './scrollToAnimate';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTouchX: null,
            moveTouchX: null,
            timeToScroll: 800,
            lastIndex: null,
            disabledButtons: false,
            dataToShow: null,
            slidesInView: 8,
            hoverIndex: null,
            widthOfSlide: null
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        const { slidesInView } = this.state;
        let { lastIndex } = this.state;

        lastIndex = slidesInView-1;

        this.setState({
            lastIndex
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
        const { currentView, timeToScroll } = this.state;

        carouselViewport.scrollLeft = carouselViewport.offsetWidth * currentView;
        scrollTo({
            element: carouselViewport, 
            to: carouselViewport.offsetWidth * currentView, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });
    }

    // ArrayShuffle = (direction) => {
    //     const { carouselViewport } = this.refs;
    //     let { currentView, dataToShow } = this.state;

    //     switch(direction) {
    //         case 'left':
    //             dataToShow.unshift(dataToShow.pop());
    //             carouselViewport.scrollLeft = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    //             break;
    //         case 'right':
    //             if(currentView > 0) {
    //                 dataToShow.push(dataToShow.shift())
    //                 carouselViewport.scrollLeft = carouselViewport.scrollLeft - carouselViewport.offsetWidth;
    //             } else currentView++;
    //             break;
    //         default:
    //     }

    //     this.setState({
    //         dataToShow,
    //         currentView
    //     })
    // }

    handleLeftNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll, slidesInView } = this.state;
        let { lastIndex } = this.state;

        //this.ArrayShuffle('left');
        const slidesToMove = Math.min(lastIndex-(slidesInView-1), slidesInView/2);
        lastIndex -= slidesToMove;
        const newPosition = carouselViewport.scrollLeft - (carouselViewport.offsetWidth / 2);
        
        this.setState({
            disabledButtons: true,
            lastIndex
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
    }

    handleRightNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll, slidesInView } = this.state;
        let { lastIndex } = this.state;

        //this.ArrayShuffle('right');

        const slidesToMove = Math.min(this.props.children.length-1-lastIndex, slidesInView/2);
        lastIndex += slidesToMove;
        const newPosition = carouselViewport.scrollLeft + (carouselViewport.offsetWidth / 2);

        this.setState({
            disabledButtons: true,
            lastIndex
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
    }

    moveAnotherSlides = (index, offsetWidth) => {
        this.setState({
            hoverIndex: index,
            widthOfSlide: offsetWidth
        })
    }

    renderSlides(data) {
        const { hoverIndex, widthOfSlide, lastIndex } = this.state;

        return data.map((item,i) => 
            <Slide key={i}
                item={item}
                width={100/this.state.slidesInView}
                hoverIndex={hoverIndex}
                widthOfSlide={widthOfSlide}
                lastIndexOfCarousel={lastIndex}
                index={i}
                moveAnotherSlides={this.moveAnotherSlides}
            />
        )
    }

    render() {
        const { disabledButtons, lastIndex, slidesInView } = this.state;

        const leftDisplay = {}
        const rightDisplay = {}

        if(lastIndex-(slidesInView-1) === 0) leftDisplay.display = 'none';
        if(lastIndex === this.props.children.length-1) rightDisplay.display = 'none';

        return (
            <div className={classes.CarouselContainer} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchMove={this.touchMove} >
                <button onClick={this.handleLeftNav} style={leftDisplay} className={[classes.CarouselNav, classes.CarouselLeftNav].join(' ')} disabled={disabledButtons}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                <div className={classes.CarouselViewport} ref="carouselViewport">
                    {this.renderSlides(this.props.children)}
                </div>
                <button onClick={this.handleRightNav} style={rightDisplay} className={[classes.CarouselNav, classes.CarouselRightNav].join(' ')} disabled={disabledButtons}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </div>
        );
    }
}

export default Carousel;