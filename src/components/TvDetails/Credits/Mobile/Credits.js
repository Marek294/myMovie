import React from 'react';
import ReactAux from '../../../../hoc/ReactAux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Image from '../../../../hoc/Image';

import noProfile from '../../../../assets/no_profile.png';
import classes from './Credits.css';

const Credits = (props) => {
    const { tv } = props;

    const created_by = tv.created_by.map((item,i) => {
        return (
            <Link key={i} to={"/person/" + item.id} >
                <div key={i} className={classes.Item}>
                    <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                    <p>{item.name}</p>
                </div>
            </Link>
        )
    })

    let cast = _.orderBy(tv.credits.cast, ['order'], ['asc']);
    cast = cast.map((item,i) => {
        return (
            <Link key={i} to={"/person/" + item.id} >
                <div key={i} className={classes.Item}>
                    <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                    <p>{item.name}</p>
                    <p style={{fontWeight: 'normal'}}>{item.character}</p>
                </div>
            </Link>
        )
    })

    const crew = tv.credits.crew.map((item,i) => {
        return (
            <div key={i} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                <p>{item.name}</p>
                <p style={{fontWeight: 'normal'}}>{item.job}</p>
            </div>
        )
    })

    return (
        <div className={classes.Credits}>
            {created_by.length > 0 && 
                <ReactAux>
                <h1>Twórcy</h1>
                <div className={classes.PersonContainer}>
                    {created_by}
                </div>
                </ReactAux>
            }
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