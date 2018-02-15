import React, { Component } from 'react';

import ReactAux from '../../../hoc/ReactAux';
import HomeTop from '../../../components/HomeTop/HomeTop';
import MobileHomeNavBar from '../../../components/MobileHomeNavBar/MobileHomeNavBar';
import TopRatedTv from '../../../components/Tops/TopRatedTv/Mobile/TopRatedTv';
import MostPopularTv from '../../../components/Tops/MostPopularTv/Mobile/MostPopularTv';
import TopRatedMovies from '../../../components/Tops/TopRatedMovies/Mobile/TopRatedMovies';
import MostPopularMovies from '../../../components/Tops/MostPopularMovies/Mobile/MostPopularMovies';
import MobileSectionCarousel from '../../../hoc/MobileSectionCarousel/MobileSectionCarousel';

const parser = {
    1: 'PopularTv',
    2: 'TopRatedTv',
    3: 'PopularMovies',
    4: 'TopRatedMovies'
}

class Mobile extends Component {
    state = {
        active: 1
    }

    activeHandler = (active) => {
        this.setState({
            active: parser[active]
        })
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

    leftHandler = () => {
        let { active } = this.state;
        if(active-1 >= 1) active -= 1;

        this.setState({
            active
        });
    }

    rightHandler = () => {
        let { active } = this.state;
        if(active+1 <= 4) active += 1;

        this.setState({
            active
        });
    }

    render() {
        return (
            <ReactAux>
                <HomeTop Upcoming={this.props.Upcoming}/>
                <MobileHomeNavBar activeHandler={this.activeHandler} active={this.state.active} />
                <MobileSectionCarousel leftHandler={this.leftHandler} rightHandler={this.rightHandler} active={this.state.active}>
                    <MostPopularTv mostPopularTv={this.props.mostPopularTv} />
                    <TopRatedTv topRatedTv={this.props.topRatedTv} />
                    <TopRatedMovies topRatedMovies={this.props.topRatedMovies}/>
                    <MostPopularMovies mostPopularMovies={this.props.mostPopularMovies}/>
                </MobileSectionCarousel>
            </ReactAux>
        );
    }
}

export default Mobile;