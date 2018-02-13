import React, { Component } from 'react';

import classes from './SearchBar.css';

class SearchBar extends Component {
    state = {
        show: false,
        searchQuery: ''
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

    deleteQuery = () => {
        this.setState({
            searchQuery: '',
            show: false
        })
    }

    render() {
        const { show, searchQuery } = this.state;

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
            <div className={classes.SearchBar}>
                <i style={searchIcon} className="fas fa-search fa-2x" onClick={this.showSearchInput}></i>
                <div className={classes.Search} >
                    <input type='text' style={searchDiv} ref="searchInput" placeholder='filmy, seriale, gatunki' onChange={this.changeInputHandler} value={searchQuery} disabled={!show} />
                    <button style={cancelStyle} onClick={this.deleteQuery} ><i className="fas fa-times"></i></button>
                </div>
            </div>
        );
    }
}

export default SearchBar;