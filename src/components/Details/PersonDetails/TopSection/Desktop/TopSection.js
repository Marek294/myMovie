import React from 'react';
import moment from 'moment';
import 'moment/min/locales';

import classes from './TopSection.css';

const TopSection = (props) => {
    moment.locale('pl');
    
    return (
        <div className={classes.TopSection}>
            <div className={classes.Background}>
                <div className={classes.Overlay}/>
            </div>
            <div className={classes.Details}>
                <img src={['https://image.tmdb.org/t/p/original',props.profile_path].join('')} alt="" />
                <div className={classes.Info}>
                    <h2>{props.name}</h2>
                    {props.birthday && 
                    <div>
                        <p>Data urodzenia</p>
                        <p>{moment(props.birthday).format('LL')}</p>
                    </div> }

                    {props.place_of_birth && 
                    <div>
                        <p>Miejsce urodzenia</p>
                        <p>{props.place_of_birth}</p>
                    </div> }

                    {props.deathday && 
                    <div>
                        <p>Data śmierci</p>
                        <p>{moment(props.deathday).format('LL')}</p>
                    </div> }

                    {props.biography && 
                    <div>
                        <p>Biografia</p>
                        <p>{props.biography}</p>
                    </div> }

                    {props.homepage && 
                    <div>
                        <a href={props.homepage}>Strona internetowa</a>
                    </div> }
                </div>
            </div>
        </div>
    );
};

export default TopSection;