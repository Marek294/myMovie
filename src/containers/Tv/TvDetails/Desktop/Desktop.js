import React, { Component } from 'react';

import ReactAux from '../../../../hoc/ReactAux';
import TopSection from '../../../../components/Details/TvDetails/TopSection/Desktop/TopSection';
import Information from '../../../../components/Details/TvDetails/Information/Desktop/Information';
import Credits from '../../../../components/Details/TvDetails/Credits/Desktop/Credits';
import Seasons from '../../../../components/Details/TvDetails/Seasons/Desktop/Seasons';
import Similar from '../../../../components/Details/TvDetails/Similar/Desktop/Similar';
import Recommendation from '../../../../components/Details/TvDetails/Recommendation/Desktop/Recommendation';

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
        const { tv } = this.props;
        const { activeNav } = this.state;

        const linkActive = {
            'credits': activeNav === 'credits' ? classes.Active : '',
            'seasons': activeNav === 'seasons' ? classes.Active : '',
            'similar': activeNav === 'similar' ? classes.Active : '',
            'recommendation': activeNav === 'recommendation' ? classes.Active : '',
        }

        return (
            <ReactAux>
                <TopSection 
                    backdrop_path={tv.backdrop_path}
                    poster_path={tv.poster_path}
                    vote_average={tv.vote_average}
                    original_name={tv.original_name}
                    name={tv.name}
                    overview={tv.overview}
                />
                <div className={classes.MainSection}>
                    <div className={classes.LeftSide}>
                        <div className={classes.Nav}>
                            <ul className={classes.NavList}>
                                <li className={[classes.NavItem, linkActive['credits']].join(' ')} id="credits" onClick={this.LinkHandle}>Obsada</li>
                                <li className={[classes.NavItem, linkActive['seasons']].join(' ')} id="seasons" onClick={this.LinkHandle}>Sezony</li>
                                <li className={[classes.NavItem, linkActive['similar']].join(' ')} id="similar" onClick={this.LinkHandle}>Podobne</li>
                                <li className={[classes.NavItem, linkActive['recommendation']].join(' ')} id="recommendation" onClick={this.LinkHandle}>Rekomendacje</li>
                            </ul>
                        </div>
                        <div className={classes.Body}>
                            { activeNav === 'credits' && 
                                <Credits
                                    created_by={tv.created_by}
                                    credits={tv.credits}
                                /> }
                            { activeNav === 'seasons' && 
                                <Seasons
                                    seasons={tv.seasons}
                                /> }
                            { activeNav === 'similar' && 
                                <Similar
                                    similar={tv.similar}
                                /> }
                            { activeNav === 'recommendation' && 
                                <Recommendation
                                    recommendations={tv.recommendations}
                                /> }
                        </div>
                    </div>
                    <Information 
                        origin_country={tv.origin_country}
                        production_companies={tv.production_companies}
                        networks={tv.networks}
                        first_air_date={tv.first_air_date}
                        last_air_date={tv.last_air_date}
                        genres={tv.genres}
                        episode_run_time={tv.episode_run_time}
                        homepage={tv.homepage}
                        keywords={tv.keywords}
                    />
                </div>
            </ReactAux>
        );
    }
}

export default Desktop;