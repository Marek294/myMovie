import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import NavigationBar from '../Navigation/NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    return (
        <ReactAux>
            <div>
                <NavigationBar />
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />
        </ReactAux>
    );
};

export default Layout;