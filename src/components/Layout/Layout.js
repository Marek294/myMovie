import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import NavigationBar from '../../containers/NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

const layout = (props) => {
    return (
        <ReactAux>
            <NavigationBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </ReactAux>
    );
};

export default layout;