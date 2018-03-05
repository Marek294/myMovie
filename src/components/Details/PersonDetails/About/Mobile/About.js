import React from 'react';
import moment from 'moment';
import 'moment/min/locales';

import Image from '../../../../../hoc/Image/Image';
import noProfile from '../../../../../assets/no_profile.png';
import classes from './About.css';
import section from '../../../MobileSection.css';

const About = (props) => {
    moment.locale('pl');
    const { person } = props;

    return (
        <div className={[classes.About,section.Container].join(' ')}>
            <div>
                <Image src={['https://image.tmdb.org/t/p/w200/',person.profile_path].join('')} default={noProfile} alt="" shadow />
                <h2>{person.name}</h2>
            </div>
            <div className={classes.Info}>
                {person.birthday && 
                    <div>
                        <p className={classes.Head}>Data urodzenia</p>
                        <p>{moment(person.birthday).format('LL')}</p>
                    </div> }

                {person.place_of_birth && 
                <div>
                    <p>Miejsce urodzenia</p>
                    <p>{person.place_of_birth}</p>
                </div> }

                {person.deathday && 
                <div>
                    <p>Data śmierci</p>
                    <p>{moment(person.deathday).format('LL')}</p>
                </div> }

                {person.biography && 
                <div>
                    <p>Biografia</p>
                    <p>{person.biography}</p>
                </div> }

                {person.homepage && 
                <div>
                    <a href={person.homepage}>Strona internetowa</a>
                </div> }
            </div>
        </div>
    );
};

export default About;