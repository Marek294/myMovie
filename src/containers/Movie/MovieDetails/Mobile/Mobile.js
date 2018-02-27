import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import scrollTo from '../../../../utils/scrollTop';

import ReactAux from '../../../../hoc/ReactAux';
import MobileSectionNavBar from '../../../../components/MobileSectionNavBar/MobileSectionNavBar';
import TopSection from '../../../../components/TvDetails/TopSection/Mobile/TopSection';
import About from '../../../../components/MovieDetails/About/Mobile/About';
import Information from '../../../../components/MovieDetails/Information/Mobile/Information';
import Credits from '../../../../components/MovieDetails/Credits/Mobile/Credits';
import Similar from '../../../../components/MovieDetails/Similar/Mobile/Similar';
import Recommendation from '../../../../components/MovieDetails/Recommendation/Mobile/Recommendation';

import classes from './Mobile.css';

class Mobile extends Component {
    state = {
        active: 0
    }

    onSwipe = (index, element) => {
        this.setState({
            active: index
        });
    }

    onScroll = () => {
        scrollTo({
            element: window, 
            to: 1000, 
            duration: 200, 
        });
    }

    render() {
        const { movie } = this.props;
    
        return (
            <ReactAux>
                <TopSection backdrop_path={movie.backdrop_path} />
                <MobileSectionNavBar active={this.state.active} >
                    <ReactAux>
                        <p>O filmie</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Obsada</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Podobne</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Rekomendacje</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Informacje</p>
                    </ReactAux>
                </MobileSectionNavBar>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false, callback: this.onSwipe}}>
                    <div className={classes.slide} onScroll={this.onScroll}>
                    <About movie={movie} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                    <Credits movie={movie} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                    <Similar movie={movie} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                    <Recommendation movie={movie} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                    <Information movie={movie} />
                    </div>
                </ReactSwipe>
            </ReactAux>
        );
    }
}

export default Mobile;