import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationBar.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg';

class NavigationBar extends Component {
    state = {
        active: 'main',
        show: false,
        searchQuery: ''
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    clickHandle(navString) {
        this.setState({
            active: navString
        })
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

    deleteQuery = () => {
        this.setState({
            searchQuery: '',
            show: false
        })
    }

    render() {

        const { show, searchQuery } = this.state;

        const cancelStyle = {
            display: 'none'
        }

        const searchDiv = {
            height: '2vw',
            transition: 'all 500ms'
        }

        const searchIcon = {
            transition: 'all 500ms'
        }

        if(show) {
            searchDiv.width = '20vw';
            searchDiv.opacity = '1';
            searchDiv.border = '1px solid #c20114';
            searchIcon.opacity = '0';
            if(searchQuery !== '') cancelStyle.display = 'flex';
        }
        else {
            searchDiv.width = '0vw';
            searchDiv.opacity = '0';
            searchDiv.border = 'none';
            searchIcon.opacity = '1';
        }

        return (
            <div className={classes.NavBar}>
                <div className={classes.LeftSide}>
                    <Link to="/" ><img src={logo} alt="" /></Link>
                    <ul className={classes.NavList}>
                        <li className={[classes.NavItem, this.state.active === 'main' && classes.Active].join(' ')} onClick={() => this.clickHandle('main')}>
                            <a >Strona główna</a>
                            <div className={classes.border}/>
                        </li>
                        <li className={[classes.NavItem, this.state.active === 'tv' && classes.Active].join(' ')} onClick={() => this.clickHandle('tv')}>
                            <a >Seriale</a>
                            <div className={classes.border}/>
                        </li>
                        <li className={[classes.NavItem, this.state.active === 'movie' && classes.Active].join(' ')} onClick={() => this.clickHandle('movie')}>
                            <a >Filmy</a>
                            <div className={classes.border}/>
                        </li>
                        <li className={[classes.NavItem, this.state.active === 'mylist' && classes.Active].join(' ')} onClick={() => this.clickHandle('mylist')}>
                            <a >Moja lista</a>
                            <div className={classes.border}/>
                        </li>
                    </ul>
                </div>
                <div className={classes.RightSide}>
                    <i style={searchIcon} className="fas fa-search fa-2x" onClick={this.showSearchInput}></i>
                    <div className={classes.Search} >
                        <input type='text' style={searchDiv} ref="searchInput" placeholder='filmy, seriale, gatunki' onChange={this.changeInputHandler} value={searchQuery} disabled={!show} />
                        <button style={cancelStyle} onClick={this.deleteQuery} ><i className="fas fa-times"></i></button>
                    </div>
                    <div className={classes.User}>
                        <img src={user} alt=""/>
                        <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;