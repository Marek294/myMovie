import React from 'react';

import ReactAux from '../../../hoc/ReactAux';
import HomeTop from '../../../components/HomeTop/HomeTop';
import TopRatedTv from '../../../components/Tops/TopRatedTv/Desktop/TopRatedTv';
import MostPopularTv from '../../../components/Tops/MostPopularTv/Desktop/MostPopularTv';
import TopRatedMovies from '../../../components/Tops/TopRatedMovies/Desktop/TopRatedMovies';
import MostPopularMovies from '../../../components/Tops/MostPopularMovies/Desktop/MostPopularMovies';

const Desktop = (props) => {
    return (
        <ReactAux>
            <HomeTop Upcoming={props.Upcoming}/>
            <TopRatedTv topRatedTv={props.topRatedTv} />
            <MostPopularTv mostPopularTv={props.mostPopularTv} />
            <TopRatedMovies topRatedMovies={props.topRatedMovies} />
            <MostPopularMovies mostPopularMovies={props.mostPopularMovies}/>
        </ReactAux>
    );
};

export default Desktop;