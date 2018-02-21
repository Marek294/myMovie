import React, { Component } from 'react';

import ReactAux from '../../../../hoc/ReactAux';
import TopSection from '../../../../components/MovieDetails/TopSection/Desktop/TopSection';
import Information from '../../../../components/MovieDetails/Information/Desktop/Information';
import Credits from '../../../../components/MovieDetails/Credits/Desktop/Credits';
// import Seasons from '../../../../components/TvDetails/Seasons/Desktop/Seasons';
import Similar from '../../../../components/MovieDetails/Similar/Desktop/Similar';
import Recommendation from '../../../../components/MovieDetails/Recommendation/Desktop/Recommendation';

import classes from './Desktop.css';

class Desktop extends Component {
    state = {
        activeNav: 'credits'
    }

    LinkHandle = (e) => {
        this.setState({
            activeNav: e.target.id
        })
    }

    render() {
        const { movie } = this.props;
        const { activeNav } = this.state;

        const linkActive = {
            'credits': activeNav === 'credits' ? classes.Active : '',
            'similar': activeNav === 'similar' ? classes.Active : '',
            'recommendation': activeNav === 'recommendation' ? classes.Active : '',
        }

        return (
            <ReactAux>
                <TopSection 
                    backdrop_path={movie.backdrop_path}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    original_title={movie.original_title}
                    title={movie.title}
                    overview={movie.overview}
                />
                <div className={classes.MainSection}>
                    <div className={classes.LeftSide}>
                        <div className={classes.Nav}>
                            <ul className={classes.NavList}>
                                <li className={[classes.NavItem, linkActive['credits']].join(' ')} id="credits" onClick={this.LinkHandle}>Obsada</li>
                                <li className={[classes.NavItem, linkActive['similar']].join(' ')} id="similar" onClick={this.LinkHandle}>Podobne</li>
                                <li className={[classes.NavItem, linkActive['recommendation']].join(' ')} id="recommendation" onClick={this.LinkHandle}>Rekomendacje</li>
                            </ul>
                        </div>
                        <div className={classes.Body}>
                            { activeNav === 'credits' && 
                                <Credits
                                    credits={movie.credits}
                                /> }
                            { activeNav === 'similar' && 
                                <Similar
                                    similar={movie.similar}
                                /> }
                            { activeNav === 'recommendation' && 
                                <Recommendation
                                    recommendations={movie.recommendations}
                                /> }
                        </div>
                    </div>
                    <Information 
                        production_countries={movie.production_countries}
                        production_companies={movie.production_companies}
                        budget={movie.budget}
                        release_date={movie.release_date}
                        genres={movie.genres}
                        runtime={movie.runtime}
                        homepage={movie.homepage}
                    />
                </div>
            </ReactAux>
        );
    }
}

export default Desktop;