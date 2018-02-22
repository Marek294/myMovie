import React, { Component } from 'react';

import ReactAux from '../../../../hoc/ReactAux';
import MobileSectionNavBar from '../../../../components/MobileSectionNavBar/MobileSectionNavBar';
import MobileSectionCarousel from '../../../../hoc/MobileSectionCarousel/MobileSectionCarousel';
import TopSection from '../../../../components/TvDetails/TopSection/Mobile/TopSection';
import About from '../../../../components/MovieDetails/About/Mobile/About';
import Information from '../../../../components/MovieDetails/Information/Mobile/Information';
import Credits from '../../../../components/MovieDetails/Credits/Mobile/Credits';
import Similar from '../../../../components/MovieDetails/Similar/Mobile/Similar';
import Recommendation from '../../../../components/MovieDetails/Recommendation/Mobile/Recommendation';

class Mobile extends Component {
    state = {
        active: 1
    }

    componentWillMount() {
        this.setState({
            active: 1
        })
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
        if(active+1 <= 5) active += 1;

        this.setState({
            active
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
                <MobileSectionCarousel leftHandler={this.leftHandler} rightHandler={this.rightHandler} active={this.state.active}>
                    <About movie={movie} />
                    <Credits movie={movie} />
                    <Similar movie={movie} />
                    <Recommendation movie={movie} />
                    <Information movie={movie} />
                </MobileSectionCarousel>
            </ReactAux>
        );
    }
}

export default Mobile;