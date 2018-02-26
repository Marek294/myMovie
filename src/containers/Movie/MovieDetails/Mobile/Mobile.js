import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import ReactAux from '../../../../hoc/ReactAux';
import MobileSectionNavBar from '../../../../components/MobileSectionNavBar/MobileSectionNavBar';
import TopSection from '../../../../components/TvDetails/TopSection/Mobile/TopSection';
import About from '../../../../components/MovieDetails/About/Mobile/About';
import Information from '../../../../components/MovieDetails/Information/Mobile/Information';
import Credits from '../../../../components/MovieDetails/Credits/Mobile/Credits';
import Similar from '../../../../components/MovieDetails/Similar/Mobile/Similar';
import Recommendation from '../../../../components/MovieDetails/Recommendation/Mobile/Recommendation';

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
                    <div>
                    <About movie={movie} />
                    </div>
                    <div>
                    <Credits movie={movie} />
                    </div>
                    <div>
                    <Similar movie={movie} />
                    </div>
                    <div>
                    <Recommendation movie={movie} />
                    </div>
                    <div>
                    <Information movie={movie} />
                    </div>
                </ReactSwipe>
            </ReactAux>
        );
    }
}

export default Mobile;