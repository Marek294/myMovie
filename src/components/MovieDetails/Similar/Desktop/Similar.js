import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Image';

import noPoster from '../../../../assets/no_poster.jpg';
import classes from './Similar.css';

const Similar = (props) => {
    const similar = props.similar.results.map((item,i) => {
        console.log(item.poster_path,item.original_title);
        return (
            <Link key={i} to={"/movie/" + item.id} >
                <div className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <Image src={['https://image.tmdb.org/t/p/w200/',item.poster_path].join('')} default={noPoster} alt="" />
                    </div>
                    <div className={classes.Overlay}>
                        <div className={classes.Description}>
                            <p>{item.title}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={classes.Container}>
            {similar}
        </div>
    );
};

export default Similar;