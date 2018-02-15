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
        this.setState({
            showSideDrawer: true
        })
    }

    render () {
        return (
            <ReactAux>
                <div>
                    <NavigationBar opened={this.sideDrawerOpenedHandler} />
                    <SideDrawer 
                        open={this.state.showSideDrawer} 
                        closed={this.sideDrawerClosedHandler}
                    />
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer />
            </ReactAux>
        );
    }
}

export default Layout;