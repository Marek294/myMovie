import React, { Component } from 'react';
import Slide from './Slide';

import classes from './Carousel.css';
import scrollTo from '../../utils/scrollToAnimate';
import Timer from './timer';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTouchX: null,
            moveTouchX: null,
            timer: null,
            timeToScroll: 800,
            currentView: 0,
            disabledButtons: false,
            dataToShow: null
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        let dataToShow = this.renderSlides(this.props.children);

        this.setState({
            timer: new Timer(this.handleRightNav, 5000),
            dataToShow
        });
    }

    componentWillReceiveProps(nextProps) {
        let { timer } = this.state;
        let dataToShow = this.renderSlides(nextProps.children);

        timer.reset(5000);

        this.setState({
            timer,
            dataToShow
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
        this.state.timer.stop();
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

    ArrayShuffle = (direction) => {
        const { carouselViewport } = this.refs;
        let { currentView, dataToShow } = this.state;

        switch(direction) {
            case 'left':
                dataToShow.unshift(dataToShow.pop());
                carouselViewport.scrollLeft = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
                break;
            case 'right':
                if(currentView > 0) {
                    dataToShow.push(dataToShow.shift())
                    carouselViewport.scrollLeft = carouselViewport.scrollLeft - carouselViewport.offsetWidth;
                } else currentView++;
                break;
            default:
        }

        this.setState({
            dataToShow,
            currentView
        })
    }

    handleLeftNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;
        let { timer } = this.state;

        this.ArrayShuffle('left');

        const newPosition = carouselViewport.scrollLeft - carouselViewport.offsetWidth;

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
    }

    handleRightNav = (e) => {
        const { carouselViewport } = this.refs;
        const { timeToScroll } = this.state;
        let { timer } = this.state;

        this.ArrayShuffle('right');

        const newPosition = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
        
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
    }

    renderSlides(data) {
        return data.map((item,i) => 
            <Slide key={i}
                item={item}
            />
        )
    }

    render() {
        const { dataToShow, disabledButtons } = this.state;
        return (
            <div className={classes.CarouselContainer} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchMove={this.touchMove} >
                <button onClick={this.handleLeftNav} className={[classes.CarouselNav, classes.CarouselLeftNav].join(' ')} disabled={disabledButtons}><i className="fas fa-chevron-left"></i></button>
                <div className={classes.CarouselViewport} ref="carouselViewport">
                    {dataToShow}
                </div>
                <button onClick={this.handleRightNav} className={[classes.CarouselNav, classes.CarouselRightNav].join(' ')} disabled={disabledButtons}><i className="fas fa-chevron-right"></i></button>
            </div>
        );
    }
}

export default Carousel;