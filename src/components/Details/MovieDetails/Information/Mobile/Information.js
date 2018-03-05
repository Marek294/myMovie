import React from 'react';
import moment from 'moment';
import 'moment/min/locales';

import classes from './Information.css';
import section from '../../../MobileSection.css';

const Information = (props) => {
    const { movie } = props;

    moment.locale('pl');

    const production_countries = movie.production_countries.map(item => {
        return item.name;
    })

    const genres = movie.genres.map(item => {
        return item.name;
    })

    const runtime = movie.runtime+"m";

    const budget = movie.budget.toLocaleString()+" $";

    const production_companies = movie.production_companies.map(item => {
        return item.name;
    })

    return (
        <div className={[classes.Information, section.Container].join(' ')}>
            <div className={classes.Info}>
                <p className={classes.Head}>Kraj</p>
                <p className={classes.Body}>{production_countries.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Budżet</p>
                <p className={classes.Body}>{budget}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Firmy produkcyjne</p>
                <p className={classes.Body}>{production_companies.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Data premiery</p>
                <p className={classes.Body}>{moment(movie.release_date).format('LL')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Gatunek</p>
                <p className={classes.Body}>{genres.join(', ')}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Czas trwania</p>
                <p className={classes.Body}>{runtime}</p>
            </div>
            <div className={classes.Info}>
                <p className={classes.Head}>Strona filmu</p>
                <a href={movie.homepage} className={classes.Body}>Link</a>
            </div>
        </div>
    );
};

export default Information;