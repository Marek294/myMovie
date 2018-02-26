import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import ReactAux from '../../../../hoc/ReactAux';
import MobileSectionNavBar from '../../../../components/MobileSectionNavBar/MobileSectionNavBar';
import TopSection from '../../../../components/TvDetails/TopSection/Mobile/TopSection';
import About from '../../../../components/TvDetails/About/Mobile/About';
import Credits from '../../../../components/TvDetails/Credits/Mobile/Credits';
import Similar from '../../../../components/TvDetails/Similar/Mobile/Similar';
import Recommendation from '../../../../components/TvDetails/Recommendation/Mobile/Recommendation';
import Seasons from '../../../../components/TvDetails/Seasons/Mobile/Seasons';
import Information from '../../../../components/TvDetails/Information/Mobile/Information';

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
                <ReactSwipe className="carousel" swipeOptions={{continuous: false, callback: this.onSwipe}}>
                    <div>
                    <About tv={tv} />
                    </div>
                    <div>
                    <Credits tv={tv} />
                    </div>
                    <div>
                    <Seasons tv={tv} />
                    </div>
                    <div>
                    <Similar tv={tv} />
                    </div>
                    <div>
                    <Recommendation tv={tv} />
                    </div>
                    <div>
                    <Information tv={tv} />
                    </div>
                </ReactSwipe>
            </ReactAux>
        );
    }
}

export default Mobile;