import React from 'react';
import { Link } from 'react-router-dom';
import ReactAux from '../../../../hoc/ReactAux';
import _ from 'lodash';
import Image from '../../../../hoc/Image';

import noProfile from '../../../../assets/no_profile.png';
import classes from './Credits.css';

const Credits = (props) => {

    let cast = _.orderBy(props.credits.cast, ['order'], ['asc']);
    cast = cast.map((item,i) => {
        return (
            <Link key={i} to={"/person/" + item.id} >
                <div key={i} className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                    </div>
                    <p>{item.name}</p>
                    <p style={{fontWeight: 'normal'}}>{item.character}</p>
                </div>
            </Link>
        )
    })

    const crew = props.credits.crew.map((item,i) => {
        return (
            <Link key={i} to={"/person/" + item.id} >
                <div key={i} className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                    </div>
                    <p>{item.name}</p>
                    <p style={{fontWeight: 'normal'}}>{item.job}</p>
                </div>
            </Link>
        )
    })

    return (
        <div className={classes.Credits}>
            {cast.length > 0 && 
                <ReactAux>
                <h1>Obsada</h1>
                <div className={classes.PersonContainer}>
                    {cast}
                </div>
                </ReactAux>
            }
            {crew.length > 0 && 
                <ReactAux>
                <h1>Załoga</h1>
                <div className={classes.PersonContainer}>
                    {crew}
                </div>
                </ReactAux>
            }
        </div>
    );
};

export default Credits;