import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import scrollTo from '../../../utils/scrollTop';

import ReactAux from '../../../hoc/ReactAux';
import MobileSectionNavBar from '../../../components/MobileSectionNavBar/MobileSectionNavBar';
import About from '../../../components/Details/PersonDetails/About/Mobile/About';
import Tv from '../../../components/Details/PersonDetails/Tv/Mobile/Tv';
import Movie from '../../../components/Details/PersonDetails/Movie/Mobile/Movie';
import Graphic from '../../../components/Details/PersonDetails/Graphic/Mobile/Graphic';

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
        const { person } = this.props;
    
        return (
            <ReactAux>
                <MobileSectionNavBar active={this.state.active} >
                    <ReactAux>
                        <p>Informacje</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Seriale</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Filmy</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Grafika</p>
                    </ReactAux>
                </MobileSectionNavBar>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false, callback: this.onSwipe}}>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <About person={person} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Tv tv_credits={person.tv_credits} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Movie movie_credits={person.movie_credits} />
                    </div>
                    <div className={classes.slide} onScroll={this.onScroll}>
                        <Graphic images={person.images} />
                    </div>
                </ReactSwipe>
            </ReactAux>
        );
    }
}

export default Mobile;