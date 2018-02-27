import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import scrollTo from '../../../../utils/scrollTop';

import ReactAux from '../../../../hoc/ReactAux';
import MobileSectionNavBar from '../../../../components/MobileSectionNavBar/MobileSectionNavBar';
import TopSection from '../../../../components/TvDetails/TopSection/Mobile/TopSection';
import About from '../../../../components/TvDetails/About/Mobile/About';
import Credits from '../../../../components/TvDetails/Credits/Mobile/Credits';
import Similar from '../../../../components/TvDetails/Similar/Mobile/Similar';
import Recommendation from '../../../../components/TvDetails/Recommendation/Mobile/Recommendation';
import Seasons from '../../../../components/TvDetails/Seasons/Mobile/Seasons';
import Information from '../../../../components/TvDetails/Information/Mobile/Information';

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
        const { tv } = this.props;

        return (
            <ReactAux>
                <TopSection backdrop_path={tv.backdrop_path} />
                <MobileSectionNavBar active={this.state.active} >
                    <ReactAux>
                        <p>O serialu</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Obsada</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Sezony</p>
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
                <ReactSwipe swipeOptions={{ continuous: false, callback: this.onSwipe }}>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <About tv={tv} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Credits tv={tv} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Seasons tv={tv} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Similar tv={tv} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Recommendation tv={tv} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Information tv={tv} />
                    </div>
                </ReactSwipe>
            </ReactAux>
        );
    }
}

export default Mobile;