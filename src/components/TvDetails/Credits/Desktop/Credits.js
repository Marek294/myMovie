import React from 'react';
import ReactAux from '../../../../hoc/ReactAux';
import _ from 'lodash';
import Image from './../../Image';

import noProfile from '../../../../assets/no_profile.png';
import classes from './Credits.css';

const Credits = (props) => {
    const created_by = props.created_by.map((item,i) => {
        return (
            <div key={i} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                <p>{item.name}</p>
            </div>
        )
    })

    let cast = _.orderBy(props.credits.cast, ['order'], ['asc']);
    cast = cast.map((item,i) => {
        return (
            <div key={i} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.profile_path].join('')} default={noProfile} alt="" />
                <p>{item.name}</p>
                <p style={{fontWeight: 'normal'}}>{item.character}</p>
            </div>
        )
    })

    const crew = props.credits.crew.map((item,i) => {
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