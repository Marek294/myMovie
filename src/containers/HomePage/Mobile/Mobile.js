import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import ReactAux from '../../../hoc/ReactAux';
import HomeTop from '../../../components/HomeTop/HomeTop';
import MobileSectionNavBar from '../../../components/MobileSectionNavBar/MobileSectionNavBar';
import TopRatedTv from '../../../components/Tops/TopRatedTv/Mobile/TopRatedTv';
import MostPopularTv from '../../../components/Tops/MostPopularTv/Mobile/MostPopularTv';
import TopRatedMovies from '../../../components/Tops/TopRatedMovies/Mobile/TopRatedMovies';
import MostPopularMovies from '../../../components/Tops/MostPopularMovies/Mobile/MostPopularMovies';

class Mobile extends Component {
    state = {
        active: 0
    }

    onSwipe = (index, element) => {
        this.setState({
            active: index
        });
    }

    render() {
        console.log(this.state.active);
        return (
            <ReactAux>
                <HomeTop Upcoming={this.props.Upcoming}/>
                <MobileSectionNavBar active={this.state.active} >
                    <ReactAux>
                        <p>Popularne</p>
                        <p>seriale</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Najwyżej oceniane</p>
                        <p>seriale</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Popularne</p>
                        <p>filmy</p>
                    </ReactAux>
                    <ReactAux>
                        <p>Najwyżej oceniane</p>
                        <p>filmy</p>
                    </ReactAux>
                </MobileSectionNavBar>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false, callback: this.onSwipe}}>
                    <div>
                    <MostPopularTv mostPopularTv={this.props.mostPopularTv} />
                    </div>
                    <div>
                    <TopRatedTv topRatedTv={this.props.topRatedTv} />
                    </div>
                    <div>
                    <TopRatedMovies topRatedMovies={this.props.topRatedMovies}/>
                    </div>
                    <div>
                    <MostPopularMovies mostPopularMovies={this.props.mostPopularMovies}/>
                    </div>
                </ReactSwipe>
            </ReactAux>
        );
    }
}

export default Mobile;