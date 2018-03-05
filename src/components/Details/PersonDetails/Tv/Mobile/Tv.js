import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ReactAux from '../../../../../hoc/ReactAux';
import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Tv.css';
import section from '../../../MobileSection.css';

const Tv = (props) => {
    let tv_cast = _.uniqBy(props.tv_credits.cast, 'id')

    tv_cast = tv_cast.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow/>
                <p>{item.name}</p>
                {item.character && <p className={classes.Character}>jako {item.character}</p>}
            </Link>
        )
    })

    let tv_crew = _.uniqBy(props.tv_credits.crew, 'id')

    tv_crew = tv_crew.map((item,i) => {
        return (
            <Link key={i} to={"/tv/" + item.id} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" shadow/>
                <p>{item.name}</p>
                <p>{item.job}</p>
            </Link>
        )
    })

    return (
        <div className={[classes.Tv,section.Container].join(' ')}>
            {tv_cast.length > 0 && 
                <ReactAux>
                    <h1>Aktor</h1>
                    <div className={classes.PersonContainer}>
                        {tv_cast}
                    </div>
                </ReactAux>
            }
            {tv_crew.length > 0 && 
                <ReactAux>
                    <h1>Załoga</h1>
                    <div className={classes.PersonContainer}>
                        {tv_crew}
                    </div>
                </ReactAux>
            }
            {tv_cast.length > 0 || tv_crew.length > 0 ? null : <h1>Brak pozycji</h1>}
        </div>
    );
};

export default Tv;