import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../components/Loader/Loader';
import Image from '../../../hoc/Image/Image';
import noPoster from '../../../assets/no_poster.jpg';
import noProfile from '../../../assets/no_profile.png';

import { getSearchTV } from '../../../actions/Tv';
import { getSearchMovies } from '../../../actions/Movie';
import { getSearchPersons } from '../../../actions/Person';

import classes from './SearchBar.css';

class SearchBar extends Component {
    state = {
        show: false,
        searchQuery: '',
        showResults: false,
        loading: false,
        movies: [],
        tv: [],
        persons: []
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    showSearchInput = () => {
        this.setState({
            show: true
        })
    }

    handleClickOutside = (event) => {
        if (this.state.show && this.refs.searchInput && !this.refs.searchInput.contains(event.target) && !this.state.searchQuery) {
            this.setState({
                show: false
            })
        }
    }

    changeInputHandler = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    keyDownHandler = (e) => {
        if(e.keyCode === 13) {
            this.setState({
                loading: true
            });
    
            const p1 = this.props.getSearchMovies(this.state.searchQuery);
            const p2 = this.props.getSearchTV(this.state.searchQuery);
            const p3 = this.props.getSearchPersons(this.state.searchQuery);
    
            Promise.all([p1, p2, p3]).then(results => {
                this.setState({
                    loading: false,
                    movies: results[0],
                    tv: results[1],
                    persons: results[2]
                })
            })


            this.setState({
                showResults: true
            })
        }
    }

    deleteQuery = () => {
        this.setState({
            searchQuery: '',
            show: false,
            showResults: false
        })
    }

    resetSearchBar = () => {
        this.setState({
            show: false,
            searchQuery: '',
            showResults: false,
            loading: false,
            movies: [],
            tv: []
        })
    }

    render() {
        const { show, searchQuery, showResults, movies, tv, persons } = this.state;

        const searchIcon = {
            transition: 'all 500ms'
        }

        const searchDiv = {
            height: '2vw',
            transition: 'all 500ms'
        }

        const cancelStyle = {
            display: 'none'
        }

        let resultsStyle = {
            display: 'none'
        }

        if(showResults) {
            resultsStyle = {
                display: 'initial',
                transform: 'translate(-230px,'+(this.refs.searchInput.offsetHeight+10)+'px)',
                width: this.refs.searchInput.offsetWidth+200
            }
        }

        if(show) {
            searchDiv.width = '20vw';
            searchDiv.opacity = '1';
            searchDiv.border = '1px solid white';
            searchIcon.display = 'none';
            if(searchQuery !== '') cancelStyle.display = 'flex';
        }
        else {
            searchDiv.width = '0vw';
            searchDiv.opacity = '0';
            searchDiv.border = 'none';
            searchIcon.display = 'initial';
        }

        let showMovies = [];
        if(movies) {
            showMovies = movies.map((item,i) => {
                return (
                    <Link key={i} to={"/movie/" + item.id} className={classes.Item} onClick={this.resetSearchBar}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                        <div>
                            <p className={classes.Original}>{item.original_title}</p>
                            <p className={classes.Translated}>{item.title}</p>
                        </div>
                    </Link>
                )
            })
        }

        let showTV = [];
        if(movies) {
            showTV = tv.map((item,i) => {
                return (
                    <Link key={i} to={"/tv/" + item.id} className={classes.Item} onClick={this.resetSearchBar} >
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                        <div>
                            <p className={classes.Original}>{item.original_name}</p>
                            <p className={classes.Translated}>{item.name}</p>
                        </div>
                    </Link>
                )
            })
        }

        let showPersons = [];
        if(persons) {
            showPersons = persons.map((item,i) => {
                return (
                    <Link key={i} to={"/person/" + item.id} className={classes.Item} onClick={this.resetSearchBar} >
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                        <div>
                            <p className={classes.Translated}>{item.name}</p>
                        </div>
                    </Link>
                )
            })
        }

        return (
            <div className={classes.SearchBar}>
                <i style={searchIcon} className="fas fa-search fa-2x" onClick={this.showSearchInput}></i>
                <div className={classes.Search} >
                    <input 
                        type='text' 
                        style={searchDiv} 
                        ref="searchInput" 
                        placeholder='filmy, seriale, gatunki' 
                        onChange={this.changeInputHandler}
                        onKeyDown={this.keyDownHandler}
                        value={searchQuery} 
                        disabled={!show} 
                    />
                    <button style={cancelStyle} onClick={this.deleteQuery} ><i className="fas fa-times"></i></button>
                </div>
                <div className={classes.Results} style={resultsStyle} >
                    {this.state.loading ? <Loader /> :
                        <div className={classes.hideScroll}>
                        <div>
                            <h2>Filmy</h2>
                            <div className={classes.ResultsContainer}>
                                {showMovies}
                            </div>
                            <h2>Seriale</h2>
                            <div className={classes.ResultsContainer}>
                                {showTV}
                            </div>
                            <h2>Postacie</h2>
                            <div className={classes.ResultsContainer}>
                                {showPersons}
                            </div>
                        </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(null, { getSearchMovies, getSearchTV, getSearchPersons })(SearchBar);