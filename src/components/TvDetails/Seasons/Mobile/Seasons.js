import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import 'moment/min/locales';
import Image from '../../../../hoc/Image';

import noPoster from '../../../../assets/no_poster.jpg';
import classes from './Seasons.css';

const Seasons = (props) => {
    const { tv } = props; 
    moment.locale('pl');

    let seasons = _.orderBy(tv.seasons, ['season_number'], ['asc']);
    seasons = seasons.map((item,i) => {
        const wasPerformed = moment().isAfter(item.air_date);
        return (
            <div key={i} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                <div className={classes.Info}>
                    <h1>Sezon {item.season_number}</h1>
                    <div className={classes.YearAndEpisodeCount}>
                        {item.air_date && <p>{moment(item.air_date).format('YYYY')}</p>}
                        {item.air_date && item.episode_count && <p>|</p>}
                        {item.episode_count > 0 && <p>{item.episode_count} odcinków</p>}
                    </div>
                    {item.air_date && <p>Premiera sezonu {wasPerformed ? 'odbyła' : 'odbędzie'} się {moment(item.air_date).format('LL')}</p>}
                </div>
            </div>
        )
    })
    return (
        <div className={classes.Seasons}>
            {seasons.length > 0 ? seasons : <h1>Brak pozycji</h1>}
        </div>
    );
};

export default Seasons;