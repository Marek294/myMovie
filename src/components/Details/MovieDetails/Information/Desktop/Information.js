import React from 'react';
import moment from 'moment';
import 'moment/min/locales';

import classes from './Information.css';

const Information = (props) => {
    moment.locale('pl');

    const production_countries = props.production_countries.map(item => {
        return item.name;
    })

    const genres = props.genres.map(item => {
        return item.name;
    })

    const runtime = props.runtime+"m";

    const budget = props.budget.toLocaleString()+" $";

    const production_companies = props.production_companies.map(item => {
        return item.name;
    })

    return (
        <div className={classes.Information}>
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
                <p className={classes.Body}>{moment(props.release_date).format('LL')}</p>
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
                <a href={props.homepage} className={classes.Body}>Link</a>
            </div>
        </div>
    );
};

export default Information;