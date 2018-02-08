import React from 'react';
import moment from 'moment';
import 'moment/min/locales';

import classes from './RightSide.css';

const RightSide = (props) => {
    moment.locale('pl');

    const networks = props.networks.map(item => {
        return item.name;
    })

    const genres = props.genres.map(item => {
        return item.name;
    })

    const episode_run_time = props.episode_run_time.map(item => {
        return item+'m';
    })

    const keywords = props.keywords.results.map(item => {
        return item.name;
    })

    const production_companies = props.production_companies.map(item => {
        return item.name;
    })

    return (
        <div className={classes.RightSide}>
            <div className={classes.Info}>
                <p className={classes.Head}>Kraj</p>
                <p className={classes.Body}>{props.origin_country.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Sieć</p>
                <p className={classes.Body}>{networks.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Firmy produkcyjne</p>
                <p className={classes.Body}>{production_companies.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Data pierwszej emisji</p>
                <p className={classes.Body}>{moment(props.first_air_date).format('LL')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Data ostatniej emisji</p>
                <p className={classes.Body}>{moment(props.last_air_date).format('LL')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Gatunek</p>
                <p className={classes.Body}>{genres.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Czas trwania</p>
                <p className={classes.Body}>{episode_run_time.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Strona serialu</p>
                <a href={props.homepage} className={classes.Body}>Link</a>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Słowa kluczowe</p>
                <p className={classes.Body}>{keywords.join(', ')}</p>
            </div>
        </div>
    );
};

export default RightSide;