import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ReactAux from '../../../../../hoc/ReactAux';
import Image from '../../../../../hoc/Image/Image';

import noProfile from '../../../../../assets/no_profile.png';
import classes from './Credits.css';
import section from '../../../MobileSection.css';

const Credits = (props) => {
    const { movie } = props;

    let cast = _.orderBy(movie.credits.cast, ['order'], ['asc']);
    cast = cast.map((item,i) => {
        return (
            <Link key={i} to={"/person/" + item.id} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" shadow/>
                <p>{item.name}</p>
                <p style={{fontWeight: 'normal'}}>{item.character}</p>
            </Link>
        )
    })

    const crew = movie.credits.crew.map((item,i) => {
        return (
            <Link key={i} to={"/person/" + item.id} className={classes.Item} >
                <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" shadow/>
                <p>{item.name}</p>
                <p style={{fontWeight: 'normal'}}>{item.job}</p>
            </Link>
        )
    })

    return (
        <div className={[classes.Credits,section.Container].join(' ')}>
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