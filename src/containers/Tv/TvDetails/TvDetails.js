import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopSection from '../../../components/TvDetails/TopSection';
import RightSide from '../../../components/TvDetails/RightSide';
import Credits from '../../../components/TvDetails/Credits';
import Seasons from '../../../components/TvDetails/Seasons';

import classes from './TvDetails.css';

import { getTvDetails } from '../../../actions/Tv';

class MovieDetails extends Component {
    state = {
        tv: null,
        activeNav: 'credits'
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getTvDetails(id)
            .then(tv => this.setState({ tv }))
    }

    LinkHandle = (e) => {
        this.setState({
            activeNav: e.target.id
        })
    }

    render() {
        const { tv, activeNav } = this.state;
        
        const linkActive = {
            'credits': activeNav === 'credits' ? classes.Active : '',
            'seasons': activeNav === 'seasons' ? classes.Active : '',
            'similar': activeNav === 'similar' ? classes.Active : '',
            'recommendation': activeNav === 'recommendation' ? classes.Active : '',
        }

        return (
            tv &&
                <div>
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
                            </div>
                        </div>
                        <RightSide 
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
                </div>
        );
    }
}

export default connect(null, { getTvDetails })(MovieDetails);