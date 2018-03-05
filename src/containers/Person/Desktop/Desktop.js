import React, { Component } from 'react';

import ReactAux from '../../../hoc/ReactAux';
import TopSection from '../../../components/Details/PersonDetails/TopSection/Desktop/TopSection';
import Tv from '../../../components/Details/PersonDetails/Tv/Desktop/Tv';
import Movie from '../../../components/Details/PersonDetails/Movie/Desktop/Movie';
import Graphic from '../../../components/Details/PersonDetails/Graphic/Desktop/Graphic';

import classes from './Desktop.css';

class Desktop extends Component {
    state = {
        activeNav: 'tv'
    }

    LinkHandle = (e) => {
        this.setState({
            activeNav: e.target.id
        })
    }

    render() {
        const { person } = this.props;
        const { activeNav } = this.state;

        const linkActive = {
            'tv': activeNav === 'tv' ? classes.Active : '',
            'movie': activeNav === 'movie' ? classes.Active : '',
            'images': activeNav === 'images' ? classes.Active : ''
        }

        return (
            <ReactAux>
                <TopSection 
                    birthday={person.birthday}
                    deathday={person.deathday}
                    profile_path={person.profile_path}
                    name={person.name}
                    biography={person.biography}
                    place_of_birth={person.place_of_birth}
                    homepage={person.homepage}
                />
                <div className={classes.MainSection}>
                    <div className={classes.LeftSide}>
                        <div className={classes.Nav}>
                            <ul className={classes.NavList}>
                                <li className={[classes.NavItem, linkActive['tv']].join(' ')} id="tv" onClick={this.LinkHandle}>Seriale</li>
                                <li className={[classes.NavItem, linkActive['movie']].join(' ')} id="movie" onClick={this.LinkHandle}>Filmy</li>
                                <li className={[classes.NavItem, linkActive['images']].join(' ')} id="images" onClick={this.LinkHandle}>Grafika</li>
                            </ul>
                        </div>
                        <div className={classes.Body}>
                            { activeNav === 'tv' && 
                                <Tv
                                    tv_credits={person.tv_credits}
                                /> }
                            { activeNav === 'movie' && 
                                <Movie
                                    movie_credits={person.movie_credits}
                                /> }
                            { activeNav === 'images' && 
                                <Graphic
                                    images={person.images}
                                /> }
                        </div>
                    </div>
                </div>
            </ReactAux>
        );
    }
}

export default Desktop;