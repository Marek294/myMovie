import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import ReactAux from '../../../hoc/ReactAux';

import classes from './NavigationItems.css';

class NavigationItems extends Component {
    state = {
        active: 'main'
    }

    clickHandle(navString) {
        this.setState({
            active: navString
        })
    }

    render() {
        const { active } = this.state;
        return (
            <ul className={classes.NavList}>
                <NavigationItem click={() => this.clickHandle('main')} name='main' active={active} >Strona główna</NavigationItem>
                <NavigationItem click={() => this.clickHandle('tv')} name='tv' active={active} >Seriale</NavigationItem>
                <NavigationItem click={() => this.clickHandle('movie')} name='movie' active={active} >Filmy</NavigationItem>
                <NavigationItem click={() => this.clickHandle('mylist')} name='mylist' active={active} >Moja lista</NavigationItem>
                {this.props.sideDrawer && 
                    <ReactAux>
                        <NavigationItem click={() => this.clickHandle('search')} name='search' active={active} >Szukaj</NavigationItem>
                        <NavigationItem click={() => this.clickHandle('settings')} name='settings' active={active} >Ustawienia</NavigationItem>
                        <NavigationItem click={this.props.logout} name='logout' active={active} >Wyloguj</NavigationItem>
                    </ReactAux>
                }
            </ul>
        );
    }
}

export default NavigationItems;