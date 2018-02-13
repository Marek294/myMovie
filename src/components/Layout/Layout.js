import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';
import NavigationBar from '../Navigation/NavigationBar/NavigationBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerOpenedHandler = () => {
        console.log('asd');
        this.setState({
            showSideDrawer: true
        })
    }

    render () {
        return (
            <ReactAux>
                <NavigationBar opened={this.sideDrawerOpenedHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}
                />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </ReactAux>
        );
    }
}

export default Layout;